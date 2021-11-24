import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-alfaiataria',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Alfaiataria</li>
</ul>
    <h1>Alfaiataria</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BAlfaiatariaViewComponent {
}