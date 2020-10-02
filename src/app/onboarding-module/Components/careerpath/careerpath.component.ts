import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-careerpath',
  templateUrl: './careerpath.component.html',
  styleUrls: ['./careerpath.component.css']
})
export class CareerpathComponent implements OnInit {
  panelOpenState = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goNext(){
    this.router.navigate(['#'])
  }

  goBack(){
    this.router.navigate(['letsimagine'])
  }
}
