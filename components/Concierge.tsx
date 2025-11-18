import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getChatResponse } from '../services/geminiService';
import { Send, Sparkles, User, Bot } from 'lucide-react';

const Concierge: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Good day. I am the Galleria Luxe Concierge. How may I assist you with your visit today? I can help with store locations, dining recommendations, or upcoming events.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await getChatResponse(userMsg.text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-6 bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row h-[80vh]">
        
        {/* Sidebar Info */}
        <div className="bg-brand-dark text-white w-full md:w-1/3 p-8 hidden md:flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <Sparkles className="w-6 h-6 text-gold-400" />
                    </div>
                    <h2 className="font-serif text-2xl">Digital Concierge</h2>
                </div>
                <p className="text-gray-300 font-light leading-relaxed mb-6">
                    Our AI-powered assistant is here to curate your perfect shopping experience. Ask about:
                </p>
                <ul className="space-y-4 text-sm text-gold-200">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Store locations & hours</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Dining reservations</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Ice skating schedules</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Gift ideas</li>
                </ul>
            </div>

            <div className="text-xs text-gray-500 border-t border-white/10 pt-4">
                Powered by Gemini 2.5 Flash
            </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col h-full bg-white relative">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-gold-100'}`}>
                                {msg.role === 'user' ? <User className="w-4 h-4 text-gray-600" /> : <Bot className="w-4 h-4 text-gold-700" />}
                            </div>
                            <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                msg.role === 'user' 
                                    ? 'bg-brand-dark text-white rounded-tr-none' 
                                    : 'bg-gray-50 text-gray-800 border border-gray-100 rounded-tl-none'
                            }`}>
                                {msg.text.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < msg.text.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="flex gap-3 max-w-[85%]">
                             <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-4 h-4 text-gold-700 animate-pulse" />
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl rounded-tl-none border border-gray-100 flex items-center gap-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-gray-100 bg-white">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask Concierge..."
                        disabled={loading}
                        className="w-full pl-6 pr-14 py-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-gold-400 transition-all disabled:opacity-50"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={loading || !input.trim()}
                        className="absolute right-2 p-2 bg-brand-dark text-white rounded-full hover:bg-gold-600 disabled:bg-gray-300 transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Concierge;
