module.exports = {
  customStatusCode: {
    undefinedError: {
      code: 'svc-99',
      msg: 'Unexpected Error!',
    },
    success: {
      code: 'svc-00',
      msg: 'Success',
    },
    missRequired: {
      code: 'svc-01',
      msg: 'Missing Required Parameter',
    },
    tokenExpiredOrNotMatch: {
      code: 'svc-02',
      msg: 'Token Expired or not Match',
    },
    unAuthorized: {
      code: 'svc-03',
      msg: 'UnAuthorized',
    },
    notFound: {
      code: 'svc-04',
      msg: 'Data Or Resource Not Found',
    },
    invalidData: {
      code: 'svc-05',
      msg: 'Invalid Required Data',
    },
    underMaintaince: {
      code: 'svc-06',
      msg: 'Under Maintance',
    },
    timeout: {
      code: 'svc-07',
      msg: 'TimeOut',
    },
    toManyRequest: {
      code: 'svc-08',
      msg: 'To Many Request',
    },

  },
  promoType: [
    {
      key: 'promo_to_item',
      value: 'Promo To Item',
    },
    {
      key: 'voucher',
      value: 'Voucher',
    },
    {
      key: 'strata_disc',
      value: 'Strata Discount',
    },
    {
      key: 'payment_method_to_cart',
      value: 'Payment Method To Cart',
    },
    {
      key: 'push_to_cart',
      value: 'Push To Cart',
    },
    {
      key: 'promo_to_cart',
      value: 'Promo To Cart',
    },
  ],
  bannerType: [
    {
      key: 'promo',
      value: 'Promo',
    },
    {
      key: 'information',
      value: 'Information',
    },
  ],
};
