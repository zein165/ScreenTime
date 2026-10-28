export class AppClassificationService {
  private knownGames = ['com.mojang.minecraftpe', 'com.mobile.legends'];
  isGame(packageName: string): boolean {
    return this.knownGames.includes(packageName);
  }
}
