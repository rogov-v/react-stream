import filter from 'lodash/filter';
import { EVENT_TYPES } from '../constants';

export const getEventContent = (event) => {
	switch (event.type) {
		case EVENT_TYPES.identify:
			return event.traits.email;
		case EVENT_TYPES.page:
			return event.properties.path;
		case EVENT_TYPES.track:
			return event.event;
		default:
			return undefined;
	}
};

export const getFilteredArray = (filterValue, events) =>
	filter(events, (event) => {
		const formattedValue = filterValue.toLowerCase();

		return (
			event.type.toLowerCase().includes(formattedValue) ||
			event.traits?.email?.toLowerCase().includes(formattedValue) ||
			event.properties?.path?.toLowerCase().includes(formattedValue) ||
			event.event?.toLowerCase().includes(formattedValue) ||
			event.receivedAt.toLowerCase().includes(formattedValue)
		);
	});
