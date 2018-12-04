import React from 'react';
import PaypalButton from './PaypalButton';

const CLIENT = {
  sandbox: 'AVadhup9z-8Iltl3F8WEvOYLMLiJwH44BPbVGO8ldyyS8II6tx7WiIjplNQ-7rEttjlIpYUa9zwJW42J',
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'sandbox'
  ? 'production'
  : 'sandbox';

class PaypalApp extends React.Component {
  render() {
    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);

    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);

    return (
      <div>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}

export default PaypalApp;