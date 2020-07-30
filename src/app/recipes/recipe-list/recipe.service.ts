import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnizel",
      "A super-tasty Schnizel-just awesome !",
      "https://img.taste.com.au/lBkXelJZ/w643-h428-cfill-q90/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Big Fat Burger",
      "What else you need to say?",
      "https://img.taste.com.au/lBkXelJZ/w643-h428-cfill-q90/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg",
      [new Ingredient("Buns", 1)]
    ),
  ];

  constructor(private shoppingListService:ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    console.log(ingredients);
    this.shoppingListService.addIngredients(ingredients);
  }
}
