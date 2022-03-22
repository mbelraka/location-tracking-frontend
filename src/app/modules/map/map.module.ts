import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from 'src/app/modules/map/components/map/map.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MapRoutingModule } from './map-routing.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule, SharedModule],
})
export class MapModule {}
