import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObjectMapper } from 'json-object-mapper';

import { fadeInOutAnimation } from 'src/app/shared/animations/fade-in-out.animation';
import { Landmark } from '../../models/landmark.model';

import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [fadeInOutAnimation],
})
export class MapComponent {
  public readonly mapLoaded$ = this._mapService.mapLoaded$;
  public readonly landmarks$ = this._mapService.landmarks$;

  public constructor(private readonly _mapService: MapService) {}

  /**
   * The action for a new landmark
   * @param event: the landmark information
   */
  public addLandmark(event: google.maps.MapMouseEvent): void {
    this._mapService.newLandmark(event.latLng.toJSON());
  }
}
