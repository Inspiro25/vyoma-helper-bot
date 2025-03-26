
import React from 'react';
import { motion } from "framer-motion";
import { Users, Award, Heart, ArrowRight } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
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
                About Vyoma AI
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Learn about our mission to democratize access to powerful AI tools for developers, educators, and learners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Vyoma AI, we believe that powerful AI tools should be accessible to everyone. Our mission is to democratize access to cutting-edge AI technology and make it usable in everyday contexts for developers, educators, and learners.
              </p>
              <p className="text-lg text-muted-foreground">
                We're committed to building an AI assistant that not only helps with coding challenges but also serves as a companion for learning, creativity, and productivity. Vyoma is designed to be more than just a tool—it's your AI partner in the digital age.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do at Vyoma AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Users size={36} className="text-vyoma mb-6" />
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe powerful AI tools should be accessible to everyone, not just large corporations or specialized researchers. Vyoma is designed to be intuitive and helpful for users of all technical levels.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Award size={36} className="text-vyoma mb-6" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do. From the quality of our AI models to the user experience of our platform, we're committed to delivering the best possible solution for our users.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Heart size={36} className="text-vyoma mb-6" />
              <h3 className="text-xl font-bold mb-3">User-Centered</h3>
              <p className="text-muted-foreground">
                Our users are at the heart of everything we build. We actively listen to feedback and continuously improve Vyoma to better serve the needs of developers, educators, and learners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of AI researchers, engineers, and designers committed to building the future of AI assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team profiles would go here */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-vyoma to-vyoma-dark opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">VP</div>
              </div>
              <h3 className="text-xl font-bold">Vikram Patel</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-vyoma to-vyoma-dark opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">AK</div>
              </div>
              <h3 className="text-xl font-bold">Anita Kumar</h3>
              <p className="text-muted-foreground">Chief AI Scientist</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-vyoma to-vyoma-dark opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">RL</div>
              </div>
              <h3 className="text-xl font-bold">Ray Liu</h3>
              <p className="text-muted-foreground">Lead Engineer</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
