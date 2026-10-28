import { AppUsageService } from './AppUsageService';

describe('AppUsageService', () => {
  it('harus menambahkan aplikasi baru jika belum ada', () => {
    const service = new AppUsageService();
    service.addUsage('YouTube', 30);
    expect(service.getUsages().length).toBe(1);
    expect(service.getUsages()[0].durationMinutes).toBe(30);
  });

  it('harus mengakumulasi durasi jika aplikasi sudah ada', () => {
    const service = new AppUsageService();
    service.addUsage('Instagram', 20);
    service.addUsage('Instagram', 15);
    expect(service.getUsages()[0].durationMinutes).toBe(35);
  });
});
