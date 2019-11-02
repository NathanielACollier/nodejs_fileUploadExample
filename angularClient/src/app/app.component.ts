import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      {{message}}
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  message: string;

  constructor(private genSvc: GeneralService){}

  async ngOnInit(){
    this.message = await this.genSvc.getHello();
  }


}
