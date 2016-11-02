import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';

import {getFlights} from '../../AC/flights';

import FlightCard from './FlightCard';

class FlightCardsList extends React.Component {

  static propTypes = {
    entities: PropTypes.object.isRequired,
    loading : PropTypes.bool
  }

  componentDidMount() {
    this.props.getFlights();
  }

  render() {

    const { entities, loading } = this.props;

    if ( loading ) return <Spinner spinnerName="pulse" />;

    const flightCardsBody = entities.map(e => {
      return (
        <div className="col-xs-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-4" key={e.id}>
          <FlightCard data={e} />
        </div>
      );
    });

    return (
      <div>
          {flightCardsBody}
      </div>
    );
  }
}

export default connect(state => {
  const filter   = state.get('filterOn');
  const entities = state.get('entities').valueSeq();
  const loading  = state.get('loading');
  if ( !filter ) return { entities, loading };
  const filtered = entities.filter(e => e.carrier === filter);
  return { entities: filtered, loading };
}, {getFlights})(FlightCardsList);
