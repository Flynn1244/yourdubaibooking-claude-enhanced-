import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendConciergeMessage } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Good evening. I am Q, your digital concierge. How may I assist with your travels today?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setIsLoading(true);

    // Optimistically add user message
    const newHistory = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(newHistory);

    try {
      const responseText = await sendConciergeMessage(userMsg, newHistory);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I am momentarily unavailable.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 overflow-hidden flex flex-col h-[500px] animate-fade-in-up origin-bottom-right">
          {/* Header */}
          <div className="bg-luxury-black p-4 flex justify-between items-center border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-luxury-gold" />
              <span className="text-white font-serif text-sm tracking-wider">Q | Private Concierge</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={`msg-${idx}-${msg.role}`} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-luxury-black text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-luxury-gold" />
                    <span className="text-xs text-gray-400">Consulting experts...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about hotels, flights..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-luxury-black text-white p-2 rounded-md hover:bg-luxury-gold transition-colors disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-luxury-black text-white shadow-2xl hover:bg-luxury-gold transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20 group-hover:opacity-0" />
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};