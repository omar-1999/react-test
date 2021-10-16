import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';

export default class Example extends PureComponent {
  render() {
    return (
      <>
        <Title>Request</Title>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={this.props.data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="description" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" /> */}
            <Bar dataKey="price_default" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
