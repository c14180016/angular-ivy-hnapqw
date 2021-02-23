import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public papan: any[][];
  a = 0;
  constructor() {
    this.papan = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
  }
  name = "Angular " + VERSION.major;
  items = 0;
  Baris = 0;
  Kolom = 0;
  Baris1 = 0;
  Kolom1 = 0;
  Baris2 = 0;
  Kolom2 = 0;
  j = 0;
  i = 0;
  OPEN() {}
  input() {}
  refresh() {
    this.papan = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
    this.a = 0;
  }
}
