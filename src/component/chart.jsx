import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0d6efd", "#198754", "#ffc107", "#fd7e14"];

export default function RoleChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            paddingAngle={3}
            label={({ name, value }) => `${name}: ${value}`}
          >
            {data?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          />

         
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}