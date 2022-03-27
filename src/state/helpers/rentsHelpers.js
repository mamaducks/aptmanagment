import { sumBy } from "lodash";

export function getRentPaymentTotals(rents = [], payments = []) {
  console.log("ff ", rents, payments);
  const rentsTotal = sumBy(rents, "amount");
  const paymentsTotal = sumBy(payments, "amount");
  const pendingDepositsTotal = sumBy(
    payments.filter((item) => !item.depositId),
    "amount"
  );
  const creditsTotal = Math.max(0, paymentsTotal - rentsTotal);
  const delinquentTotal = Math.max(0, (paymentsTotal - rentsTotal) * -1);

  return {
    rentsTotal,
    paymentsTotal,
    creditsTotal,
    delinquentTotal,
    pendingDepositsTotal,
    totalSummary: creditsTotal - delinquentTotal,
  };
}
