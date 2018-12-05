import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DatePicker from "./DatePicker";

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
      starttime: "",
      endtime: ""
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
    this.setState({ checkeditem: this.state._id });
  }

  handleDatePick(event) {
    console.log(event.target);
    
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.checkeditem);
    this.setState({});
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
            <DatePicker />

            <h5>Pick an end time:</h5>
            <DatePicker />
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
