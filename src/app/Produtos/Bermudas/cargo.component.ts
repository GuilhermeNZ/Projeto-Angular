import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-cargo',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Cargo</li>
</ul>
    <h1>Cargo</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BCargoViewComponent {
}