export class LocationService {
  // Menggunakan asumsi 1 derajat latitude/longitude kira-kira 111 km
  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const dx = lat1 - lat2;
    const dy = lon1 - lon2;
    return Math.sqrt(dx * dx + dy * dy) * 111000; // dalam meter
  }

  isOutsideHome(currentLat: number, currentLon: number, homeLat: number, homeLon: number, safeRadiusMeters: number): boolean {
    const distance = this.calculateDistance(currentLat, currentLon, homeLat, homeLon);
    return distance > safeRadiusMeters;
  }
}
