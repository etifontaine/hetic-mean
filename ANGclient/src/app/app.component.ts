import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html'
 template: `
      <h1>Bonjour {{ userName }}</h1>
      <app-dashboard></app-dashboard>
      <app-form></app-form>
    `
})
export class AppComponent {

  public userName: string = `Etienne Fontaine`;



}
