import { Component, OnInit } from '@angular/core';

export class Invention {
  name: String;
  inventor: String;
  year: String;
}

@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css']
})

export class InventionsComponent implements OnInit {

  invention: Invention = {
    name: 'Linguagem C',
    inventor: 'Dennis Ritchie',
    year: '1972'
  }

  constructor() { }

  ngOnInit() {
  }

}
