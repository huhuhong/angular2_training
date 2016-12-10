import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'hello-world-1',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class HelloWorldComponent {
  @Input()
  myName:string

  @Output()
  onClickMe = new EventEmitter<boolean>();

  clickMe(str){
    //alert('Hello ' + str);
    this.onClickMe.emit(true);
  }
}
