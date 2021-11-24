import { Component } from '@angular/core';


@Component({
  selector: 'saias-evase',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Saias</li>
  <li>Evasé</li>
</ul>
    <h1>Evasé</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SEvaseViewComponent {
}