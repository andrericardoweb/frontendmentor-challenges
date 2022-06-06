const labels = ["Apr 6", "", "Apr 8", "","Apr 10", "", "Apr 12 ", "", "Apr 14", "", "Apr 16", "", "Apr 18", "", "Apr 20"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Sent commands",
      data: [60, 70, 30, 0, 0, 0, 0, 79, 50, 35, 37, 40, 38, 18, 0],
      backgroundColor: 'transparent',
      borderColor: "rgb(122, 181, 234)",
      lineTension: .4,
      borderWidth: 4,
      
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {   
    responsive: true,
    maintainAspectRatio: false,    
    plugins: {
      legend: false,
    },
    scales: {
      y: {        
        ticks: {
          stepSize: 20
        },
        grid: {
          drawBorder: false,
        },
        title: {
          display: true,
          text: 'Sent commands'
        }
      },
      x: {
        grid: {
          display: false,
                   
        }
      },
    }
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
