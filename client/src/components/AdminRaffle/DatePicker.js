import React, { Fragment, PureComponent } from 'react';
import { DateTimePicker } from 'material-ui-pickers';

export default class SelectDate extends PureComponent {
  state = {
    selectedDate: new Date('2018-01-01T00:00:00.000Z'),
    startTime: new Date(),
    endTime: new Date()
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DateTimePicker
            value={selectedDate}
            disablePast
            onChange={this.handleDateChange}
            label="With Today Button"
            showTodayButton
          />
        </div>
      </Fragment>
    );
  }
}
