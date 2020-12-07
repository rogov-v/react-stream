import { render } from '@testing-library/react';
import App from './App';
import { TEST_IDS } from './constants';

test('should render EventStream', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(TEST_IDS.eventStream)).toBeInTheDocument();
});
