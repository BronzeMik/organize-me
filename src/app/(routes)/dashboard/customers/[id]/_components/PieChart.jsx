import { DonutChart } from '@tremor/react';



const dataFormatter = (number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export default function PieChartComponent({data}) { 

    return(
        <>
            <div className="mx-auto space-y-12">
            <div className="space-y-3">
                <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Repair Categories
                </span>
                <div className="flex justify-center">
                <DonutChart
                    data={data}
                    variant="pie"
                    valueFormatter={dataFormatter}
                    onValueChange={(v) => console.log(v)}
                />
                </div>
            </div>
            </div>
        </>
)};
