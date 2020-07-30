import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  // @Output() selectedRecipesLi = new EventEmitter<Recipe>();
  public recipes: Recipe[];
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    // console.log(this.recipes)
  }

  // onRecipeSelected(recipe: Recipe) {
  //   // console.log(recipe);
  //   this.selectedRecipesLi.emit(recipe);
  // }
  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
