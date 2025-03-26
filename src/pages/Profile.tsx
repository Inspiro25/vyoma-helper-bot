
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Settings, Mail, LogOut } from "lucide-react";
import { useToast } from '@/components/ui/use-toast';
import { useTheme } from '@/context/ThemeContext';

const Profile = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          navigate('/auth');
          return;
        }
        
        setUser(session.user);
        setEmail(session.user.email);
        
        // You could fetch additional profile data from your profiles table here if you have one
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        toast({
          title: "Error",
          description: "Failed to load profile information",
          variant: "destructive",
        });
        setLoading(false);
      }
    };
    
    fetchUserProfile();
  }, [navigate, toast]);

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

  const handleSaveProfile = async () => {
    // Here you would update the user profile in your database
    // For demo purposes, we'll just show a success toast
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 px-4 sm:px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Your Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Info Card */}
            <Card className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}`}>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-2">
                  <AvatarImage src={user?.user_metadata?.avatar_url || ''} />
                  <AvatarFallback>
                    <User size={40} />
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{username || email?.split('@')[0] || 'User'}</CardTitle>
                <CardDescription>{email}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Button variant="outline" onClick={() => handleLogout()} className="w-full">
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </Button>
              </CardFooter>
            </Card>
            
            {/* Account Details Card */}
            <Card className={`md:col-span-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}`}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User size={20} className="mr-2" />
                  Account Details
                </CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2 text-muted-foreground" />
                    <Input 
                      id="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username">Display Name</Label>
                  <Input 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    disabled={!isEditing}
                    placeholder="Add a display name"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {isEditing ? (
                  <>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                    <Button onClick={handleSaveProfile}>Save Changes</Button>
                  </>
                ) : (
                  <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
