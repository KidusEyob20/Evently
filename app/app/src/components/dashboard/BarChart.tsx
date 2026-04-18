import { motion } from 'framer-motion';

interface BarData {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: BarData[];
  maxValue?: number;
  title?: string;
  className?: string;
}

const BarChart = ({ data, maxValue, title, className }: BarChartProps) => {
  const max = maxValue || Math.max(...data.map((d) => d.value));

  return (
    <div className={className}>
      {title && <h4 className="text-sm font-medium text-gray-700 mb-4">{title}</h4>}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{item.label}</span>
              <span className="font-medium text-gray-900">{item.value}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / max) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`h-full rounded-full ${
                  item.color || 'bg-gradient-to-r from-purple-500 to-blue-500'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
