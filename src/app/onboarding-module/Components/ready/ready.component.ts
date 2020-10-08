import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goBack() {
   this.router.navigate(['keypeople'])
  }

  goNext() {
   this.router.navigate(['#'])
  }

}
