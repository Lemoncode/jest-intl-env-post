export const formatCurrency = value =>
  new Intl.NumberFormat('es-Es', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);