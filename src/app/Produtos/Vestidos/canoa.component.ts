import { Component } from '@angular/core';


@Component({
  selector: 'canoa',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Vestidos</li>
  <li>Canoa</li>
</ul>
    <h1>Canoa</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class VCanoaViewComponent {
}