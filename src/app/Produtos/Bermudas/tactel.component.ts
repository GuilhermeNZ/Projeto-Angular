import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-tactel',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Tactel</li>
</ul>
    <h1>Tactel</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BTactelViewComponent {
}