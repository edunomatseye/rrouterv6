import React from 'react';
import {useParams } from 'react-router-dom';

function DashboardMessage() {
  const params = useParams();
  return <div>
    Messages - where communication and collaboaration is done!

    Message ID: {params.msgId}
  </div>;
}

export default DashboardMessage;
