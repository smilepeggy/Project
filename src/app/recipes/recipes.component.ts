import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe-list/recipe.model";
import { RecipeService } from "./recipe-list/recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipes: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipes = recipe;
      console.log(this.selectedRecipes)
    });
  }
  getSelectedRecipes(recipe: Recipe) {
    // console.log(recipe);
    // this.selectedRecipes = recipe;
  }
}
