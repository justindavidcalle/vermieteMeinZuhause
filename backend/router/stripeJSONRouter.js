const express = require('express');
const stripe = require('stripe')('sk_test_51OL3rsE0SwKraBCI3qs1FjREnMVo72OXsspbUbbCTFbNpD15sV1Rj7qI67UfTRkAY6HxjMeN45TzzyNSil4I3H3N00zPIiy9Il');

const router = express.Router();

router.post('/checkout', async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
      lineItems.push({
        price: item.price,
        quantity: item.quantity,
      });
    });
  
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:5173/thankyou',
      cancel_url: 'http://localhost:5173/sorry',
      metadata: {
        bookingUser: req.body.bookingUser,
        dates: req.body.bookedDates.join(', '),
        rent: req.body.rent
      },
    });
  
    res.send(JSON.stringify({
      url: session.url,
    }));
  });

module.exports = router;