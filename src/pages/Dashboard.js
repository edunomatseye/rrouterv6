import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();
  //const params = useParams();

  return <div>
    <div>Welcome to the Real Dashboard of Villians</div>

    <button className="shadow-xl bg-blue-300 rounded-full" type="button" onClick={() => navigate('/')}>Goto Home  </button>

    <Outlet />
  </div>;
};

export default Dashboard;
