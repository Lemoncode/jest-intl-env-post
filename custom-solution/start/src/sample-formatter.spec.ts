import { formatCurrency } from './sample-formatter';

it('Display a number in es-es currencty format', () => {
  // Arrange
  const value = 200;

  // Act
  const formattedText = formatCurrency(value);

  // Assert
  expect(formattedText).toBe('200,00 €');
});
