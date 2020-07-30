import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;
  // @Output()addIngredient = new EventEmitter<Ingredient>();
  constructor(private shoppingListService:ShoppingListService) {}

  ngOnInit() {}
  onAddItem() {
    const ingredientName=this.nameInputRef.nativeElement.value;
    const ingredientAomunt=this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName,ingredientAomunt);
    // console.log(newIngredient);
    // this.addIngredient.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
