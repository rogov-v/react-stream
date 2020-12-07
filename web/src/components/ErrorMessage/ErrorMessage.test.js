import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants';
import ErrorMessage from './index';

test('should render ErrorMessage', () => {
  const { getByTestId } = render(<ErrorMessage />);
  expect(getByTestId(TEST_IDS.errorMessage)).toBeInTheDocument();
});

test('should render correct error message', () => {
  const { getByText } = render(<ErrorMessage message={'error 1'} />);
  expect(getByText('error 1')).toBeInTheDocument();
});
