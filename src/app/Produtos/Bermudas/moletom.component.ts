import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-moletom',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Moletom</li>
</ul>
    <h1>Moletom</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BMoletomViewComponent {
}