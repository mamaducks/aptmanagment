import { atom, selector, selectorFamily } from "recoil";
import { paymentsData } from "./data/payments";
import { groupBy } from "lodash";
import { getId, updateState } from "./helpers/dataHelpers";
import { localStorageEffect } from "./localStorageEffect";

export const payments = atom({
  key: "_payments",
  default: [],
  effects_UNSTABLE: [localStorageEffect("_payments", paymentsData)],
});

export const getTenantPaymentsMap = selector({
  key: "_getTenantPaymentsMap",
  get: ({ get }) =>
    new Map(
      Object.entries(
        groupBy(
          get(payments),
          (item) => `${item.siteId}-${item.unitId}-${item.applicantId}`
        )
      )
    ),
});

export const getTenantDepositedPaymentsMap = selector({
  key: "_getTenantDepositedPaymentsMap",
  get: ({ get }) =>
    new Map(
      Object.entries(
        groupBy(
          get(payments).filter((item) => !!item.depositId),
          "depositId"
        )
      )
    ),
});

export const getPaymentsInfo = selector({
  key: "_getPaymentsInfo",
  get: ({ get }) => {
    return get(payments).map((payment) => {
      return {
        ...payment,
      };
    });
  },
});

export const getPaymentsMap = selector({
  key: "getPaymentsMap",
  get: ({ get }) =>
    new Map(get(getPaymentsInfo).map((item) => [item.value, item])),
});

export const getPaymentFormData = selectorFamily({
  key: "_getRentFormData",
  get:
    (applicantId) =>
    ({ get }) =>
      get(getPaymentsMap).get(applicantId) || {
        applicantId: getId(),
        siteId: getId(),
        unitId: getId(),
        timestamp: Date.now(),
        amount: [],
      },
  set:
    () =>
    ({ get, set }, newItem) => {
      const newState = updateState(
        get(payments),
        (item) => item.applicantId === newItem.applicantId,
        newItem,
        false
      );

      set(payments, newState);
    },
});
