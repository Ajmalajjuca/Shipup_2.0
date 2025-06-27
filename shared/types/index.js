const UserRole = {
  CUSTOMER: 'customer',
  PARTNER: 'partner',
  ADMIN: 'admin'
};

const OrderStatus = {
  PENDING: 'pending',
  ASSIGNED: 'assigned',
  PICKED_UP: 'picked_up',
  IN_TRANSIT: 'in_transit',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

const PaymentStatus = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded'
};

module.exports = {
  UserRole,
  OrderStatus,
  PaymentStatus
};
