export class GeofenceService {
  isOutsideSafeZone(distanceMeters: number, safeRadiusMeters: number): boolean {
    return distanceMeters > safeRadiusMeters;
  }
}
