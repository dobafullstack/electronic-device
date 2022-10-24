export default function lineData(orders) {
  const dataInWeek = [0, 0, 0, 0, 0, 0, 0];

  orders.forEach((order) => {
    const createdAt = new Date(Date.parse(order.createdAt));
    const date = createdAt.getDay();

    dataInWeek[date] += 1;
  });
  console.log(dataInWeek);
  return dataInWeek;
}
