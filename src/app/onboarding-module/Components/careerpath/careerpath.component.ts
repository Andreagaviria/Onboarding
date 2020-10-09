import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-careerpath',
  templateUrl: './careerpath.component.html',
  styleUrls: ['./careerpath.component.css']
})
export class CareerpathComponent implements OnInit {
  panelOpenState = false;
  nameUser:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.nameUser=history.state.incomingName;
  }

  goNext(){
    this.router.navigate(['triforce'],
    {state :{incomingName:this.nameUser}})
  }

  goBack(){
    this.router.navigate(['studios'])
  }
}
