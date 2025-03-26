
import React from 'react';
import { motion } from "framer-motion";
import { Code, FileQuestion, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Powerful AI Features
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore the advanced capabilities of Vyoma AI designed to enhance your productivity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features List Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Code size={24} className="text-vyoma" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Advanced Code Assistant</h3>
              <p className="text-muted-foreground mb-6">
                Get help with coding problems across multiple languages. Vyoma can generate code, debug issues, and explain complex programming concepts.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Real-time syntax highlighting and autocompletion</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Cross-language support for JavaScript, Python, Java, and more</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Smart code refactoring suggestions</span>
                </li>
              </ul>
              <Button className="bg-vyoma text-white hover:bg-vyoma-dark">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <FileQuestion size={24} className="text-vyoma" />
              </div>
              <h3 className="text-2xl font-bold mb-3">MCQ Generator</h3>
              <p className="text-muted-foreground mb-6">
                Transform documents into structured multiple-choice questions for effective learning and assessment.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Support for PDF, Word, and text files</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Customizable difficulty levels</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Detailed explanations for correct answers</span>
                </li>
              </ul>
              <Button className="bg-vyoma text-white hover:bg-vyoma-dark">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Zap size={24} className="text-vyoma" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Vite App Builder</h3>
              <p className="text-muted-foreground mb-6">
                Build and modify Vite-powered applications directly through conversational prompts.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Support for React, Vue, and Svelte</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Component-based architecture</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Real-time preview and editing</span>
                </li>
              </ul>
              <Button className="bg-vyoma text-white hover:bg-vyoma-dark">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-vyoma w-6 h-6">
                  <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                  <path d="M21.17 8H12V2.83c2 .17 4.3 1.53 5.5 2.74 1.5 1.5 3.04 2.48 3.67 2.43Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Conversational AI</h3>
              <p className="text-muted-foreground mb-6">
                Chat naturally with Vyoma about any topic, from technical questions to creative brainstorming.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Context-aware responses</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Multiple AI models optimized for different tasks</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-vyoma mt-1 mr-2 flex-shrink-0" />
                  <span>Personality modes to match your preferences</span>
                </li>
              </ul>
              <Button className="bg-vyoma text-white hover:bg-vyoma-dark">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience the power of Vyoma AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of developers, educators, and learners who use Vyoma for advanced AI assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-vyoma to-vyoma-dark text-white px-8 py-6 rounded-lg text-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
              Get Started Free
            </Button>
            <Button variant="outline" className="border border-vyoma text-vyoma hover:bg-vyoma hover:text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 w-full sm:w-auto">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;
