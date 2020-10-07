import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardpeople',
  templateUrl: './cardpeople.component.html',
  styleUrls: ['./cardpeople.component.css']
})
export class CardpeopleComponent implements OnInit {
  @Input() id: number; 
  @Input() image:string;
  @Input() name: string;
  @Input() email: string;
  @Input() studio: string;
  @Input() emailto:string;
  @Input() clase:string;

  constructor() { }

  ngOnInit(): void {
  }

}
