import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.css']
})
export class StudiosComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['letsimagine'])
  }

  goNext() {
    this.router.navigate(['careerpath'])
  }
}
