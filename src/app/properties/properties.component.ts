import { Component, OnInit } from '@angular/core';
import{PropertyService} from '../property.service';
import { PRoperty } from '../models/property.component';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(private serve:PropertyService) { }
  result = []
  ngOnInit() {
    this.serve.getPropertys().subscribe(data=>this.result = data);
  }
  

}
