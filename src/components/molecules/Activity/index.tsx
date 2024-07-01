import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import {
  Content,
  Item,
  ItemText,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select";
import { Line } from "react-chartjs-2";
import { useMemo, useState } from "react";
import { ActivityData } from "@/src/libs/dto/json";
import ArrowDown from "@/src/assets/icons/ArrowDown";
import { SelectItem } from "@/src/components/atoms/SelectAdorment";

interface ActivityProps extends ActivityData {}

const Activity = (props: ActivityProps) => {
  const { data, labels } = props;
  const [filter, setFilter] = useState<string>("this-week");
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const filterItem = useMemo<SelectItem[]>(
    () => [
      {
        title: "This Week",
        value: "this-week",
      },
      {
        title: "Last Week",
        value: "last-week",
      },
      {
        title: "Last Month",
        value: "last-month",
      },
    ],
    [],
  );

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = useMemo<ChartOptions<any>>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            color: "#141522",
            font: {
              size: 12,
              weight: "600",
            },
            callback: (value: number) => {
              return value;
            },
          },
        },
        x: {
          border: {
            display: false,
          },
          grid: {
            color: "#F5F5F7",
          },
          ticks: {
            font: {
              size: 12,
              weight: "600",
            },
            color: "#141522",
          },
        },
      },
      elements: {
        line: {
          tension: 0.5,
        },
      },
      plugins: {
        legend: {
          display: false,
          position: "top" as const,
        },
        tooltip: {
          displayColors: false,
          bodyFont: {
            size: 14,
            weight: "600",
          },
          padding: {
            x: 18,
            y: 8,
          },
          callbacks: {
            title: () => null,
            label: ({ raw }: { raw: number }) => `${raw} Task`,
          },
        },
      },
    }),
    [],
  );

  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Task",
          data,
          borderColor: "#141522",
          backgroundColor: "#FFFF",
          color: "#141522",
        },
      ],
    }),
    [],
  );

  return (
    <div className="w-full md:w-10/12 bg-[#F5F5F7] rounded-default p-5">
      <div className="flex items-center justify-between text-secondary-500">
        <p className="font-semibold text-base">Activity</p>
        <Root
          value={filter}
          open={filterOpen}
          onValueChange={setFilter}
          onOpenChange={setFilterOpen}
        >
          <Trigger className="outline-none flex items-center gap-2">
            <Value aria-label={filter}>
              <span className="font-medium text-xs text-secondary-500">
                {filterItem.find((item) => item.value === filter)?.title}
              </span>
            </Value>
            <div className={filterOpen ? "rotate-180" : "rotate-0"}>
              <ArrowDown variant="small" />
            </div>
          </Trigger>
          <Portal>
            <Content
              position="popper"
              sideOffset={1}
              className="w-radix-select-width bg-[#F5F5F7]  rounded-b-default overflow-hidden"
            >
              <Viewport>
                {filterItem.map((item) => (
                  <Item
                    className="font-medium text-xs text-secondary-500 px-1 py-1 cursor-pointer hover:bg-[#e0e0e2] outline-none"
                    value={item.value}
                    key={item.value}
                  >
                    <ItemText>{item.title}</ItemText>
                  </Item>
                ))}
              </Viewport>
            </Content>
          </Portal>
        </Root>
      </div>
      <div className="flex bg-white p-4 rounded-default mt-5 w-full">
        <div className="h-[98px] w-full relative">
          <Line options={options} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Activity;
