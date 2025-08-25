import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ChefHat, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <ChefHat className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Página não encontrada</p>
        <p className="text-muted-foreground mb-8">
          A receita que você está procurando não existe no nosso cardápio.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <a href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Início
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
