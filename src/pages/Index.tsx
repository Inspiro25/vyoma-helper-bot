
import React, { useEffect, useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import ChatInterface from '@/components/ChatInterface';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from "@/context/ThemeContext";

const Index = () => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const [showChatOnly, setShowChatOnly] = useState(false);
  
  useEffect(() => {
    // On mobile, show just the chat
    if (isMobile) {
      setShowChatOnly(true);
    } else {
      setShowChatOnly(false);
    }
  }, [isMobile]);
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />
      
      {showChatOnly ? (
        // Mobile Chat-only View
        <div className="pt-16 flex-grow flex flex-col h-[calc(100vh-64px)]">
          <div className="flex-grow p-2">
            <ChatInterface />
          </div>
        </div>
      ) : (
        // Regular View with all content
        <div className="flex-grow">
          {/* Hero Section */}
          <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="pill bg-secondary text-vyoma inline-block mb-4">
                  Introducing Vyoma AI
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Your intelligent AI assistant for coding and learning
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Vyoma combines conversational AI, coding assistance, and educational tools in one powerful, intuitive interface.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/auth" className="bg-gradient-to-r from-vyoma to-vyoma-dark text-white px-8 py-6 rounded-lg text-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto inline-flex items-center justify-center">
                    Get Started Free
                  </a>
                  <button className="border border-vyoma text-vyoma hover:bg-vyoma hover:text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 w-full sm:w-auto">
                    View Demo
                  </button>
                </div>
              </div>
              
              <div className="relative z-10 max-w-5xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden glass shadow-xl">
                  <ChatInterface />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 h-20 w-20 bg-vyoma-light rounded-full opacity-60 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 h-12 w-12 bg-vyoma-light rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
