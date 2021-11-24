import { Component } from '@angular/core';


@Component({
  selector: 'tomara-que-caia',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Vestidos</li>
  <li>Tomara que-caia</li>
</ul>
    <h1>Tomara que-caia</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class VTomaraQueCaiaViewComponent {
}