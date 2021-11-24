import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-masculinos-dockside',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Masculinos</li>
  <li>Dockside</li>
</ul>
    <h1>Dockside</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SMDocksideViewComponent {
}