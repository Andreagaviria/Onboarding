import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-fci',
  templateUrl: './fci.component.html',
  styleUrls: ['./fci.component.css']
})
export class FciComponent implements OnInit {
  panelOpenState = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goNext(){
    this.router.navigate(['keypeople'])
  }

  goBack(){
    this.router.navigate(['triforce'])
  }
}
