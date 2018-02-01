import { Injectable } from '@angular/core';

import { Invention } from './inventions.class';

@Injectable()
export class InventionsService {

  rawInventions: Invention[] = [
    {
      id: 1,
      details: 'Java é foda',
      name: 'Java',
      inventor: 'James Ghosling',
      year: '1995'
    },
    {
      id: 2,
      details: 'Nimguem trabalha com isso',
      name: 'Python',
      inventor: 'Guido van Rosum',
      year: '1991'
    },
    {
      id: 3,
      details: 'A mais fast',
      name: 'C++',
      inventor: 'Bjarne Strounstrup',
      year: '1983'
    },
  ]

  constructor() { }

  getInventions(): Invention[] {
    return this.rawInventions;
  }

  inventionDetails(id) : Invention {
    for(let i = 0; i < this.rawInventions.length; i++){
      if(this.rawInventions[i].id == id) {
        return this.rawInventions[i];
      }
    }
    return null;
  }

}
