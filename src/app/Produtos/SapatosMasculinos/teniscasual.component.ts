import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-masculinos-tenis-casual',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Masculinos</li>
  <li>Tênis Casual</li>
</ul>
    <h1>Tênis Casual</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SMTenisCasualViewComponent {
}