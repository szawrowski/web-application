import { Component } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { Building } from '../../models/building';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building-create',
  templateUrl: './building-create.component.html',
  styleUrls: ['./building-create.component.css']
})
export class BuildingCreateComponent {
  building: Building = new Building();

  constructor(private buildingService: BuildingService, private router: Router) {}

  createBuilding(): void {
    this.buildingService.createBuilding(this.building).subscribe(() => {
      this.router.navigate(['/buildings']);
    });
  }
}
