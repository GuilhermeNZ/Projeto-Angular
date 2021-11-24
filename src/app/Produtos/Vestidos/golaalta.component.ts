import { Component } from '@angular/core';


@Component({
  selector: 'gola-alta',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Vestidos</li>
  <li>Gola Alta</li>
</ul>
    <h1>Gola Alta</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class VGolaAltaViewComponent {
}