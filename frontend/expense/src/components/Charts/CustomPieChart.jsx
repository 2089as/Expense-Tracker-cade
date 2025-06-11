import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomToolTip";
import CustomLegend from "./CustomLegend";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  return (
    <div style={{ position: "relative", width: "100%", height: 380 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={80}
            labelLine={false}
            isAnimationActive={true}
            animationDuration={1000} // điều chỉnh mượt hơn
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={CustomTooltip} />
          <Legend content={CustomLegend} />
        </PieChart>
      </ResponsiveContainer>

      {showTextAnchor && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-sm text-gray-600">{label}</span>
          <span className="text-2xl font-bold text-gray-800">{totalAmount}</span>
        </div>
      )}
    </div>
  );
};

export default CustomPieChart;
