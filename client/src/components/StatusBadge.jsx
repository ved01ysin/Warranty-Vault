import React from 'react';

const StatusBadge = ({ status }) => {
  const getBadgeClass = () => {
    switch (status) {
      case 'active': return 'badge-active';
      case 'expired': return 'badge-expired';
      case 'expiring soon': return 'badge-expiring';
      default: return '';
    }
  };

  return (
    <span className={`badge ${getBadgeClass()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
