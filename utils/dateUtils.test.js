import {formatDateToMonthDay, filterByTransactionDate, filterByTransactionByTimeframe} from './dateUtils'

const mockTransactions = [
  {
    "id": 1,
    "name": "Mushroom - Chanterelle Frozen",
    "cost": "$4.30",
    "description": "Idiopathic aseptic",
    "date": new Date()
  },
  {
    "id": 2,
    "name": "Soup - Cream Of Broccoli",
    "cost": "$2.29",
    "description": "Unsp dislocation",
    "date": new Date()
  },
  {
    "id": 3,
    "name": "Broccoli",
    "cost": "$4.29",
    "description": "Unsp",
    "date": new Date()
  },
]

let filteredTransactions = []

const setTransactions = (data) => {
  filteredTransactions = data
}

describe('Ensures date uils are working', () => {
  it('should format DD-MM-YYYY into MMM DD', () => {
    expect(formatDateToMonthDay('20-04-2012')).toBe('Apr 20')
  });
  it('should format YYYY-MM-DD into MMM DD', () => {
    expect(formatDateToMonthDay('2012-12-20')).toBe('Dec 20')
  });
});

describe('Should filter transactions by week, month, day', () => {
  it('Should filter transactions by week', () => {
    filterByTransactionDate('week', mockTransactions, setTransactions)
    expect(filteredTransactions.length).toBe(3)
  });

  it('Should filter transactions by day', () => {
    filterByTransactionDate('day', mockTransactions, setTransactions)
    expect(filteredTransactions[0]).toBe(mockTransactions[0])
  });
  it('Should filter transactions by month', () => {
    filterByTransactionDate('month', mockTransactions, setTransactions)
    expect(filteredTransactions.length).toBe(3)
  });
});

describe('Should filter transactions between two dates', () => {
  it('Should filter transactions by between 01/08/2023 and 31/08/2023', () => {
    filterByTransactionByTimeframe(mockTransactions, setTransactions,'01/08/2023', '31/08/2023')
    expect(filteredTransactions.length).toBe(3)
  });
});