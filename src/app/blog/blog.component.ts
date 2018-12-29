import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Output() loginEvent = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  logIn(){
    console.log('userLoggedIn');
    this.loginEvent.emit({success:true})

  }

}
