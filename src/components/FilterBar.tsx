import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { categories, sweeteners } from "@/data/recipes";

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedSweetener: string;
  onSweetenerChange: (value: string) => void;
}

export function FilterBar({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange,
  selectedSweetener,
  onSweetenerChange
}: FilterBarProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Filtrar Receitas</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar receitas..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedSweetener} onValueChange={onSweetenerChange}>
          <SelectTrigger>
            <SelectValue placeholder="Adoçante" />
          </SelectTrigger>
          <SelectContent>
            {sweeteners.map((sweetener) => (
              <SelectItem key={sweetener} value={sweetener}>
                {sweetener}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}