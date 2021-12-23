import axios from "axios";
export const SET_CURRENCY = "SET_CURRENCY";

export const setCurrency = (currencyName) => {
  return (dispatch) => {
    axios
      .get(
        `http://api.exchangeratesapi.io/v1/latest?access_key=f7ec261c9c4548f303fefe00c594c81c&symbols=USD,VND,EUR`
      )
      .then((response) => {
        const rates = response.data.rates;
        let currencyRate = 0;
        for (const rate in rates) {
          if (rate === currencyName) {
            currencyRate = rates[rate];
          }
        }
        dispatch({
          type: SET_CURRENCY,
          payload: { currencyName, currencyRate }
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
};
