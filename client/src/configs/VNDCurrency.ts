export default (price: number) => {
    return price.toLocaleString("vi", { style: "currency", currency: "VND" });
}