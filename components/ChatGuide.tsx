import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, Loader2 } from 'lucide-react';
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
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-4 md:right-6 z-50 w-[92vw] sm:w-[400px] h-[600px] max-h-[70vh] flex flex-col bg-[#1E1F25] rounded-[28px] shadow-2xl overflow-hidden border border-[#44474E]/30"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-[#1E1F25] border-b border-[#44474E]/30">
              <div className="flex items-center gap-3 pl-2">
                <div className="w-8 h-8 rounded-full bg-[#A8C7FA] flex items-center justify-center">
                  <Sparkles size={16} className="text-[#00315F]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#E2E2E9]">Assistant</h3>
                  <p className="text-xs text-[#C4C6D0]">Powered by Gemini</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 text-[#C4C6D0] hover:bg-[#44474E]/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#111318]"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-5 py-3 text-sm leading-relaxed tracking-wide ${
                      msg.role === 'user'
                        ? 'bg-[#004786] text-[#D6E3FF] rounded-[20px] rounded-br-[4px]'
                        : 'bg-[#282A2F] text-[#E2E2E9] rounded-[20px] rounded-bl-[4px]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#282A2F] px-5 py-4 rounded-[20px] rounded-bl-[4px] flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-[#C4C6D0] rounded-full animate-pulse"></span>
                    <span className="w-1.5 h-1.5 bg-[#C4C6D0] rounded-full animate-pulse delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-[#C4C6D0] rounded-full animate-pulse delay-300"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-[#1E1F25]">
              <div className="relative flex items-center bg-[#282A2F] rounded-full ring-1 ring-[#44474E]/50 focus-within:ring-[#A8C7FA] focus-within:ring-2 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent px-6 py-4 text-sm text-[#E2E2E9] placeholder-[#8E9099] focus:outline-none rounded-full"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="mr-2 p-2.5 bg-[#A8C7FA] text-[#00315F] rounded-full hover:bg-[#D6E3FF] disabled:opacity-50 disabled:bg-[#44474E] disabled:text-[#8E9099] transition-colors"
                >
                  {isLoading ? <Loader2 size={20} className="animate-spin"/> : <Send size={20} />}
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
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-[#A8C7FA] text-[#001D35] rounded-[16px] shadow-lg hover:shadow-xl transition-all font-medium tracking-wide"
      >
        <Sparkles size={20} />
        <span className="hidden sm:inline">Ask AI</span>
      </motion.button>
    </>
  );
};

export default ChatGuide;