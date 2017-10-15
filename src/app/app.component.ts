import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <div>Helo Szabi! Here is my first Angular component :D</div>
    </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
