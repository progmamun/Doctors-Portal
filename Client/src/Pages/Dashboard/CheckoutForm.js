import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({price}),
    })
      .then(res => res.json())
      then(data => {
        if(data?.clientSecret){
          setClientSecret(data.clientSecret);
        }
      })
  }, [price])

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
