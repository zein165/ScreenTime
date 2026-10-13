// Menguji perhitungan total penggunaan layar harian (User Story 1 & 5)
// Asumsi: Kita memiliki fungsi sederhana calculateDailyUsage di file terpisah

// Mock function (karena kita fokus pada MVP logic test)
const calculateDailyUsage = (appUsageData: { appName: string, minutes: number }[]) => {
  return appUsageData.reduce((total, app) => total + app.minutes, 0);
};

describe('Screen Time Logic: Calculate Daily Usage', () => {
  it('seharusnya mengembalikan total menit yang benar dari daftar penggunaan aplikasi', () => {
    const dummyData = [
      { appName: 'com.whatsapp', minutes: 30 },
      { appName: 'com.google.youtube', minutes: 45 },
      { appName: 'com.instagram.android', minutes: 15 }
    ];

    const totalUsage = calculateDailyUsage(dummyData);
    
    // 30 + 45 + 15 = 90
    expect(totalUsage).toBe(90);
  });

  it('seharusnya mengembalikan 0 jika tidak ada aplikasi yang digunakan', () => {
    const emptyData: { appName: string, minutes: number }[] = [];
    const totalUsage = calculateDailyUsage(emptyData);
    
    expect(totalUsage).toBe(0);
  });
});
