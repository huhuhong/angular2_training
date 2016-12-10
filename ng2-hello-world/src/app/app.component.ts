import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yourName:string = 'Shang Yi';
  title = 'app works !!';

  noOfClick:number = 0;

  keepTrack(isClick: boolean){
    if(isClick)
      this.noOfClick += 1;

    console.log('Total click: ' + this.noOfClick);
  }
}
