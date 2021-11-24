import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-femininos-peep-toe',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Femininos</li>
  <li>Peep Toe</li>
</ul>
    <h1>Peep Toe</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SFPeepToeViewComponent {
}