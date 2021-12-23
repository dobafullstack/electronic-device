export default (price) => {
  return price.toLocaleString("vi", { style: "currency", currency: "VND" });
};
