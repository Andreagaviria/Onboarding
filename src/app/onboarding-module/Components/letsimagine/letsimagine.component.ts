
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-letsimagine',
  templateUrl: './letsimagine.component.html',
  styleUrls: ['./letsimagine.component.css']
})


export class LetsimagineComponent implements OnInit {
 nameUser:string;


  constructor(private router: Router) { }

 
  ngOnInit(): void {
    this.nameUser=history.state.incomingName;
  }


  goNext(){
    this.router.navigate(['careerpath'],
    {state :{incomingName:this.nameUser}})
  }
  
  goBack(){
    this.router.navigate([''])
  }
 
}