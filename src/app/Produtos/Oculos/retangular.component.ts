import { Component } from '@angular/core';


@Component({
  selector: 'oculos-retangular',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Retangular</li>
</ul>
    <h1>Retangular</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class RetangularViewComponent {
}