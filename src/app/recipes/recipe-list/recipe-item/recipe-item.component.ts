import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";
// import { RecipeService } from '../recipe.service';

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  // @Output() selectedRecipe = new EventEmitter<void>();
  // void , the event won't pass any information

  // constructor(private recipeService:RecipeService ) {}

  ngOnInit() {}
  // onSelectedRecipe() {
  //   // this.selectedRecipe.emit();
  //   // console.log(this.selectedRecipe)
  //   this.recipeService.recipeSelected.emit(this.recipe);
  //   console.log(this.recipeService)
  //   console.log(this.recipe)
  // }
}
