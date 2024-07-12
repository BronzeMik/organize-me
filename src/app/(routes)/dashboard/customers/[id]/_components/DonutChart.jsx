import { DonutChart, Legend } from '@tremor/react';



const dataFormatter = (number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export default function DonutChartComponent({data}) { 

    return(
        <>
            <div className="mx-auto space-y-12">
            <div className="space-y-3">
                <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                <h2 className='text-2xl'>Service Categories</h2>
                </span>
                <div className="flex justify-center">
                <DonutChart
                    data={data}
                    variant="donut"
                    valueFormatter={dataFormatter}
                    onValueChange={(v) => console.log(v)}
                    showAnimation={true}
                />
                <Legend
                categories={data.map((category) => category.name)}
                colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="max-w-xs"
                />

                </div>
            </div>

            </div>
        </>
)};
