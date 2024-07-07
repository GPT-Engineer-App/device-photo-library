import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      setIsAuthenticated(true);
      toast.success("Login successful!");
      navigate("/photo-library");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark text-gold">
      <Card className="w-full max-w-md p-4 bg-dark border-gold">
        <CardHeader>
          <CardTitle className="text-center font-serif text-gold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gold">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-dark text-gold border-gold"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gold">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-dark text-gold border-gold"
              />
            </div>
            <Button type="submit" className="w-full bg-dark border-gold text-gold">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;