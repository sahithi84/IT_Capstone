export function calculateFinalPriceByPercentage(
  initialPrice: any,
  percentage: any
) {
  const initialPrice1 = +initialPrice;
  const percentage1 = +percentage;

  if (typeof initialPrice1 !== "number" || typeof percentage1 !== "number") {
    return "Please provide valid numeric values.";
  }

  if (percentage < -100) {
    return "Percentage cannot be less than -100%.";
  }

  const finalPrice = initialPrice1 * (percentage1 / 100);
  return finalPrice;
}
