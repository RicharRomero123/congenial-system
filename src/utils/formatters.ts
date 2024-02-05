export const formatAmmountBy = (value: number | null = 0) => {
  if (value === null) return 0;
  let followers = value.toString();
  if (value >= 1e3) {
    followers = (value / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  if (value >= 1e6) {
    followers = (value / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (value >= 1e9) {
    followers = (value / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  }
  return followers;
};

/* 
  100 a menos -> 20% de descuento
  100 a 300 -> 15% de descuento
  300 a 500 -> 12% de descuento
  500 a más -> 10% de descuento
*/
export const formatAmmountOfMoney = (value: number = 0) => {
  let cash = value.toString();
  if (value <= 100) {
    cash = (value * 0.2).toFixed(2);
  }
  if (value > 100 && value < 300) {
    cash = (value * 0.15).toFixed(2);
  }
  if (value >= 300 && value < 500) {
    cash = (value * 0.12).toFixed(2);
  }
  if (value >= 500) {
    cash = (value * 0.1).toFixed(2);
  }
  // console.log(cash);
  return cash;
};
