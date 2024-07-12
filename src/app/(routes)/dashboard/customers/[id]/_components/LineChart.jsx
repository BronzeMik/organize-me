import { LineChart } from '@tremor/react';


const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function LineChartComponent({categories, data}) {
  return (
    <LineChart
      className="h-80"
      data={data}
      index="date"
      categories={categories}
      colors={['indigo', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
      showAnimation={true}
    />
  );
}
