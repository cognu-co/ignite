import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  formatToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  /**
   *
   * @param start_date current date
   * @param end_date return date
   * @returns difference in hours
   */

  compareInHours(start_date: Date, end_date: Date): number {
    return dayjs(this.formatToUTC(end_date)).diff(
      this.formatToUTC(start_date),
      "hours"
    );
  }

  currentDate(): Date {
    return dayjs().toDate();
  }
}
export { DayjsDateProvider };
