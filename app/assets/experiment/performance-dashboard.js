var el = document.getElementById('comparison');
var ctx = el.getContext('2d');

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: window.datasets,
  },

  options: {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'minute',
          },
        },
      ],
    },
  },
});
