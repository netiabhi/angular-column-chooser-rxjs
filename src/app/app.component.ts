import { Component, VERSION, OnInit, AfterViewInit } from '@angular/core';
import {Subject, interval, fromEvent} from 'rxjs';
import { toArray, debounce, bufferTime, filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements AfterViewInit{
  click = fromEvent(document.getElementById('stop'), 'click');
  behaviorSubject = new Subject();
  name = 'Angular ' + VERSION.major;
  public values: number[] = [1,2,3,4,5,6,7,8,9,10];
  ngAfterViewInit() {
    this.behaviorSubject.pipe(bufferTime(4000)).pipe(filter(array => array.length !=0)).subscribe(console.log);
  }
  fire(value) {
   console.log('fire' + value);
    this.behaviorSubject.next(value)
  }
}
