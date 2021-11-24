import { Component } from '@angular/core';


@Component({
  selector: 'camisetas-dipdye',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Camisetas</li>
  <li>Dip Dye</li>
</ul>
    <h1>Dip Dye</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class DipDyeViewComponent {
}