import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsItem } from './Statistics.Styled';

const Statistics = ({stats}) => (
    <>
      {stats.map(([name, value]) => <StatisticsItem key={name}>{name}: {value}</StatisticsItem>)}
    </>
  );


Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.arrayOf(
    PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  ).isRequired).isRequired,
};

export default Statistics;