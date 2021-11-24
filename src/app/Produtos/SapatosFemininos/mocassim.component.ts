import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-femininos-mocassim',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Femininos</li>
  <li>Mocassim</li>
</ul>
    <h1>Mocassim</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SFMocassimViewComponent {
}