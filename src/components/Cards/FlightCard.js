import React, {PropTypes} from 'react';
import moment from 'moment';

const FlightCard = (props) => {
  const { direction: { from, to }, carrier, departure, arrival } = props.data;
  const carriercss = carrier.toLowerCase();
  const datesTable = [departure, arrival].map(e => {
    const date = moment(e).format('ddd, MMMM D');
    const time = moment(e).format('h:mm a');
    const day  = +moment(e).format('D');
    return {date, time, day};
  });
  const arrivalDateCorrection = datesTable[0].day < datesTable[1].day ?
    <small>({datesTable[1].date})</small> : null;

  return (
    <div className="card">
      <div className={`card-header card-header__carrier_${carriercss}`}>{carrier}</div>
      <div className="card-block">
        <small>DEPARTING {datesTable[0].date}</small>
        <p><span className="card-block__deptime">{datesTable[0].time}</span> - {datesTable[1].time} {arrivalDateCorrection}</p>
        <p className="card-text">
          {from} &rarr; {to}
        </p>
      </div>
    </div>
  );
};


FlightCard.propTypes = {
  direction: PropTypes.object,
  carrier  : PropTypes.string,
  departure: PropTypes.string,
  arrival  : PropTypes.string
};

export default FlightCard;
