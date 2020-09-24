import { Component, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-input-user-name',
  templateUrl: './input-user-name.component.html',
  styleUrls: ['./input-user-name.component.css']
})
export class InputUserNameComponent implements OnInit {
  name : string = '';

  constructor() { }


  ngOnChanges (changes: SimpleChanges) {
    console.log(changes);
  }


  ngOnInit(): void {
  }

  enviar(name:string) {
    console.log(name);
  }
}
