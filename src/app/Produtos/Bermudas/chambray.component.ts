import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-chambray',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Chambray</li>
</ul>
    <h1>Chambray</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BChambrayViewComponent {
}