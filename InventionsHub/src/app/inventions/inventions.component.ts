import { Component, OnInit } from '@angular/core';
import { Invention } from './inventions.class';
import { InventionsService } from './inventions.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css'],
  providers: [InventionsService]
})

export class InventionsComponent implements OnInit {

  nameModel: String;
  inventorModel: String;
  yearModel: String;
  inventions: Invention[];
  detailsModel: String;
  totalInventions: number;



  constructor(private inventionsService: InventionsService, private router: Router) {
    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';
    this.detailsModel = '';
    this.inventions = inventionsService.getInventions();
    this.totalInventions = this.inventions.length;
    
  }

  ngOnInit() {
  }

  createInvention() {

    this.totalInventions += 1;
    let newInvention: Invention = {
      id: this.getId(),
      name: this.nameModel,
      inventor: this.inventorModel,
      year: this.yearModel,
      details: this.detailsModel
    };

    this.inventions.push(newInvention);

    this.nameModel = this.yearModel = this.inventorModel = '';
  }

  details(id) {
    this.router.navigate(['/details', id]);
  }

  getId() {
    return this.totalInventions;
  }

}
