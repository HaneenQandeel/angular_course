import { Component, OnInit } from '@angular/core';
import { trigger,group, transition ,style,animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  animations:[
    trigger('life' ,[
      transition('void=>*',[
        style({
            opacity:0,
            transform:'translateY(100px)'
        }),
        group([
        animate(1000,style({
          opacity:1,
        })),
        animate(2000,style({
          transform:'translateY(0)'

        }))
      ])
      ])
    ])
 ,
 trigger('nour' ,[
   transition('void=>*',[
    style({
      color:'green'
    }),
    animate(1000 , 
      keyframes([
        style({
          color:'#7EF9FF',
          offset:.3
        }) ,
        style({
         color:'#89CFF0',
         offset:.6
       }) ,
       style({
         color:'#4682B4',
         offset:1
       })
      ])

      )
 
  ])])]
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
