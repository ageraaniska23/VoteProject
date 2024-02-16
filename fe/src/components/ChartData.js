export const pieChartData = {
  labels: ['Anis & Muhaimin', 'Prabowo & Gibran', 'Ganjar & Mahfud'],
  datasets: [
    {
      label: 'Jumlah pemilih',
      data: [20, 20, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
    },
  ],
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed) {
              const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(2);
              label += `${context.parsed} (${percentage}%)`;
            }
            return label;
          },
        },
      },
    },
  },
};
