import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    const card = elements.getElement(CardElement);

    if (!stripe || !elements) {
      return;
    }
    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card:
    });

    setCardError(error?.message || '');
  };

  return (
   <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        className="btn btn-success btn-sm mt-4"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
    {
     cardError && <p className='text-red-500'>{cardError}</p>
    }
   </>
  );
};

export default CheckoutForm;
