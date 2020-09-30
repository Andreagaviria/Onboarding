
import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-input-user-name',
  templateUrl: './input-user-name.component.html',
  styleUrls: ['./input-user-name.component.css']
})
export class InputUserNameComponent implements OnInit {

   name:string;
 
  
  
  @Input() pathUrl:string;

  constructor(private router:Router) {
 
   }


  ngOnChanges (changes: SimpleChanges) {
    console.log(changes);
  }


  ngOnInit(): void {
  }


  nextPage() {

    this.router.navigate([this.pathUrl],
     {state :{incomingName:this.name}})
  }
}