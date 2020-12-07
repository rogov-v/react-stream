import { render } from '@testing-library/react';
import { TEST_IDS } from '../../constants';
import ToggleButton from './index';

test('should render ToggleButton', () => {
  const { getByTestId } = render(<ToggleButton />);
  expect(getByTestId(TEST_IDS.toggleButton)).toBeInTheDocument();
});
