import React from 'react';
import PaypalButton from './PaypalButton';
import axios from 'axios';

const CLIENT = {
  sandbox: 'AVadhup9z-8Iltl3F8WEvOYLMLiJwH44BPbVGO8ldyyS8II6tx7WiIjplNQ-7rEttjlIpYUa9zwJW42J',
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'sandbox'
  ? 'production'
  : 'sandbox';

class PaypalApp extends React.Component {
  render() {
    const onSuccess = (payment) => {
      axios.post('/api/paymentpage', {
        paymentID: payment.paymentID,
        payerID: payment.payerID
      });
      
      console.log('Successful payment!', payment);}
    

    const onError = (error) => console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) => console.log('Cancelled payment!', data);
    let currency = 'USD'; 
    let total = 546;

    return (
      <div>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={currency}
          total={total}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
      
    );
  }
}

export default PaypalApp;