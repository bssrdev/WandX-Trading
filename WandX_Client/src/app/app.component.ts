import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Create Token';
  today: number = Date.now();

 //  clickEvent(event){
 //    //Haven't really got far
 //    //var targetEle = event.srcElement.attributes.class;
 //    // if (event.target.classList.contains('active')) {

 //    //         }else

 //    // setTimeout(event.target.classList.add('active'), 5);
 //    // event.target.classList.remove('active');
 //    //event.target.classList.add('active');
 //    //event.target.classList.remove('active');
 // }  
  
}
