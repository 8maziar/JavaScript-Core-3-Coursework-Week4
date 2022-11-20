function sales(carsSold) {
  let total = {};

  carsSold.forEach((car) => {
    total[car.make]
      ? (total[car.make] += car.price)
      : (total[car.make] = car.price);
  });
  return total;
}

module.exports = sales;
