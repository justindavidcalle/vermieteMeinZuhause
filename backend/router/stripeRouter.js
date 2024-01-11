const express = require('express');
const stripe = require('stripe')('sk_test_51OL3rsE0SwKraBCI3qs1FjREnMVo72OXsspbUbbCTFbNpD15sV1Rj7qI67UfTRkAY6HxjMeN45TzzyNSil4I3H3N00zPIiy9Il');

const router = express.Router();

const endpointSecret = "whsec_ce5418a211df5bab436c37905f581621ba734abd660ba290608db74910acfbc8";

router.post('/webhook', express.raw({ type: 'application/json' }), async (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.log(err.message);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object;

      // Access the metadata
      const bookedDatesMetadata = checkoutSession.metadata.bookedDates;
      
      // Now you can use bookedDatesMetadata in your logic
      console.log('Booked Dates Metadata:', bookedDatesMetadata);

      // Call a function to handle the event checkout.session.completed, if needed
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});


module.exports = router;
