
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-vyoma to-vyoma-dark flex items-center justify-center">
            <span className="text-white font-semibold text-lg">V</span>
          </div>
          <span className="font-semibold text-xl tracking-tight">Vyoma</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="animated-underline text-sm font-medium">Home</Link>
          <Link to="/features" className="animated-underline text-sm font-medium">Features</Link>
          <Link to="/pricing" className="animated-underline text-sm font-medium">Pricing</Link>
          <Link to="/about" className="animated-underline text-sm font-medium">About</Link>
        </nav>
        
        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border border-vyoma text-vyoma hover:bg-vyoma hover:text-white transition-all duration-300">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-vyoma to-vyoma-dark text-white hover:shadow-lg transition-all duration-300">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="w-full border border-vyoma text-vyoma hover:bg-vyoma hover:text-white">
                Login
              </Button>
              <Button className="w-full bg-gradient-to-r from-vyoma to-vyoma-dark text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
