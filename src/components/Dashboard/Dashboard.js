import React from 'react';
import useChart from '../../hooks/useChart';

const Dashboard = () => {
    const [charts , setCharts] = useChart([])
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;