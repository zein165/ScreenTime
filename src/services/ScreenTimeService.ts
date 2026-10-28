export class ScreenTimeService {
  calculateTotal(sessions: number[]): number {
    return sessions.reduce((total, current) => total + current, 0);
  }
}
