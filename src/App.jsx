import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Image } from "lucide-react";
import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./layouts/sidebar"; // Change to sidebar layout
import Index from "./pages/Index.jsx";
import PhotoLibrary from "./pages/PhotoLibrary.jsx"; // Import the new PhotoLibrary page

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Photo Library",
    to: "/photo-library",
    icon: <Image className="h-4 w-4" />,
  },
];

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            {isAuthenticated && (
              <Route path="/photo-library" element={<Layout />}>
                <Route index element={<PhotoLibrary />} />
              </Route>
            )}
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;