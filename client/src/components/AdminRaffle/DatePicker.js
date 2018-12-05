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
// import React, { PureComponent } from 'react';
// import DateFnsUtils from '@date-io/moment';
// import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// import { DateTimePicker } from 'material-ui-pickers';

// export default class SelectDate extends PureComponent {
//   state = {
//     selectedDate: new Date()
//   };

//   handleDateChange = (event, date) => {
//     this.setState({ selectedDate: date });
//      console.log(this.state.selectedDate);
//   };

//   render() {
      
//     return (
//       <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <div className="pickers">
//           <DateTimePicker
//            keyboard
//            autoOk
//            clearable
//            disablePast
//            name={this.props.name}
//            format="MMMM-DD-YYYY HH:mm"
//             value={this.state.selectedDate}
//             onChange={this.handleDateChange}
//           />
//         </div>
//       </MuiPickersUtilsProvider>
//     );
//   }
// }
