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
  itemSelected: {

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
      itemid: "",
      selected: false,
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
    this.setState({
      startTime: date
    });
  };
  //handle end date
  handleEndDateChange = date => {
    this.setState({
      endTime: date
    });
  };

  // handle prize selected
  handleOnClick(event) {
    event.preventDefault();
    const btnKey = event.target.value;
    console.log(btnKey);
    this.setState({ 
      itemid: btnKey,
      selected: true, 
    });
    if (this.state.selected === true){
      //stuff
    }

  }

  // handle raffle submit
  handleFormSubmit(event) {
    event.preventDefault();
    const kDate = moment(this.state.startTime).format("MM-DD-YYYY HH:mm:ss");
    const iDate = moment(this.state.endTime).format("MM-DD-YYYY HH:mm:ss");
    let newRaffle = {
      nonProfit: this.props.userid,
      prize: this.state.itemid,
      startTime: kDate,
      endTime: iDate
    };
    console.log(newRaffle);
    if (this.state.checkeditem && this.state.startTime && this.state.endTime) {
      axios
        .post("/api/create/raffle", newRaffle)
        .then(this.loadAllPrizes())
        .catch(err => console.log(err));
    } else {
      alert("this is wrong");
    }
  }

  // load prizes
  loadAllPrizes() {
    if (this.state.prizes.length) {
      const prizes = this.state.prizes;
      const listItems = prizes.map(prize => (
        <button type="button"
          id="listButton"
          key={prize._id}
          value={prize._id}
          selected={this.state.selected}
          onClick={this.handleOnClick}
        >
          <img className="buttonImg thumbnail" src={prize.image} />
          <div className="buttonDiv"> Item: {prize.name} </div>
          <div className="buttonDiv"> Quantity: {prize.quantity} </div>
        </button>
      ));
      return <div className="prizesContainer">{listItems}</div>;
    }
  }

  render() {
    //const { selectedDate } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Paper>
          <form noValidate autoComplete="off">
          <div className="container">
            <h5>Choose a prize:</h5>
            {this.loadAllPrizes()}
          </div>
            
            <div className="dateDiv container">
              {/* Start Date */}
              <Fragment>
                <div className="picker">
                  <DateTimePicker
                    name="startTime"
                    time={this.state.startTime}
                    value={this.state.startTime}
                    disablePast autoOk
                    onChange={this.handleStartDateChange}
                    helperText="Start Time"
                    showTodayButton
                  />
                </div>
              </Fragment>

              {/* End Date */}
              <Fragment>
                <div className="picker">
                  <DateTimePicker
                    name="endTime"
                    time={this.state.endTime}
                    value={this.state.endTime}
                    disablePast autoOk
                    onChange={this.handleEndDateChange}
                    helperText="End Time"
                    showTodayButton
                  />
                </div>
              </Fragment>
            </div>
            
            {/* Submit Button */}
            <div className="btnDiv">
              <Button
                size="large"
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
