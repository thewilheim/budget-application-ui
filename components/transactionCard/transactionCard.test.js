import { screen } from '@testing-library/react-native';
import TransactionCard from './index';
import renderer from 'react-test-renderer';

const mockTransaction = {
    name: "Shoes",
    cost: "-$23.00",
    description: "Nike Shoes",
    date: "Aug 12"
}

test('should render transaction component with values that have been parsed', () => {
  const tree = renderer.create(<TransactionCard name={mockTransaction.name} cost={mockTransaction.cost} description={mockTransaction.description} date={mockTransaction.date} />).toJSON();
  expect(tree).toMatchSnapshot()
});