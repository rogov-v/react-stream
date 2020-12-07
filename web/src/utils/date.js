import { format } from 'date-fns';

export const getFormatedDateString = (date) => format(new Date(date), 'yyyy/MM/dd kk:mm:ss');
