import React from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
import PropTypes from 'prop-types'

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);
    window.React = React;
    window.ReactDOM = ReactDOM;
    this.state = {
      showButton: false,
      env: 'sandbox', // or 'sandbox'
      client: {
        sandbox:'AVadhup9z-8Iltl3F8WEvOYLMLiJwH44BPbVGO8ldyyS8II6tx7WiIjplNQ-7rEttjlIpYUa9zwJW42J,' //sandboxID 
      },
      commit: true, // Pay Now Button *New EDITON*
    };
  } 

  componentDidMount() {
    const {
        isScriptLoaded,
        isScriptLoadSucceed
      } = this.props;

      if (isScriptLoaded && isScriptLoadSucceed) {
        this.setState({ showButton: true });
      }


  }

  componentWillReceiveProps(nextProps) {
    const {
        isScriptLoaded,
        isScriptLoadSucceed,
      } = nextProps;

      const isLoadedButWasntLoadedBefore =
        !this.state.showButton &&
        !this.props.isScriptLoaded &&
        isScriptLoaded;

      if (isLoadedButWasntLoadedBefore) {
        if (isScriptLoadSucceed) {
          this.setState({ showButton: true });
        }
      }
  }

  render() {
    const style = {
      layout: 'vertical', // horizontal | vertical
      size: 'large', // medium | large | responsive
      shape: 'pill', // pill | rect
      color: 'black' // gold | blue | silver | white | black
      };
    const paypal = window.PAYPAL
    const {
      total,
      currency,
      env,
      commit,
      client,
      onSuccess,
      onError,
      onCancel,
    } = this.props;

    const {
      showButton,
    } = this.state;

    const payment = () =>
    paypal.rest.payment.create(this.props.env, this.props.client, {
      transactions: [
        {
          amount: {
            total: this.props.total,
            currency: this.props.currency,

          }
        },
      ],
    });

    const onAuthorize = (data, actions) =>
    actions.payment.execute()
      .then(() => {
<<<<<<< HEAD
        const payment = Object.assign({}, this.props.payment); 
          payment.paid = true;
          payment.cancelled =false;
          payment.payerID = data.payerID;
          payment.paymentID = data.paymentID;
          payment.paymentToken = data.paymentToken;
          payment.returnUrl = data.returnUrl;
          this.props.onSuccess(payment);
=======
        const payment = {
          paid: true,
          cancelled: false,
          payerID: data.payerID,
          paymentID: data.paymentID,
          paymentToken: data.paymentToken,
          returnUrl: data.returnUrl,
          amount:this.props.total
        };

        onSuccess(payment);
>>>>>>> c8e717e84ab630d40b7c0b3436e005368c40f638
      });
      let ppbtn = '';
    if (this.state.showButton) {
      ppbtn = (<paypal.Button.react
        env={this.state.env}
        client={this.state.client}
        payment={payment}
        commit = {commit}
        onAuthorize={onAuthorize}
        style={style}
        onCancel={this.props.onCancel}
      />);
    }
    return <div>{ppbtn}</div>;
  }
}
<<<<<<< HEAD
PaypalButton.propTypes = {
  currency: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  client: PropTypes.object.isRequired,
};
 
PaypalButton.defaultProps = {
  env: 'sandbox',
  onSuccess: (payment) => {
    console.log('The payment was succeeded!', payment);
  },
  onCancel: (data) => {
    console.log('The payment was cancelled!', data);
  },
  onError: (err) => {
    console.log('Error loading Paypal script!', err);
  },
};
 
export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);


=======
export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);
>>>>>>> c8e717e84ab630d40b7c0b3436e005368c40f638
