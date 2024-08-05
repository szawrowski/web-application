import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { BuildingCreateComponent } from './components/building-create/building-create.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomCreateComponent } from './components/room-create/room-create.component';

const routes: Routes = [
  { path: 'buildings', component: BuildingListComponent },
  { path: 'create-building', component: BuildingCreateComponent },
  { path: 'rooms', component: RoomListComponent },
  { path: 'create-room', component: RoomCreateComponent },
  { path: '', redirectTo: '/buildings', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
