import axios from "axios";

export const initializePayment = (req: any, res: any) => {
  res.send("I want to make payment");

  async function makePaymentReq(data: any) {
    try {
      const response = await axios.post(
        "https://api.flutterwave.com/v3/payments",
        data,
        {
          headers: {
            Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const paymentData = {
    tx_ref: "ticketNumber",
    amount: 100,
    currency: "NGN",
    redirect_url: "https://roadmoney.money",
    payment_options: "card",

    customer: {
      email: "user@email.com",
      phone_number: "08102909304",
      name: "John Doe",
    },
  };


  axios
    .post("https://api.flutterwave.com/v3/validate-charge")
    .then((response: any) => {
      console.log("transaction initiated;", response.data);
    })
    .catch((error: any) => {
      console.error("Transaction failed:", error);
    });
};

export const verifyPayment = (req: any, res: any) => {
  res.send("I want to verify");
};
