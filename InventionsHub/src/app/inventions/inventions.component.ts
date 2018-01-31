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

  nameModel: String;
  inventorModel: String;
  yearModel: String;
  inventions: Invention[];

  

  constructor() { 
    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';

    let defaultInvention: Invention = {
      name: 'Linguagem C',
      inventor: 'Dennis Ritchie',
      year: '1972'
    };

    this.inventions = [ defaultInvention ];
  }

  ngOnInit() {
  }

  createInvention() {

    let newInvention: Invention = {
      name: this.nameModel,
      inventor: this.inventorModel, 
      year: this.yearModel
    };

    this.inventions.push(newInvention);

    this.nameModel = this.yearModel = this.inventorModel = '';
  }

}
