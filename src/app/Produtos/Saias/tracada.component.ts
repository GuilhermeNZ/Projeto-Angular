import { Component } from '@angular/core';


@Component({
  selector: 'saias-tracada',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Saias</li>
  <li>Traçada</li>
</ul>
    <h1>Traçada</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class STracadaViewComponent {
}