import React, { Fragment, PureComponent } from "react";
import moment from "moment";
import { DateTimePicker } from "material-ui-pickers";
import axios from "axios";
import "./style.css";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 30px"
  },
  buttonDiv: {
    display: "block"
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class RaffleForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prizes: [],
      nonProfit: "",
      checkeditem: "",
      selectedDate: new Date("2018-01-01T00:00:00.000Z"),
      startTime: new Date(),
      endTime: new Date()
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidMount() {
    axios.get("/api/prize/all/get").then(res => {
      console.log(res.data);
      this.setState({
        prizes: res.data
      });
    });
    this.loadAllPrizes();
  }

  //handle start date
  handleStartDateChange = date => {
    const kDate = moment(date).format("MM-DD-YYYY HH:mm:ss");
    console.log(kDate);
    this.setState({
      selectedDate: date,
      startTime: kDate
    });
  };
  //handle end date
  handleEndDateChange = date => {
    const kDate = moment(date).format("MM-DD-YYYY HH:mm:ss");
    this.setState({
      endTime: kDate
    });
  };

  // handle prize selected
  handleOnClick(event) {
    event.preventDefault();
    const btnKey = event.target.value;
    console.log(btnKey);
    this.setState({ checkeditem: btnKey });
  }

  // handle raffle submit
  handleFormSubmit(event) {
    event.preventDefault();
    let newRaffle = {
      prize: this.state.checkeditem,
      startTime: this.state.startTime,
      endTime: this.state.endTime
    };
    console.log(newRaffle);
    // if (this.state.checkeditem && this.state.startTime && this.state.endTime) {
    //   axios
    //     .post("/api/create/raffle", newRaffle)
    //     .then(this.loadAllPrizes())
    //     .catch(err => console.log(err));
    // } else {
    //   alert("this is wrong");
    // }
  }

  // load prizes
  loadAllPrizes() {
    if (this.state.prizes.length) {
      const prizes = this.state.prizes;
      const listItems = prizes.map(prize => (
        <Button
          id="listButton"
          key={prize._id}
          value={prize._id}
          onClick={this.handleOnClick}
        >
          <img className="buttonImg thumbnail" src={prize.image} />
          <div className="buttonDiv"> Item: {prize.name} </div>
          <div className="buttonDiv"> Quantity: {prize.quantity} </div>
        </Button>
      ));
      return <div className="prizesContainer">{listItems}</div>;
    }
  }

  render() {
    const { selectedDate } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Paper>
          <form noValidate autoComplete="off">
            <h5>Choose a prize:</h5>
            {this.loadAllPrizes()}

            <div className="dateDiv">
              <h5>Pick a start time:</h5>
              <Fragment>
                <div className="picker">
                  <DateTimePicker
                    name="startTime"
                    time={this.state.startTime}
                    value={selectedDate}
                    disablePast
                    onChange={this.handleStartDateChange}
                    label="Start Time"
                    showTodayButton
                  />
                </div>
              </Fragment>

              <h5>Pick an end time:</h5>
              <Fragment>
                <div className="picker">
                  <DateTimePicker
                    name="endTime"
                    time={this.state.endTime}
                    value={selectedDate}
                    disablePast
                    onChange={this.handleEndDateChange}
                    label="End Time"
                    showTodayButton
                  />
                </div>
              </Fragment>
            </div>

            <div className={classes.buttonDiv}>
              <Button
                onClick={this.handleFormSubmit}
                variant="outlined"
                className={classes.button}
              >
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(RaffleForm);
