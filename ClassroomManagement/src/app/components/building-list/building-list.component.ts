import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { Building } from '../../models/building';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {
  buildings: Building[] = [];

  constructor(private buildingService: BuildingService) {}

  ngOnInit(): void {
    this.buildingService.getBuildings().subscribe(data => {
      this.buildings = data;
    });
  }
}
