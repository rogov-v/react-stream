import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants';
import Header from './index';

test('should render Header', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId(TEST_IDS.header)).toBeInTheDocument();
});

test('should render error', () => {
  const { getByText } = render(<Header error={'error 2'} />);
  expect(getByText('error 2')).toBeInTheDocument();
});

test('should render FilterInput', () => {
  const { getByTestId } = render(<Header error={'error 2'} />);
  expect(getByTestId(TEST_IDS.filterInput)).toBeInTheDocument();
});

test('should render ToggleButton', () => {
  const { getByTestId } = render(<Header error={'error 2'} />);
  expect(getByTestId(TEST_IDS.toggleButton)).toBeInTheDocument();
});
