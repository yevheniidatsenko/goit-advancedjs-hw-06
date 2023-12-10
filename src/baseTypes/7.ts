/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: DaysOfWeek): boolean {
  const weekendDays: DaysOfWeek[] = [DaysOfWeek.SATURDAY, DaysOfWeek.SUNDAY];

  return weekendDays.includes(day);
}
