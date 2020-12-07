import ErrorIcon from '@material-ui/icons/Error';
import { TEST_IDS } from '../../constants';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
	<div className={styles.container} data-testid={TEST_IDS.errorMessage}>
		<ErrorIcon className={styles.icon} />
		<div className={styles.message}>{message}</div>
	</div>
);

export default ErrorMessage;
