import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-triforce',
  templateUrl: './triforce.component.html',
  styleUrls: ['./triforce.component.css']
})
export class TriforceComponent implements OnInit {
nameUser:string;

  constructor(private router: Router) { }


  

  
  ngOnInit(): void {
    this.nameUser=history.state.incomingName;
  }


  goNext(){
    this.router.navigate(['fci'])
  }

  goBack(){
    this.router.navigate(['careerpath'])
  }
}
