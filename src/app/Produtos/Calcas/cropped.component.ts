import { Component } from '@angular/core';


@Component({
  selector: 'calcas-cropped',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Calças</li>
  <li>Cropped</li>
</ul>
    <h1>Cropped</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CCroppedViewComponent {
}