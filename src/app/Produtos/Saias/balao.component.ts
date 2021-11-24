import { Component } from '@angular/core';


@Component({
  selector: 'saias-balao',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Saias</li>
  <li>Balão</li>
</ul>
    <h1>Balão</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SBalaoViewComponent {
}