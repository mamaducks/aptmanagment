import { sumBy } from "lodash";

export function getRentPaymentTotals(rents = [], payments = [], deposits = []) {
  const depositsTotal =  sumBy(deposits, "amount");
  const rentsTotal = sumBy(rents, "amount");
  const paymentsTotal = sumBy(payments, "amount");
  const pendingPayments = payments.filter((item) => !item.depositId);

  const pendingDepositsTotal = sumBy(pendingPayments, "amount");
  const creditsTotal = Math.max(0, paymentsTotal - rentsTotal);
  const delinquentTotal = Math.max(0, (paymentsTotal - rentsTotal) * -1);

  return {
    depositsTotal,
    rentsTotal,
    paymentsTotal,
    creditsTotal,
    delinquentTotal,
    pendingDepositsTotal,
    pendingPayments,
    pendingPaymentsAmount: pendingPayments.length,
    totalSummary: creditsTotal - delinquentTotal,
  };
}
