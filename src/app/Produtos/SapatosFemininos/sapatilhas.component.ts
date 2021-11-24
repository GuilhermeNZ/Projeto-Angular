import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-femininos-sapatilhas',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Femininos</li>
  <li>Sapatilhas</li>
</ul>
    <h1>Sapatilhas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SFSapatilhasViewComponent {
}