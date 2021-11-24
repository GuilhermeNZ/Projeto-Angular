import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-femininos-rasteirinhas',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Femininos</li>
  <li>Rasteirinhas</li>
</ul>
    <h1>Rasteirinhas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SFRasteirinhasViewComponent {
}