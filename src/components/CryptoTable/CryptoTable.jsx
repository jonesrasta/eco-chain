import React, { Suspense } from "react";
import PropTypes from "prop-types";
import merge from "deepmerge";

import {
    Card,
    Menu,
    MenuList,
    MenuItem,
    CardBody,
    Typography,
    CardHeader,

} from "@material-tailwind/react";

// Importação dinâmica do Chart
const AreaChart = React.lazy(() => import("react-apexcharts"));

// Area Chart component
function AreaChartComponent({ height = 90, series, colors, options }) {
  const chartOptions = React.useMemo(
    () => ({
      colors,
      ...merge(
        {
          chart: {
            height: height,
            type: "area",
            zoom: { enabled: false },
            toolbar: { show: false },
          },
          dataLabels: { enabled: false },
          stroke: { curve: "smooth", width: 2 },
          grid: { show: false },
          tooltip: { theme: "light" },
          yaxis: { labels: { show: false } },
          xaxis: { labels: { show: false }, axisTicks: { show: false }, axisBorder: { show: false } },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.4,
              opacityTo: 0.6,
              stops: [0, 100],
            },
          },
        },
        options || {}
      ),
    }),
    [height, colors, options]
  );

  return <AreaChart type="area" height={height} series={series} options={chartOptions} />;
}

// Adicionando propTypes para validação de props
AreaChartComponent.propTypes = {
  height: PropTypes.number,
  series: PropTypes.array.isRequired,
  colors: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  options: PropTypes.object,
};

// Crypto Table data
const TABLE_DATA = [
    {
        img: "https://www.material-tailwind.com/logos/btc.png",
        digitalAsset: "BTC",
        detail: "Bitcoin",
        price: "$46,727.30",
        change: "+2.92%",
        volume: "$45.31B",
        market: "$915.61B",
        color: "green",
        trend: 4,
    },
    {
        img: "https://www.material-tailwind.com/logos/eth.png",
        digitalAsset: "ETH",
        detail: "Ethereum",
        price: "$2,609.30",
        change: "+6.80%",
        volume: "$23.42B",
        market: "$313.58B",
        color: "green",
    },
    {
        img: "https://www.material-tailwind.com/logos/usdt.png",
        digitalAsset: "USDT",
        detail: "TetherUS",
        price: "$1.00",
        change: "-0.01%",
        volume: "$94.37B",
        market: "$40,600",
        color: "red",
    },
    {
        img: "https://www.material-tailwind.com/logos/sol.png",
        digitalAsset: "SOL",
        detail: "Solana",
        price: "$1.00",
        change: "+6.35%",
        volume: "$3.48B",
        market: "$43.26B",
        color: "green",
    },
    // Adicione mais linhas conforme necessário
  ];

// JSX Component
const CryptoTable = () => {
  return (
    <Card className="h-full w-full bg-[#0000]  max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-normal tracking-wider text-center text-white">Cotação Criptomoedas</h2>
      <CardHeader
        floated={false}
        shadow={false}
        className="mb-4 flex justify-between gap-4 rounded-none"
      >
        <div className="flex w-full md:w-max gap-4">
          <Menu>
            <MenuList>
              <MenuItem>12h</MenuItem>
              <MenuItem>24h</MenuItem>
              <MenuItem>48h</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </CardHeader>

      <CardBody className="overflow-hidden !px-0 py-2">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr>
              {["Digital Asset", "Price", "Change", "Volume", "Market Cap", "Trend", "Actions"].map(
                (head, index) => (
                  <th key={index} className="border-b p-4 text-right">
                    <Typography color="white" variant="small" className="font-normal">
                      {head}
                    </Typography>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((data) => (
              <tr key={data.asset}>
                <td className="p-4 text-left">
                  <div className="flex items-center gap-6">
                    <img src={data.img} alt={data.asset} className="h-10 w-10" />
                    <div>
                      <Typography variant="small" color="blue-gray" className="font-semibold">
                        {data.asset}
                      </Typography>
                      <Typography variant="small" className="text-gray-400">
                        {data.detail}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-right text-gray-400">{data.price}</td>
                <td className="p-4 text-right font-bold" style={{ color: data.color }}>
                  {data.change}
                </td>
                <td className="p-4 text-right text-gray-400">{data.volume}</td>
                <td className="p-4 text-right text-gray-400">{data.marketCap}</td>
                <td className="p-4 text-right">
                  <div className="ml-auto h-12 w-24">
                    <Suspense fallback={<div>Loading chart...</div>}>
                      <AreaChartComponent
                        colors={["#2196F373"]}
                        series={[{ name: "2023 Sales", data: [30, 40, 500, 420, 700] }]}
                        options={{}}
                      />
                    </Suspense>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default CryptoTable;
