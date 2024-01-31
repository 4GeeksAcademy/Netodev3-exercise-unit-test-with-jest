let oneEuroIs = {
  JPY: 156.5, // japan yen
  USD: 1.07, // us dollar
  GBP: 0.87, // british pound
};

function fromEuroToDollar(euroMount) {
  let result = euroMount * oneEuroIs["USD"];
  return parseFloat(result.toFixed(2));
}

function fromDollarToYen(dollarMount) {
  let result = dollarMount * oneEuroIs["USD"] * oneEuroIs["JPY"];
  return parseFloat(result.toFixed(2));
}

function fromYenToPound(yenMount) {
  let result = yenMount * oneEuroIs["JPY"] * oneEuroIs["GBP"];
  return parseFloat(result.toFixed(2));
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
