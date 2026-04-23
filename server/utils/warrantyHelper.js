/**
 * Calculates the status of a warranty based on the expiry date.
 * @param {Date} expiryDate - The date the warranty expires.
 * @returns {string} - 'active', 'expired', or 'expiring soon'.
 */
const calculateStatus = (expiryDate) => {
  const today = new Date();
  const diffTime = new Date(expiryDate) - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return 'expired';
  } else if (diffDays <= 30) {
    return 'expiring soon';
  } else {
    return 'active';
  }
};

module.exports = { calculateStatus };
