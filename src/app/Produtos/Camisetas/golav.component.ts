import { Component } from '@angular/core';


@Component({
  selector: 'camisetas-golav',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Camisetas</li>
  <li>Gola V</li>
</ul>
    <h1>Gola V</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class GolaVViewComponent {
}