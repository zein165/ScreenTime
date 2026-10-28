export class AlertRuleService {
  isLimitExceeded(currentDuration: number, maxLimit: number): boolean {
    return currentDuration > maxLimit;
  }
}
