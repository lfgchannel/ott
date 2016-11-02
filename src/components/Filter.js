import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import {filterFlights} from '../AC/filter';

class Filter extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })),
    value  : PropTypes.string
  }

  handleFilter = (obj) => {
    const label = obj ? obj.label : '';
    this.props.filterFlights(label);
  }

  render() {

    const { options, value } = this.props;

    if ( !options ) return null;

    return (
      <div className="col-sm-10 col-md-8 offset-sm-1 offset-md-2">
        <Select
          name="filter-carrier"
          value={value}
          options={options}
          onChange={this.handleFilter} />
      </div>
    );
  }

}

export default connect(state => {

  const entities = state.get('filterEntities');

  if ( !entities.size ) return {};

  const options = entities.toArray().map(e => ({
    value: e,
    label: e
  }));
  const value = state.get('filterOn');

  return { options, value };
}, {filterFlights})(Filter);
