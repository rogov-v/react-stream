import { TEST_IDS } from '../../constants';
import styles from './ToggleButton.module.css';

const ToggleButton = ({ onClick = () => {}, value = true }) => {
	return (
		<div className={styles.wrapper} data-testid={TEST_IDS.toggleButton}>
			<input
				className={styles.checkbox}
				type='checkbox'
				id='checkbox'
				onClick={onClick}
				value={value}
			/>
			<label htmlFor='checkbox'></label>
		</div>
	);
};

export default ToggleButton;
