
import React from 'react';
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Choose the plan that best fits your needs. No hidden fees or surprise charges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-gray-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium mb-2">Free</h3>
                <div className="text-4xl font-bold mb-2">$0<span className="text-lg text-muted-foreground font-normal">/month</span></div>
                <p className="text-muted-foreground">Get started with basic AI assistance</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>50 AI messages per day</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Basic code assistance</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Access to GPT-3.5 model</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Basic MCQ generator</span>
                </li>
                <li className="flex items-start">
                  <X size={20} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced Vite app building</span>
                </li>
                <li className="flex items-start">
                  <X size={20} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Priority support</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gray-800 text-white hover:bg-gray-700">
                Get Started Free
              </Button>
            </motion.div>
            
            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-vyoma transform scale-105 z-10"
            >
              <div className="text-center mb-8">
                <div className="inline-block px-3 py-1 bg-vyoma text-white text-xs font-semibold rounded-full mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-medium mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-2">$19<span className="text-lg text-muted-foreground font-normal">/month</span></div>
                <p className="text-muted-foreground">Perfect for professionals and educators</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Unlimited AI messages</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Advanced code generation & debugging</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Access to GPT-4 model</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Full MCQ generator capabilities</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Basic Vite app building</span>
                </li>
                <li className="flex items-start">
                  <X size={20} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Priority support</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-vyoma to-vyoma-dark text-white hover:shadow-lg">
                Subscribe Now
              </Button>
            </motion.div>
            
            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-600"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium mb-2">Enterprise</h3>
                <div className="text-4xl font-bold mb-2">$49<span className="text-lg text-muted-foreground font-normal">/month</span></div>
                <p className="text-muted-foreground">For teams and businesses</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Everything in Pro plan</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Team collaboration features</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Advanced Vite app building</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Custom AI model fine-tuning</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>API access</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Priority support & dedicated manager</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Have questions about our pricing? Find answers to commonly asked questions below.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Can I switch between plans?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Is there a trial period for paid plans?</h3>
              <p className="text-muted-foreground">
                We offer a 7-day free trial for our Pro plan. You can explore all the premium features before making a commitment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards including Visa, Mastercard, and American Express. Enterprise customers can also pay via invoice.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Do you offer discounts for students and educators?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 50% discount on our Pro plan for verified students and educators. Contact our support team for details.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started with Vyoma AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that works for you and start experiencing the power of Vyoma today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-vyoma to-vyoma-dark text-white px-8 py-6 rounded-lg text-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
              Get Started Free
            </Button>
            <Button variant="outline" className="border border-vyoma text-vyoma hover:bg-vyoma hover:text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
