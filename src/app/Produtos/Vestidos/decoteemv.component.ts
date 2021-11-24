import { Component } from '@angular/core';


@Component({
  selector: 'decote-em-v',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Vestidos</li>
  <li>Decote em "V"</li>
</ul>
    <h1>Decote em "V"</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class VDecoteEmVViewComponent {
}