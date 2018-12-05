import React from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 30px"
  },
  buttonDiv: {
    display: "inline-block"
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class RaffleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prizes: [],
      name: "",
      id: "",
      item: "",
      description: ""
    };
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
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.title, this.state.description, this.state.imagelink);
    this.setState({});
  }
  loadAllPrizes() {
    if (this.state.prizes.length) {
      const prizes = this.state.prizes;
      const listItems = prizes.map(prize => (
        <Button key={prize._id}>
          <img src={prize.image} />
          <div> {prize.name} </div>
          <div> {prize.quantity} </div>
        </Button>
      ));
      return <div>{listItems}</div>;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      <Paper>
        {this.loadAllPrizes()}
        <h5>Start Time</h5>
        <h5>End Time</h5>
      </Paper>
      <hr/>
        <form className={classes.container} noValidate autoComplete="off">
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
      </div>
    );
  }
}

export default withStyles(styles)(RaffleForm);
