
import TransactionCard from './index';
import { render, screen } from "@testing-library/react-native";
import renderer from "react-test-renderer";

jest.mock('@expo/vector-icons', () => ({
  Feather: '',
}));

const mockTransaction = {
    name: "Shoes",
    cost: "-$23.00",
    description: "Nike Shoes",
    date: "Aug 12"
}

describe('<TransactionCard />', () => {
  it('should render transaction card component', async () => {
    const tree = renderer.create(<TransactionCard name={mockTransaction.name} cost={mockTransaction.cost} description={mockTransaction.description} date={mockTransaction.date} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render transaction name', async () => {
    render(<TransactionCard name={mockTransaction.name} cost={mockTransaction.cost} description={mockTransaction.description} date={mockTransaction.date} />)
    expect(screen.getByText(mockTransaction.name)).toBeDefined()
  });
});