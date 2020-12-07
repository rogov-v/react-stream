import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants';
import FilterInput from './index';

test('should render FilterInput', () => {
  const { getByTestId } = render(<FilterInput />);
  expect(getByTestId(TEST_IDS.filterInput)).toBeInTheDocument();
});
