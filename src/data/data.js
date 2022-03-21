import { sites } from "./companySites";
import { employees } from "./employee";
import { parts } from "./parts";
import { bills, billCategories } from "./bills";
import { workOrderBills, workOrderCategories } from "./workOrderAtoms";
import { maintenanceHours } from "./workOrderHoursAtoms";
import { tenants } from "./tenantAtoms";
import { workOrders } from "./workOrderAtoms";

export const data = {
  sites,
  employees,
  bills,
  tenants,
  workOrders,
  workOrderBills,
  workOrderCategories,
  maintenanceHours,
  parts,
  billCategories,
};
