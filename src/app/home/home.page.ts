import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements AfterViewInit {
  public topInset;
  
  ngAfterViewInit(): void {
    setTimeout(() => {
    this.topInset = getComputedStyle(document.documentElement).getPropertyValue(
      "--ion-safe-area-top"
    )}, 1000);
  }
}
