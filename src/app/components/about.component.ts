import { Component } from "@angular/core";

@Component({
  templateUrl: 'app/templates/about.tpl.html'
})
export class AboutComponent {
   public viewCount: number;
   
   constructor() {
      this.viewCount = 1;
   }
   
   public incrementViewCount() {
      this.viewCount = this.viewCount + 1;
   }
}
