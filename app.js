
var x;
let baseURL = "http://blynk-cloud.com/E9sQ_1ZWxpBiHE-wPIqjfX5AO5C4JHTY/get/v8";

async function func() {
  const result = await fetch(baseURL);
  const data = await result.json();
  x = data[0];
  document.body.style.backgroundImage = "url('background.jpg')";
  
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Oxygen Rate"],
        datasets: [
        {
            label: ["# of Votes"],
            data: [x, 100 - x],
            backgroundColor: ["rgba(17, 100, 12, 0.2)"],
            borderColor: ["rgba(12,1,1,1)"],
            borderWidth: 1
        }
        ]
    },

    options: {
        maintainAspectRatio: false,
        circumference: Math.PI + 1,
        rotation: -Math.PI - 0.5,
        cutoutPercentage: 64,

        onClick(...args) {
        console.log(args);
        }
    }
    });
}



func();



