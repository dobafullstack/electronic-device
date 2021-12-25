import axios from "axios";
export const SET_CURRENCY = "SET_CURRENCY";

export const setCurrency = (currencyName) => {
  return (dispatch) => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/1e22593441f5bf74855042dc/latest/VND`
      )
      .then((response) => {
        const rates = response.data.conversion_rates;
        let currencyRate = 0;
        for (const rate in rates) {
          if (rate === currencyName) {
            currencyRate = rates[rate];
          }
        }
        dispatch({
          type: SET_CURRENCY,
          payload: { currencyName, currencyRate },
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
};
