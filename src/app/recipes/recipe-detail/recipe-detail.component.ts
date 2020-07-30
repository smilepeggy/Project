import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe-list/recipe.model";
import { RecipeService } from "../recipe-list/recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    // console.log(this.recipe);
    // console.log(this.recipe.ingredients);
    // method 1 (161)
    // const id =this.route.snapshot.params['id'];
    // method 2 (161)
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      console.log(this.id);
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    // this.router.navigate(['edit'],{relativeTo:this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});

  }
}
