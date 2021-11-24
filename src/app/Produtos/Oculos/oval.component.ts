import { Component } from '@angular/core';


@Component({
  selector: 'oculos-oval',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Oval</li>
</ul>
    <h1>Oval</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class OvalViewComponent {
}