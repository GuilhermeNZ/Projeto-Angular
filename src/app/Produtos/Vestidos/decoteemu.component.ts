import { Component } from '@angular/core';


@Component({
  selector: 'decote-em-u',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Vestidos</li>
  <li>Decote em "U"</li>
</ul>
    <h1>Decote em "U"</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class VDecoteEmUViewComponent {
}