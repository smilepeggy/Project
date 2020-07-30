import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient("apples", 5),
  //   new Ingredient("oranges", 10),
  // ];
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    console.log(this.ingredients);
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        console.log(this.ingredients);
      }
    );
  }
  // onIngredientAdd(ingredient: Ingredient) {
  //   // this.ingredients.push(ingredient);
  //   // console.log(ingredient);
  //   this.shoppingListService.addIngredient(ingredient);
  // }
}
