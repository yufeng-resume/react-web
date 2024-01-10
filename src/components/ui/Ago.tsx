import { formatDistance } from 'date-fns';
import { Fragment } from 'react';

export const Ago = ({ date }: { date: Date }) => {
  return <Fragment>{formatDistance(new Date(date), new Date(), { addSuffix: true })}</Fragment>;
};
