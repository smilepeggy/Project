import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "project";
  loadedFeature = "recipes";
  onNagivate(feature: string) {
    // console.log(feature);
    this.loadedFeature = feature;
    // console.log(this.loadedFeature);
  }
}
