import { useState, useEffect } from "react";
import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeDetail } from "@/components/RecipeDetail";
import { Navigation } from "@/components/Navigation";
import { Heart, ChefHat } from "lucide-react";

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('recipe-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (recipeId: string) => {
    const newFavorites = favorites.includes(recipeId)
      ? favorites.filter(id => id !== recipeId)
      : [...favorites, recipeId];
    
    setFavorites(newFavorites);
    localStorage.setItem('recipe-favorites', JSON.stringify(newFavorites));
  };

  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));
  const selectedRecipeData = recipes.find(recipe => recipe.id === selectedRecipe);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <h1 className="text-4xl font-bold text-foreground">Receitas Favoritas</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Suas sobremesas saudáveis preferidas em um só lugar
          </p>
        </div>

        {favoriteRecipes.length === 0 ? (
          <div className="text-center py-16">
            <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Nenhuma receita favorita ainda
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore as receitas e adicione suas favoritas para vê-las aqui!
            </p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explorar Receitas
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={toggleFavorite}
                onViewDetails={setSelectedRecipe}
              />
            ))}
          </div>
        )}
      </main>

      <RecipeDetail
        recipe={selectedRecipeData || null}
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        isFavorite={selectedRecipe ? favorites.includes(selectedRecipe) : false}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default Favorites;