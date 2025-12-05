import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, MessageSquare, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hi there! I can tell you more about m4rcel-lol\'s work and skills. What would you like to know?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[400px] h-[600px] max-h-[70vh] flex flex-col bg-[#1E1F20] rounded-3xl shadow-2xl border border-[#444746] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#444746] bg-[#1E1F20]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#E3E3E3]">Portfolio Assistant</h3>
                  <p className="text-xs text-[#C4C7C5]">Powered by Gemini</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#C4C7C5] hover:text-[#E3E3E3] hover:bg-[#303030] rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-6"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#A8C7FA] text-[#001D35] rounded-br-sm'
                        : 'bg-[#303030] text-[#E3E3E3] rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#303030] rounded-2xl px-5 py-4 rounded-bl-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-[#C4C7C5] rounded-full animate-pulse"></span>
                    <span className="w-1.5 h-1.5 bg-[#C4C7C5] rounded-full animate-pulse delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-[#C4C7C5] rounded-full animate-pulse delay-300"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-[#1E1F20]">
              <div className="relative flex items-center bg-[#303030] rounded-full border border-transparent focus-within:border-[#A8C7FA] transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent px-6 py-4 text-sm text-[#E3E3E3] placeholder-[#C4C7C5] focus:outline-none rounded-full"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-[#A8C7FA] text-[#001D35] rounded-full hover:bg-[#8AB4F8] disabled:opacity-50 disabled:bg-[#444746] disabled:text-[#C4C7C5] transition-colors"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin"/> : <Send size={18} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-[#A8C7FA] text-[#001D35] rounded-2xl shadow-lg hover:shadow-xl hover:bg-[#8AB4F8] transition-all font-medium"
      >
        <Sparkles size={20} />
        <span className="hidden sm:inline">Ask AI</span>
      </motion.button>
    </>
  );
};

export default ChatGuide;