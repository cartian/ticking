/**
 * Formats a number with comma separators and specified decimal places
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted number string
 */
export function formatNumber(value: number, decimals: number = 2): string {
  // Handle invalid values
  if (isNaN(value) || value === null || value === undefined) {
    return '0';
  }

  // Clamp decimals to valid range
  const clampedDecimals = Math.max(0, Math.min(10, decimals));

  // Round to specified decimal places
  const rounded = Number(value.toFixed(clampedDecimals));

  // Format with comma separators
  const parts = rounded.toFixed(clampedDecimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}
