interface IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number;
  compareInDays(start_date: Date, end_date: Date): number;
  formatToUTC(date: Date): string;
  currentDate(): Date;
  addDays(days: number): Date;
  addHours(hours: number): Date;

  /**
   * - verifica se a data final está expirada.
   * - comparada com a primeira
   */
  compareIfBefore(start_date: Date, end_date: Date): boolean;
}

export { IDateProvider };
