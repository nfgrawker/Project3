import React, { PureComponent } from 'react';
import DateFnsUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';

export default class SelectDate extends PureComponent {
  state = {
    selectedDate: new Date()
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="pickers">
          <DateTimePicker
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}
