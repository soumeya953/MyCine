import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})
export class MyFilmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() films:any = []; // décorer la propriété avec @Input()



}