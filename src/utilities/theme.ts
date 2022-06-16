/**
 * Returns the correct text colour (as hex) for the given health factor
 * @param healthFactor - health factor number
 */
export const getHealthTextColor = (healthFactor: number) => {
  return (healthFactor === 1) ? '#F61067' : (healthFactor === 2 ? '#F1D302' : '#00d395');
};