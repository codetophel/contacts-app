import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'>
          {' '}
          <h2>{alert.msg}</h2>
        </i>
      </div>
    ))
  );
};

export default Alerts;
