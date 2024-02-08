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
  };
  
  // Hitung total suara
  const totalVotes = pieChartData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
  
  // Hitung persentase dan tambahkan ke dalam data
  pieChartData.datasets[0].data.forEach((votes, index) => {
    const percentage = ((votes / totalVotes) * 100).toFixed(2);
    pieChartData.labels[index] += ` (${percentage}%)`;
  });
  