import { Button } from "@/components/ui/button";
import { Heart, Home, ChefHat } from "lucide-react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/ef926022-2907-4848-80a9-411e50a81ea7.png" 
              alt="Receitas FM Team" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Receitas FM Team</h1>
              <p className="text-sm text-muted-foreground">Sobremesas Saudáveis</p>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              asChild
              className={cn(
                "flex items-center gap-2",
                location.pathname === "/" && "bg-primary text-primary-foreground"
              )}
            >
              <a href="/">
                <Home className="h-4 w-4" />
                Receitas
              </a>
            </Button>
            
            <Button
              variant={location.pathname === "/favoritos" ? "default" : "ghost"}
              asChild
              className={cn(
                "flex items-center gap-2",
                location.pathname === "/favoritos" && "bg-primary text-primary-foreground"
              )}
            >
              <a href="/favoritos">
                <Heart className="h-4 w-4" />
                Favoritos
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}