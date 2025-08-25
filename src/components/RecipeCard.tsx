import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Users, Zap } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
  onViewDetails: (recipeId: string) => void;
}

export function RecipeCard({ recipe, isFavorite, onToggleFavorite, onViewDetails }: RecipeCardProps) {
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
    <Card className="recipe-card group cursor-pointer hover:shadow-lg transition-all duration-300">
      <div className="p-6" onClick={() => onViewDetails(recipe.id)}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {recipe.nome}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(recipe.id);
            }}
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
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={getCategoryColor(recipe.categoria)}>
            {recipe.categoria}
          </Badge>
          <Badge variant="outline" className="border-primary text-primary">
            {recipe.adocado_com}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{recipe.rendimento}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>{recipe.nutricional.kcal} kcal</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center p-2 bg-muted rounded-lg">
            <div className="font-semibold text-foreground">{recipe.nutricional.proteina}g</div>
            <div className="text-muted-foreground">Proteína</div>
          </div>
          <div className="text-center p-2 bg-muted rounded-lg">
            <div className="font-semibold text-foreground">{recipe.nutricional.carboidrato}g</div>
            <div className="text-muted-foreground">Carbo</div>
          </div>
          <div className="text-center p-2 bg-muted rounded-lg">
            <div className="font-semibold text-foreground">{recipe.nutricional.gordura}g</div>
            <div className="text-muted-foreground">Gordura</div>
          </div>
        </div>
      </div>
    </Card>
  );
}