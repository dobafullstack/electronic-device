export default function VND(price){
    return price.toLocaleString("vi", { style: "currency", currency: "VND" });;
}