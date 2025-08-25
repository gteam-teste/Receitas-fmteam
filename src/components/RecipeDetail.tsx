import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, X, Clock, Users, Zap } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { cn } from "@/lib/utils";

interface RecipeDetailProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
}

export function RecipeDetail({ recipe, isOpen, onClose, isFavorite, onToggleFavorite }: RecipeDetailProps) {
  if (!recipe) return null;

  const getCategoryColor = (categoria: string) => {
    switch (categoria.toLowerCase()) {
      case 'hipocalórico':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'hipercalórico':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'sem lactose':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'vegano':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl font-bold pr-8">{recipe.nome}</DialogTitle>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onToggleFavorite(recipe.id)}
                className="text-muted-foreground hover:text-primary"
              >
                <Heart 
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isFavorite && "fill-primary text-primary"
                  )}
                />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tags e informações rápidas */}
          <div className="flex flex-wrap gap-2">
            <Badge className={getCategoryColor(recipe.categoria)}>
              {recipe.categoria}
            </Badge>
            <Badge variant="outline" className="border-primary text-primary">
              Adoçado com {recipe.adocado_com}
            </Badge>
          </div>

          {/* Informações de rendimento e porção */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Rendimento</div>
                <div className="text-sm text-muted-foreground">{recipe.rendimento}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Porção</div>
                <div className="text-sm text-muted-foreground">{recipe.porcao}</div>
              </div>
            </div>
          </div>

          {/* Informações nutricionais */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Informações Nutricionais</h3>
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="text-xl font-bold text-primary">{recipe.nutricional.kcal}</div>
                <div className="text-sm text-muted-foreground">kcal</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-xl font-bold text-foreground">{recipe.nutricional.proteina}g</div>
                <div className="text-sm text-muted-foreground">Proteína</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-xl font-bold text-foreground">{recipe.nutricional.carboidrato}g</div>
                <div className="text-sm text-muted-foreground">Carboidrato</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-xl font-bold text-foreground">{recipe.nutricional.gordura}g</div>
                <div className="text-sm text-muted-foreground">Gordura</div>
              </div>
            </div>
          </div>

          {/* Ingredientes */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Ingredientes</h3>
            <ul className="space-y-2">
              {recipe.ingredientes.map((ingrediente, index) => (
                <li key={index} className="flex items-start gap-3 p-2 hover:bg-muted rounded-md transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>{ingrediente}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modo de preparo */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Modo de Preparo</h3>
            <div className="p-4 bg-muted rounded-lg">
              <p className="leading-relaxed whitespace-pre-line">{recipe.preparo}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}