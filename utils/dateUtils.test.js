import {formatDateToMonthDay} from './dateUtils'
describe('Ensures date uils are working', () => {
  it('should format DD-MM-YYYY into MMM DD', () => {
    expect(formatDateToMonthDay('20-04-2012')).toBe('Apr 20')
  });

  it('should format MM-DD-YYYY into MMM DD', () => {
    expect(formatDateToMonthDay('2012-12-20')).toBe('Dec 20')
  });
});