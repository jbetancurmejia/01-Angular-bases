import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  template: `
//  <h1>hola</h1>
//  `,
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'Contador App';
}
