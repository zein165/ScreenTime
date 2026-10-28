export class AppInventoryService {
  findNewApps(oldApps: string[], currentApps: string[]): string[] {
    return currentApps.filter(app => !oldApps.includes(app));
  }
}
