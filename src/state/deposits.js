import { atom, selector } from "recoil";
import { depositsData } from "./data/deposits";
import { getSiteRentsSummaryInfo } from "./rents";
import { getSitesWithDepositsMap } from "./sites";

export const deposits = atom({
  key: "_deposits",
  default: depositsData,
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
