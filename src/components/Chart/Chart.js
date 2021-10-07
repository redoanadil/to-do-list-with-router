import React from 'react';
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'Company A',
            mobile: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Company B',
            mobile: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Company C',
            mobile: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Company D',
            mobile: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Company E',
            mobile: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Company F',
            mobile: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Company G',
            mobile: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const data2 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 200 },
        { name: 'Group D', value: 150 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ backgroundColor: "white", borderRadius: "20px", paddingRight: "40px" }}>
                <h2>Sales Report</h2>
                <LineChart
                    width={1000}
                    height={650}
                    data={data}
                    margin={{
                        top: 100,
                        right: 30,
                        left: 30,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={4} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="mobile" stroke="#82ca9d" strokeWidth={4} />
                </LineChart>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
                <h2>Channels</h2>
                <PieChart width={700} height={450}>
                    <Pie
                        data={data2}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        innerRadius={70}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "100px" }}>
                    <div style={{ marginRight: "60px" }}>
                        <h2 style={{ fontSize: "32px", fontWeight: "500" }}>38%</h2>
                        <p style={{ fontSize: "14px" }}>Social Media</p>
                    </div>
                    <div style={{ marginRight: "60px" }}>
                        <h2 style={{ fontSize: "32px", fontWeight: "500" }}>29%</h2>
                        <p style={{ fontSize: "14px" }}>Google</p>
                    </div>
                    <div style={{ marginRight: "60px" }}>
                        <h2 style={{ fontSize: "32px", fontWeight: "500" }}>19%</h2>
                        <p style={{ fontSize: "14px" }}>Email</p>
                    </div>
                    <div style={{ marginRight: "60px" }}>
                        <h2 style={{ fontSize: "32px", fontWeight: "500" }}>14%</h2>
                        <p style={{ fontSize: "14px" }}>Direct</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;