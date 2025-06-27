module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [
      'gateway', 'auth', 'user', 'partner', 'order',
      'location', 'allocation', 'payment', 'chat',
      'notification', 'rating', 'analytics', 'frontend', 'infra'
    ]]
  }
};
