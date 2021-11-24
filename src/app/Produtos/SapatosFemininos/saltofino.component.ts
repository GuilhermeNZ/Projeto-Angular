import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-femininos-salto-fino',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Femininos</li>
  <li>Salto Fino</li>
</ul>
    <h1>Salto Fino</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SFSaltoFinoViewComponent {
}