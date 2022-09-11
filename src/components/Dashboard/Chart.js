import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        name: 'h/1',
        uv: 590,
        pv: 800,
        temp: 20.00,
    },
    {
        name: 'h/2',
        uv: 868,
        pv: 967,
        temp: 21,
    },
    {
        name: 'h/3',
        uv: 1397,
        pv: 1098,
        temp: 22,
    },
    {
        name: 'h/4',
        uv: 1480,
        pv: 1200,
        temp: 25
    },
    {
        name: 'h/5',
        uv: 1520,
        pv: 1108,
        temp: 34,
    },
    {
        name: 'h/6',
        uv: 1400,
        pv: 680,
        temp: 30,
    },
    {
        name: 'h/7',
        uv: 1400,
        pv: 680,
        temp: 27,
    },
];



const Chart = () => {
    const demoUrl = 'https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy';

    return (
        <div className='bg-white rounded-3xl' style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="temp" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
