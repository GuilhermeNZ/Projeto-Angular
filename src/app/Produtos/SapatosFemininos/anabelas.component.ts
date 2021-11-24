import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-femininos-anabelas',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Femininos</li>
  <li>Anabelas</li>
</ul>
    <h1>Anabelas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SFAnabelasViewComponent {
}