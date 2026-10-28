import { LocationService } from './LocationService';

describe('LocationService', () => {
  const service = new LocationService();
  const homeLat = -6.200000;
  const homeLon = 106.816666;

  it('harus me-return false jika anak di dalam radius', () => {
    // Koordinat sangat dekat
    const isOutside = service.isOutsideHome(-6.200010, 106.816670, homeLat, homeLon, 50);
    expect(isOutside).toBe(false);
  });

  it('harus me-return true jika anak di luar radius', () => {
    // Koordinat jauh
    const isOutside = service.isOutsideHome(-6.210000, 106.820000, homeLat, homeLon, 50);
    expect(isOutside).toBe(true);
  });
});
