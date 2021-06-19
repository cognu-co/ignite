interface IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number;
  formatToUTC(date: Date): string;
  currentDate(): Date;
}

export { IDateProvider };
