import { Component } from '@angular/core';


@Component({
  selector: 'oculos-aviador',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Aviador</li>
</ul>
    <h1>Aviador</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class AviadorViewComponent {
}