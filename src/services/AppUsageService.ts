export interface AppUsage {
  appName: string;
  durationMinutes: number;
}

export class AppUsageService {
  private usages: AppUsage[] = [];

  addUsage(appName: string, minutes: number): void {
    const existing = this.usages.find(app => app.appName === appName);
    if (existing) {
      existing.durationMinutes += minutes;
    } else {
      this.usages.push({ appName, durationMinutes: minutes });
    }
  }

  getUsages(): AppUsage[] {
    return this.usages;
  }
}
