import { atom, selector } from "recoil";
import { paymentsData } from "./data/payments";
import { groupBy } from "lodash";

export const payments = atom({
  key: "_payments",
  default: paymentsData,
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
