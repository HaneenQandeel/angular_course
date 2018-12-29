import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import{PropertyService} from '../property.service';
import { DEtails } from '../models/details.component';
import { FormsModule }   from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public result;
  arrayDetial = [];
  name ;
  email;
  subject;
  message;
  invalid = true;
  constructor(private serv:PropertyService,private toastr: ToastrService) { }

  ngOnInit() {
    setTimeout(() => this.toastr.success('sup'))
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  onAdd(myForm):void{
    let name = myForm.controls

    console.log(name);
    // this.nameError = errors.requried ? 'you should fill the blank':null
    // if (errors.minLength){
    //   this.nameError += `u enter ${errors.minLength.actualLength}  that should have ${errors.minLength.requriedLength}`
    // }
    let pr = {name:this.name,email:this.email,subject:this.subject,message:this.message}
    this.serv.AddItems(myForm.value as DEtails).subscribe(pro => {this.arrayDetial.push(pro)})
  }


}
