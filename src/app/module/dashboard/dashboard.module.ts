import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { TileComponent } from './view/tile/tile.component';
import { MatCardModule, MatButtonModule, MatBadgeModule, MatChipsModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [DashboardComponent, TileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
  ]
})
export class DashboardModule { }
