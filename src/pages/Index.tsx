import { useState, useEffect } from "react";
import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeDetail } from "@/components/RecipeDetail";
import { FilterBar } from "@/components/FilterBar";
import { Navigation } from "@/components/Navigation";
import { ChefHat, Sparkles } from "lucide-react";

const Index = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSweetener, setSelectedSweetener] = useState("Todos");

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

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.ingredientes.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "Todos" || recipe.categoria === selectedCategory;
    const matchesSweetener = selectedSweetener === "Todos" || recipe.adocado_com.includes(selectedSweetener);
    
    return matchesSearch && matchesCategory && matchesSweetener;
  });

  const selectedRecipeData = recipes.find(recipe => recipe.id === selectedRecipe);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ChefHat className="h-8 w-8 text-primary" />
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobremesas <span className="text-primary">Saudáveis</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Coleção de receitas doces equilibradas para encaixar no seu planejamento alimentar
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedSweetener={selectedSweetener}
            onSweetenerChange={setSelectedSweetener}
          />
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredRecipes.length} receita{filteredRecipes.length !== 1 ? 's' : ''} encontrada{filteredRecipes.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-16">
            <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Nenhuma receita encontrada
            </h2>
            <p className="text-muted-foreground">
              Tente ajustar os filtros para encontrar mais receitas
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
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

export default Index;
