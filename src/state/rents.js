import { atom, selector, selectorFamily } from "recoil";
import { rentsData } from "./data/rents";
import { getSitesWithTenant } from "./sites";
import { getRentPaymentTotals } from "./helpers/rentsHelpers";
import { groupBy } from "lodash";
import { getId, updateState } from "./helpers/dataHelpers";

export const rents = atom({
  key: "_rents",
  default: rentsData,
});

export const getTenantRentsMap = selector({
  key: "_getTenantRentsMap",
  get: ({ get }) =>
    new Map(
      Object.entries(
        groupBy(
          get(rents),
          (item) => `${item.siteId}-${item.unitId}-${item.applicantId}`
        )
      )
    ),
});

export const getSiteRentsSummaryInfo = selector({
  key: "_getSiteRentsSummaryInfo",
  get: ({ get }) =>
    get(getSitesWithTenant).map((site) => {
      const { units } = site;

      const allRents = units.map((item) => item.tenant?.rents || []).flat();
      const allPayments = units
        .map((item) => item.tenant?.payments || [])
        .flat();

      const totals = getRentPaymentTotals(allRents, allPayments);

      return {
        ...site,
        ...totals,
      };
    }),
});

export const getSiteRentsSummaryMap = selector({
  key: "_getSiteRentsSummaryMap",
  get: ({ get }) =>
    new Map(
      Object.entries(
        groupBy(get(getSiteRentsSummaryInfo), (item) => item.siteId)
      )
    ),
});

export const getRentsInfo = selector({
  key: "_getRentsInfo",
  get: ({ get }) => {
    return get(rents).map((rent) => {
      return {
        ...rent,
      };
    });
  },
});

export const getRentsMap = selector({
  key: "getRentsMap",
  get: ({ get }) =>
    new Map(get(getRentsInfo).map((item) => [item.value, item])),
});

export const getRentFormData = selectorFamily({
  key: "_getRentFormData",
  get:
    (applicantId) =>
    ({ get }) =>
      get(getRentsMap).get(applicantId) || {
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
        get(rents),
        (item) => item.applicantId === newItem.applicantId,
        newItem,
        false
      );

      set(rents, newState);
    },
});
