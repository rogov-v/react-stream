import { render } from '@testing-library/react';
import { EVENT_TYPES, TEST_IDS } from '../../constants';
import EventTable from './index';

const testProps = {
  events: [{
    type: EVENT_TYPES.identify,
    traits: {
      email: 'test@test.com',
    },
    receivedAt: '2012-12-12',
  }]
}

test('should render EventTable', () => {
  const { getByTestId } = render(<EventTable {...testProps} />);
  expect(getByTestId(TEST_IDS.eventTable)).toBeInTheDocument();
});

test('should render correct event type', () => {
  const { getByText } = render(<EventTable {...testProps} />);
  expect(getByText(EVENT_TYPES.identify)).toBeInTheDocument();
});

test('should render correct date', () => {
  const { getByText } = render(<EventTable {...testProps} />);
  expect(getByText('2012/12/12 04:00:00')).toBeInTheDocument();
});

test('should render correct email', () => {
  const { getByText } = render(<EventTable {...testProps} />);
  expect(getByText('test@test.com')).toBeInTheDocument();
});
