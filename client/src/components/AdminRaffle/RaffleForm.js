import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SelectDate from "./DatePicker";

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

class RaffleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prizes: [],
      name: "",
      key: "",
      checkeditem: "",
      startTime: "",
      endTime: ""
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
  }
  handleOnClick(event) {
    event.preventDefault();
    const btnKey = event.target.value;
    console.log(btnKey);
    this.setState({ checkeditem: btnKey });
  }

  handleDatePick(event) {
    this.setState({ startTime: this.state.event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let newRaffle = {
      prize: this.state.checkeditem,
      startTime: this.state.startTime,
      endTime: this.state.endTime
    }
    console.log(newRaffle)
    // axios.post("/api/create/raffle", newRaffle)
    //   .then(this.loadAllPrizes())
    //   .catch(err => console.log(err));
  }
 
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
      return <div className="container">{listItems}</div>;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div >
        <Paper>
         <form  noValidate autoComplete="off"> 
          <h5>Choose a prize:</h5>
          {this.loadAllPrizes()}

          <div className="dateDiv">
            <h5>Pick a start time:</h5>
            <SelectDate starttime={this.state.startTime} onchange={this.handleDatePick}/>

            <h5>Pick an end time:</h5>
            <SelectDate />
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
