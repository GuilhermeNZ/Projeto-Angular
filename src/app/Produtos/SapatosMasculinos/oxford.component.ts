import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-masculinos-oxford',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Masculinos</li>
  <li>Oxford</li>
</ul>
    <h1>Oxford</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SMOxfordViewComponent {
}