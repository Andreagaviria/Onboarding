import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letsimagine',
  templateUrl: './letsimagine.component.html',
  styleUrls: ['./letsimagine.component.css']
})
export class LetsimagineComponent implements OnInit {
 @Input() nameUser:string;

  constructor() { }

  ngOnInit(): void {
  }

 
}
