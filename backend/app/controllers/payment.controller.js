const secretKey="sk_test_51OmaEdF8GqX2syLzMyYTkiek3sjBrkwQ8TW4VuXYE8HFDjLlMItfxuQST2ctgL5W0KdmJZvUUi0zlg28kv8UaXlX00VrxDsQf4"
const stripe = require("stripe")(secretKey);

const PaymentController={
    payment:async (req, res) => {
        const { products } = req.body;
        // console.log(products)
        const lineItems = products.map((product) => (
            
            {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.product.name,
            },
            unit_amount: Math.round(product.product.satis * 100),
          },
          quantity: product.count,
    }
    ));
      
      
      
        try {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `http://localhost:3000/success`,
          });
      
          res.status(200).json({ id: session.id });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server error." });
        }
      }
}
module.exports = PaymentController;