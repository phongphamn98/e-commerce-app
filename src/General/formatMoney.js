const formatMoney = (money) => {
  return new Intl.NumberFormat().format(money).replaceAll(",", ".");
};
export default formatMoney;
