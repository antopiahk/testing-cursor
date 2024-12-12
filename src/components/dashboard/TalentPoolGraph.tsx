import React from 'react';
import { Line } from 'react-chartjs-2';
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
  ChartData,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TalentPoolGraph: React.FC = () => {
  const data: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Talent Pool Size',
        data: [150, 200, 250, 300, 380, 420],
        fill: false,
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgb(37, 99, 235)',
        tension: 0.4,
        pointBackgroundColor: 'rgb(37, 99, 235)',
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 12,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 8,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Talent Pool Growth',
        align: 'start',
        padding: {
          bottom: 12,
        },
        font: {
          size: 14,
          weight: '500',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          padding: 8,
          stepSize: 50,
          font: {
            size: 11,
          },
          callback: (value) => value + '',
        },
        min: 0,
        max: 450,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 8,
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow h-full">
      <div className="p-3 h-[360px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TalentPoolGraph; 