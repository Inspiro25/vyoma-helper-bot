
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, User, Sun, Moon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "@/context/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out successfully",
        description: "You have been signed out of your account.",
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error signing out",
        description: "There was a problem signing you out. Please try again.",
        variant: "destructive",
      });
    }
  };

  // AI Brain Logo Animation Variants
  const logoVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const pulseVariants = {
    initial: { opacity: 0.5, scale: 0.9 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [0.9, 1.05, 0.9],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const connectingLineVariants = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 glass px-4 sm:px-6 py-4 ${theme === 'dark' ? 'dark bg-gray-900/80 backdrop-blur-lg border-gray-800/50' : 'bg-white/80 backdrop-blur-lg border-white/50'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Animation */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div 
            className={`h-8 w-8 relative rounded-full flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-vyoma-dark to-vyoma' : 'bg-gradient-to-br from-vyoma to-vyoma-dark'}`}
            initial="initial"
            animate="animate"
            variants={logoVariants}
          >
            {/* AI Brain Logo */}
            <svg viewBox="0 0 32 32" className="w-6 h-6">
              <motion.path
                d="M16 8 L16 24" 
                stroke={theme === 'dark' ? "#ffffff" : "#ffffff"}
                strokeWidth="1"
                fill="none"
                variants={connectingLineVariants}
              />
              <motion.path
                d="M10 14 L22 14" 
                stroke={theme === 'dark' ? "#ffffff" : "#ffffff"}
                strokeWidth="1"
                fill="none"
                variants={connectingLineVariants}
              />
              <motion.path
                d="M10 18 L22 18" 
                stroke={theme === 'dark' ? "#ffffff" : "#ffffff"}
                strokeWidth="1"
                fill="none"
                variants={connectingLineVariants}
              />
              <motion.circle 
                cx="16" cy="11" r="3"
                fill={theme === 'dark' ? "#ffffff" : "#ffffff"}
                variants={pulseVariants}
              />
              <motion.circle 
                cx="16" cy="21" r="3"
                fill={theme === 'dark' ? "#ffffff" : "#ffffff"}
                variants={pulseVariants}
              />
            </svg>
          </motion.div>
          <span className={`font-semibold text-xl tracking-tight ${theme === 'dark' ? 'text-white' : ''}`}>Vyoma</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`animated-underline text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : ''}`}>Home</Link>
          <Link to="/features" className={`animated-underline text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : ''}`}>Features</Link>
          <Link to="/pricing" className={`animated-underline text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : ''}`}>Pricing</Link>
          <Link to="/about" className={`animated-underline text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : ''}`}>About</Link>
        </nav>
        
        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Switch */}
          <div className="flex items-center space-x-2">
            <Sun size={16} className={`${theme === 'dark' ? 'text-gray-400' : 'text-yellow-500'}`} />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              className={theme === 'dark' ? 'bg-vyoma' : ''}
            />
            <Moon size={16} className={`${theme === 'dark' ? 'text-blue-400' : 'text-gray-400'}`} />
          </div>
          
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className={`border ${theme === 'dark' ? 'border-vyoma text-vyoma-light hover:bg-vyoma-dark hover:text-white' : 'border-vyoma text-vyoma hover:bg-vyoma hover:text-white'} transition-all duration-300`}>
                  <User size={16} className="mr-2" />
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={`${theme === 'dark' ? 'bg-gray-800 text-gray-100 border-gray-700' : ''}`}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className={`${theme === 'dark' ? 'bg-gray-700' : ''}`} />
                <DropdownMenuItem className={`${theme === 'dark' ? 'hover:bg-gray-700' : ''}`}>
                  <Link to="/profile" className="flex w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className={`${theme === 'dark' ? 'hover:bg-gray-700' : ''}`}>
                  <Link to="/settings" className="flex w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className={`${theme === 'dark' ? 'bg-gray-700' : ''}`} />
                <DropdownMenuItem onClick={handleLogout} className={`text-red-500 ${theme === 'dark' ? 'hover:bg-gray-700' : ''}`}>
                  <LogOut size={16} className="mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="outline" className={`border ${theme === 'dark' ? 'border-vyoma text-vyoma-light hover:bg-vyoma-dark hover:text-white' : 'border-vyoma text-vyoma hover:bg-vyoma hover:text-white'} transition-all duration-300`}>
                  Login
                </Button>
              </Link>
              <Link to="/auth">
                <Button className={`${theme === 'dark' ? 'bg-gradient-to-r from-vyoma-dark to-vyoma' : 'bg-gradient-to-r from-vyoma to-vyoma-dark'} text-white hover:shadow-lg transition-all duration-300`}>
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Theme Toggle Button for Mobile */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={`rounded-full ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          <Button 
            variant="ghost" 
            className={`${theme === 'dark' ? 'text-gray-200 hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-16 left-0 right-0 p-4 shadow-lg animate-fade-in ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'}`}>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-secondary'} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`px-4 py-2 rounded-md ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-secondary'} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`px-4 py-2 rounded-md ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-secondary'} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-md ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-secondary'} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              {session ? (
                <>
                  <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className={`w-full border ${theme === 'dark' ? 'border-vyoma-light text-vyoma-light hover:bg-vyoma-dark' : 'border-vyoma text-vyoma hover:bg-vyoma hover:text-white'}`}>
                      Profile
                    </Button>
                  </Link>
                  <Button 
                    className={`w-full ${theme === 'dark' ? 'bg-red-600' : 'bg-red-500'} text-white`} 
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className={`w-full border ${theme === 'dark' ? 'border-vyoma-light text-vyoma-light hover:bg-vyoma-dark' : 'border-vyoma text-vyoma hover:bg-vyoma hover:text-white'}`}>
                      Login
                    </Button>
                  </Link>
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button className={`w-full ${theme === 'dark' ? 'bg-gradient-to-r from-vyoma-dark to-vyoma' : 'bg-gradient-to-r from-vyoma to-vyoma-dark'} text-white`}>
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
