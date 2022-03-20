export const billCategories = [
  {
    categoryId: "flooring",
    desc: "Flooring related items",
    billType: 'maintenance'
  },
  {
    categoryId: "painting",
    desc: "Painting supplies",
    billType: 'maintenance'
  },
  {
    categoryId: "electric",
    desc: "Electric Bills",
    billType: 'company'
  },
  {
    categoryId: "phone",
    desc: "Phone and Internet",
    billType: 'company'
  },
  {
    categoryId: "appliances",
    desc: "Appliances",
    billType: 'maintenance'
  },
  {
    categoryId: "snow",
    desc: "Snow",
    billType: 'maintenance'
  },
  {
    categoryId: "lawn",
    desc: "Lawn",
    billType: 'maintenance'
  },

];

export const forRealBills = [
  {
    categoryId: "flooring",
    siteId: "edgewoodAcres",
    billDate: 1647759696905,
    datePaid: 1647779696905,
    recipient: "mulligan",
    amountDue: 123.54,
    amountPaid: 100.00
  },
  {
    categoryId: "flooring",
    siteId: "edgewoodAcres",
    billDate: 1647759596905,
    datePaid: 1647779596905,
    recipient: "mulli",
    amountDue: 423.54,
    amountPaid: 400.00
  },
  {
    categoryId: "painting",
    siteId: "edgewoodAcresIII",
    billDate: 1647759696905,
    datePaid: 1647779696905,
    recipient: "steve",
    amountDue: 123.54,
    amountPaid: 120.00
  },
  {
    categoryId: "painting",
    siteId: "edgewoodAcresIII",
    billDate: 1647759696905,
    datePaid: 1647779696905,
    recipient: "steve",
    amountDue: 1323.54,
    amountPaid: 1000.00
  },
  {
    categoryId: "electric",
    siteId: "edgewoodAcresIII",
    billDate: 1647759696905,
    datePaid: 1647779696905,
    recipient: "atlantic city",
    amountDue: 223.54,
    amountPaid: 200.00
  },
];

export const bills = [
  {
    id: "maintenance",
    bill: "maintenance",
    categories: [
      {
        id: "flooring",
        billType: "flooring",
        total: 234,
        subCategories: [
          {
            id: "carpet",
            subCategory: "carpet",
          },
          {
            id: "tile",
            subCategory: "tile",
          },
        ],
      },

      { id: "painting", total: 24, billType: "painting" },
      {
        id: "appliances",
        total: 23.45,
        billType: "appliances",
      },
      { id: "snow", billType: "snow", total: 234 },
      { id: "lawn", billType: "lawn" },
      { id: "vehicle", billType: "vehicle" },
      { id: "trash", billType: "trash" },
    ],
  },
  {
    id: "company",
    bill: "company",
    categories: [
      { id: "electric", billType: "electric" },
      { id: "phone-internet", billType: "phone/internet" },
      { id: "contractors", billType: "contractors" },
    ],
  },
];
