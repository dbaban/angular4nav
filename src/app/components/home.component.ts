import { Component } from "@angular/core";

@Component({
  templateUrl: 'app/templates/home.tpl.html'
})
export class HomeComponent {
   public sunshine: string;
   
   constructor() {
      this.sunshine = "Cowboy Jackie";
   }
}
