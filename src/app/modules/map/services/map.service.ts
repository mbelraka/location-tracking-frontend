import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ObjectMapper } from 'json-object-mapper';
import { Socket } from 'ngx-socket-io';
import { catchError, map, of, scan, tap } from 'rxjs';

import { MAP_CONFIG } from '../config/map.config';
import { Landmark } from '../models/landmark.model';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  // An observable accumulating all landmarks as observable
  public readonly landmarks$ = this._socket
    .fromEvent<Landmark>(MAP_CONFIG.events.landmark.token)
    .pipe(scan((accumulator, value) => [...accumulator, value], []));

  public readonly mapLoaded$ = this._httpClient
    .jsonp(MAP_CONFIG.mapRoute, 'callback')
    .pipe(
      map((): boolean => true),
      catchError((error: Error) => {
        this._handleError(error);
        return of(false);
      })
    );

  public constructor(
    private readonly _socket: Socket,
    private readonly _httpClient: HttpClient,
    private readonly _snackBar: MatSnackBar
  ) {}

  /**
   * An action for a new landmark
   * @param landmark: landmark information
   */
  public newLandmark(landmark: Landmark): void {
    this._socket.emit(MAP_CONFIG.events.landmark.token, landmark);
  }

  // Private Methods

  /**
   * An action for handling erros
   * @param error: error information
   * @private
   */
  private _handleError(error: Error): void {
    this._snackBar.open(
      error?.message || MAP_CONFIG.error.defaultMessage,
      MAP_CONFIG.error.action
    );
  }
}
