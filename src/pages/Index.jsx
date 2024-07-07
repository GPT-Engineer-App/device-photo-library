import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Your Blank Canvas</h1>
      <p>Chat with the agent to start making edits.</p>
      <Link to="/photo-library">
        <Button variant="outline" className="mt-4">
          Go to Photo Library
        </Button>
      </Link>
    </div>
  );
};

export default Index;
