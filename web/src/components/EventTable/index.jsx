import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from './EventTable.module.css';
import { getFormatedDateString } from '../../utils/date';
import { getEventContent } from '../../utils/events';
import { TEST_IDS } from '../../constants';


const EventTable = ({ events }) => (
	<div data-testid={TEST_IDS.eventTable}>
		<table className={styles.table}>
			<tbody>
				{events.map((event) => (
					<tr className={styles.row} key={`${event.messageId}`}>
						<td className={styles.td}>
							<CheckCircleIcon className={styles.icon} />
						</td>
						<td>{event.type}</td>
						<td>{getEventContent(event)}</td>
						<td>
							{getFormatedDateString(event.receivedAt)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default EventTable;
