
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, UserCircle, RefreshCw } from "lucide-react";
import ModelSelector from './ModelSelector';
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const ChatInterface = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Vyoma, your AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm just a demo interface right now, but the real Vyoma would provide an intelligent response based on your query!",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className={`w-full h-full flex flex-col rounded-2xl ${isMobile ? '' : 'glass'} overflow-hidden ${isMobile ? 'border-0' : 'border border-border'}`}>
      {/* Chat header */}
      <div className={`p-3 md:p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white/80'} border-b border-border flex items-center justify-between`}>
        <h3 className="font-medium">Chat with Vyoma</h3>
        <ModelSelector />
      </div>
      
      {/* Messages area */}
      <div className={`flex-grow overflow-y-auto p-3 md:p-4 space-y-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white/5'}`}>
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.sender === 'user' 
                  ? 'bg-vyoma text-white rounded-tr-none' 
                  : theme === 'dark' ? 'bg-gray-800 rounded-tl-none' : 'bg-secondary rounded-tl-none'
              }`}
            >
              <div className="flex items-center mb-1">
                {message.sender === 'ai' ? (
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-vyoma to-vyoma-dark flex items-center justify-center mr-2">
                    <span className="text-white font-semibold text-xs">V</span>
                  </div>
                ) : (
                  <UserCircle size={20} className="mr-2" />
                )}
                <span className="text-xs opacity-70">
                  {message.sender === 'ai' ? 'Vyoma' : 'You'} • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className={`max-w-[80%] p-3 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-secondary'} rounded-tl-none animate-pulse`}>
              <div className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-vyoma to-vyoma-dark flex items-center justify-center mr-2">
                  <span className="text-white font-semibold text-xs">V</span>
                </div>
                <RefreshCw size={16} className="animate-spin opacity-70" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <div className={`p-3 md:p-4 border-t border-border ${theme === 'dark' ? 'bg-gray-800' : 'bg-white/80'}`}>
        <div className="flex items-center space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className={`flex-1 ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : ''}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-vyoma hover:bg-vyoma-dark text-white rounded-full h-10 w-10 p-0 flex items-center justify-center"
          >
            <Send size={18} />
          </Button>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-center">
          <span>Free tier: 10 messages remaining today</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
