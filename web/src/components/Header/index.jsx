import ToggleButton from '../../components/ToggleButton';
import FilterInput from '../../components/FilterInput';
import ErrorMessage from '../../components/ErrorMessage';
import styles from './Header.module.css';
import { Fragment } from 'react';
import { TEST_IDS } from '../../constants';

const Header = ({
	onToggle = () => {},
	isStreamActive,
	filterValue = '',
	onFilterChange = () => {},
	error,
}) => (
	<Fragment>
		{error && <ErrorMessage message={error} />}
		<div className={styles.container} data-testid={TEST_IDS.header}>
			<ToggleButton activeDefault={isStreamActive} onClick={onToggle} />
			<FilterInput value={filterValue} onChange={onFilterChange} />
		</div>
	</Fragment>
);

export default Header;
