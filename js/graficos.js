//PARTE DOS GRÁFICOS!

const CHART2 = document.querySelector("#donut2");
const CHART = document.querySelector("#donut");

let rosquinha2 = new Chart(CHART2, {
  type: "doughnut",
  data: {
    labels: ["IRPF1", "IRPF2", "IRPF3"],
    datasets: [
      {
        label: "Reais",
        backgroundColor: ["#1a3153", "#1a3153", "#1a3153"],
        data: [43, 55, 89],
        hoverOffset: 8,
        // borderColor:['#0350c4']
      },
      {
        label: "Reais",
        backgroundColor: ["#0350c4"],
        //  borderColor:['#0350c4']
      },
      {
        label: "Reais",
        backgroundColor: ["#0350c4", "#0350c4", "#0350c4"],
        data: [43, 55, 89],
        hoverOffset: 8,
        // borderColor:['#0350c4']
      },
    ],
  },
  options: {
    cutout: 90,
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
    },
  },
});

let rosquinha = new Chart(CHART, {
  type: "doughnut",
  data: {
    labels: ["IRPF1", "IRPF2", "IRPF3"],
    datasets: [
      {
        label: "Reais",
        backgroundColor: ["#1a3153", "#1a3153", "#1a3153"],
        data: [43, 55, 89],
        hoverOffset: 8,
        // borderColor:['#0350c4']
      },
      {
        label: "Reais",
        backgroundColor: ["#0350c4"],
        //  borderColor:['#0350c4']
      },
      {
        label: "Reais",
        backgroundColor: ["#0350c4", "#0350c4", "#0350c4"],
        data: [43, 55, 89],
        hoverOffset: 8,
        // borderColor:['#0350c4']
      },
    ],
  },
  options: {
    cutout: 90,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        align: "center",
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
    },
  },
});

function atualizarLegenda() {
  if (window.innerWidth > 992) {
    rosquinha2.options.plugins.legend.position = "top"
    rosquinha2.update();

    rosquinha.options.plugins.legend.position = "top"
    rosquinha.update();
  }
  else {
    rosquinha2.options.plugins.legend.position = "bottom"
    rosquinha2.update();

    rosquinha.options.plugins.legend.position = "bottom"
    rosquinha.update();
  }
}

atualizarLegenda();
window.addEventListener("resize", atualizarLegenda);