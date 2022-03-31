import { atom, selector, selectorFamily } from "recoil";
import { depositsData } from "./data/deposits";
import { getId, updateState } from "./helpers/dataHelpers";
import { localStorageEffect } from "./localStorageEffect";
import { payments } from "./payments";
import { getSiteRentsSummaryInfo } from "./rents";
import {
  getSitesWithDepositsMap,
  getSiteWithDepositSummaryInfo,
} from "./sites";
import { getTenantId } from "./tenants";

export const deposits = atom({
  key: "_deposits",
  default: [],
  effects_UNSTABLE: [localStorageEffect("_deposits", depositsData)],
});

export const getSiteDepositsSummaryInfo = selector({
  key: "_getSiteDepositsSummaryInfo",
  get: ({ get }) => {
    const siteDepositsMap = get(getSitesWithDepositsMap);

    return get(getSiteRentsSummaryInfo).map((site) => {
      const siteDeposits = siteDepositsMap.get(site.siteId)?.deposits || [];
      const lastDeposit = siteDeposits[0];

      return {
        ...site,
        lastDeposit,
        lastDepositAmount: lastDeposit?.amount,
        lastDepositDate: lastDeposit?.timestamp,
        lastDepositNumberOfPayments: lastDeposit?.totalNumberOfPayments,
        deposits: siteDeposits,
      };
    });
  },
});

export const getSiteDepositsSummaryInfoMap = selector({
  key: "_getSiteDepositsSummaryInfoMap",
  get: ({ get }) => {
    return new Map(
      get(getSiteDepositsSummaryInfo).map((item) => [item.siteId, item])
    );
  },
});

export const getDepositFormData = selectorFamily({
  key: "getDepositFormData",
  get:
    (siteId) =>
    ({ get }) => {
      const summaryInfo = get(getSiteWithDepositSummaryInfo(siteId));

      return summaryInfo.pendingPayments.map((payment) => ({
        ...payment,
        id: `${getTenantId(payment)}-${payment.timestamp}`,
      }));
    },
  set:
    (siteId) =>
    ({ get, set }, { depositDate, pendingTotal, selectedPayments }) => {
      console.log("newItem", siteId, pendingTotal, selectedPayments);
      debugger;

      const depositId = getId();

      const newDepositState = updateState(
        get(deposits),
        (item) => false,
        {
          depositId,
          siteId,
          timestamp: depositDate?.getTime() || Date.now().getTime(),
          amount: pendingTotal,
        },
        false
      );

      set(deposits, newDepositState);

      const finalPaymentsState = selectedPayments.reduce(
        (acc, { id, ...payment }) => {
          const newPaymentState = updateState(
            acc,
            (item) => id === `${getTenantId(item)}-${item.timestamp}`,
            {
              ...payment,
              depositId,
            },
            false
          );

          return [...newPaymentState];
        },
        get(payments)
      );

      set(payments, finalPaymentsState);
    },
});
