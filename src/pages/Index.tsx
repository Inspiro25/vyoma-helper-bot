
import React from 'react';
import { motion } from "framer-motion";
import { Bot, Code, FileQuestion, Zap, Shield, Sparkles, Book, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/ChatInterface';
import CodeEditor from '@/components/CodeEditor';
import MCQGenerator from '@/components/MCQGenerator';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
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
                <Button className="bg-gradient-to-r from-vyoma to-vyoma-dark text-white px-8 py-6 rounded-lg text-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                  Get Started Free
                </Button>
                <Button variant="outline" className="border border-vyoma text-vyoma hover:bg-vyoma hover:text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 w-full sm:w-auto">
                  View Demo
                </Button>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <div className="aspect-video rounded-2xl overflow-hidden glass shadow-xl">
              <ChatInterface />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 h-20 w-20 bg-vyoma-light rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 h-12 w-12 bg-vyoma-light rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One AI, Multiple Capabilities
            </h2>
            <p className="text-muted-foreground">
              Vyoma combines powerful AI technologies to provide a versatile assistant for developers, educators, and learners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Conversational AI"
              description="Chat naturally with multiple AI models optimized for different types of queries and tasks."
              icon={<Bot size={24} className="text-vyoma" />}
              delay={100}
            />
            <FeatureCard
              title="Coding Assistant"
              description="Get help with code, debug errors, and generate optimized solutions across multiple languages."
              icon={<Code size={24} className="text-vyoma" />}
              delay={200}
            />
            <FeatureCard
              title="MCQ Generator"
              description="Transform documents into structured multiple-choice questions for effective learning and testing."
              icon={<FileQuestion size={24} className="text-vyoma" />}
              delay={300}
            />
            <FeatureCard
              title="Vite App Builder"
              description="Build and modify Vite framework applications directly through conversational prompts."
              icon={<Zap size={24} className="text-vyoma" />}
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Showcase Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="pill bg-secondary text-vyoma inline-block mb-4">
                Code Assistant
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Build Vite apps through natural conversation
              </h2>
              <p className="text-muted-foreground mb-6">
                Describe what you want to build, and watch as Vyoma generates complete, well-structured code using the Vite framework - all through conversational prompts.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Generate, modify, and debug in real-time",
                  "Support for React, Vue, and Svelte with Vite",
                  "Optimized code with best practices",
                  "Modern component architecture"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <Sparkles size={12} className="text-vyoma" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-vyoma text-white">
                Try Code Assistant
              </Button>
            </div>
            <div className="lg:pl-10">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <CodeEditor />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <MCQGenerator />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="pill bg-secondary text-vyoma inline-block mb-4">
                MCQ Generator
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform documents into structured learning materials
              </h2>
              <p className="text-muted-foreground mb-6">
                Upload your documents and let Vyoma extract key concepts to generate high-quality multiple-choice questions for effective learning and assessment.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Support for PDF, Word, and text files",
                  "Customizable difficulty levels",
                  "Explanations for correct answers",
                  "Export to various formats"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <Sparkles size={12} className="text-vyoma" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-vyoma text-white">
                Try MCQ Generator
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Vyoma?
            </h2>
            <p className="text-muted-foreground">
              Our design philosophy focuses on delivering a powerful yet intuitive experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl">
              <Shield size={32} className="text-vyoma mb-4" />
              <h3 className="text-xl font-medium mb-2">Security & Privacy</h3>
              <p className="text-muted-foreground text-sm">
                Your data is encrypted and protected. We don't store your conversations or use them for training.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl">
              <Book size={32} className="text-vyoma mb-4" />
              <h3 className="text-xl font-medium mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground text-sm">
                Vyoma continuously improves with the latest AI models and techniques to provide the best assistance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl">
              <Palette size={32} className="text-vyoma mb-4" />
              <h3 className="text-xl font-medium mb-2">Intuitive Design</h3>
              <p className="text-muted-foreground text-sm">
                Our minimalist interface makes powerful AI tools accessible to everyone, from beginners to experts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to elevate your coding and learning experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers, educators, and learners who use Vyoma for coding assistance, document processing, and more.
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

export default Index;
