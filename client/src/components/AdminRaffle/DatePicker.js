import React, { Fragment, PureComponent } from 'react';
import moment from 'moment';
import { DateTimePicker } from 'material-ui-pickers';

export default class SelectDate extends PureComponent {
  state = {
    selectedDate: new Date('2018-01-01T00:00:00.000Z'),
    startTime: new Date(),
    endTime: new Date()
  };

  handleDateChange = date => {
    let d = moment(date).format('MM-DD-YYYY HH:mm:ss');
    console.log(d);
    this.setState({ 
        selectedDate: date,
        startTime: d, 
    });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DateTimePicker
            time={this.state.startTime}
            value={selectedDate}
            disablePast
            onChange={this.handleDateChange}
            label={this.props.label}
            showTodayButton
          />
        </div>
      </Fragment>
    );
  }
}
