import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Building } from '../models/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  private apiUrl = '/api/buildings';

  constructor(private http: HttpClient) {}

  getBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>(this.apiUrl);
  }

  createBuilding(building: Building): Observable<Building> {
    return this.http.post<Building>(this.apiUrl, building);
  }
}
