import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import useChart from '../../hooks/useChart';

const Dashboard = () => {
  const [charts] = useChart([])

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} className= 'mt-5'>
          <ResponsiveContainer width="100%"  aspect={1}>
            <LineChart
              width={500}
              height={300}
              data={charts}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
              <Line type="monotone" dataKey="revenue" stroke="#FF7F7F" />
            </LineChart>
            </ResponsiveContainer>
          </Col>
          <Col xs={12} md={6} className= 'mt-5'>
          <ResponsiveContainer width="100%"  aspect={1}>
          <BarChart
          width={500}
          height={300}
          data={charts}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="sell" fill="#82ca9d" />
          <Bar dataKey="revenue" fill="#FF7F7F" />
        </BarChart>
        </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;