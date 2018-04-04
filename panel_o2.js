$( document ).ready(function() {
    
    function getActualData() {
        var actualData = []
        for (var m = 0; m < 20; m++)
            actualData.push(45 + parseInt(Math.random() * 35))
            // actualData = [45, 42, 43, 43, 50, 40, 90, 30, 43, 45,42, 43, 43, 50, 40, 90, 30, 43, 45,42, 43, 43, 50, 40, 90, 30, 43, 45,42, 43, 43, 50, 40, 90, 30, 43, 45,42, 43, 43, 50, 40, 90, 30, 43, ];
            //actualData = [45, 42, 43, 43, 50, 40, 90, 30, 43 ];
            actualData = [70, 55, 47, 53, 40, 35, 30, 70, 55, 47, 53, 40, 35, 30, 70, 55, 47, 53, 40, 35, 30, 70, 55, 47, 53, 40, 35, 30, 70, 55, 47, 53, 40, 35, 30, 70, 55, 47, 53, 40, 35, 30, 70, 55, 47, 53, 40, 35, 30,  ];
            return actualData;
    }


    var ANIMATIONSTEPS = 110;
    
    var myLineChart;
    var labels;
    var animationStep;
    setInterval(function () {
        if (myLineChart === undefined) {
            var actualData = getActualData();
            
            // if we have only a few data points interpolate to fill out enough points to make the animation smooth
            var interpolationSteps = Math.ceil(ANIMATIONSTEPS / actualData.length);
            labels = []
            var data = []
            var blankData = []
            for (var i = 0; i < (actualData.length - 1); i++) {
                labels.push('')
                data.push(actualData[i])
                blankData.push(null)
                
                // push interpolation
                var difference = actualData[i + 1] - actualData[i];
                var interpolationStep = 1 / interpolationSteps;
                for (var j = 1; j < interpolationSteps; j++) {
                    labels.push('')
                    data.push(actualData[i] + difference * Chart.helpers.easingEffects["linear"](j * interpolationStep));
                    blankData.push(null)
                }
            }
            console.log(actualData);
            console.log(actualData.length);
            labels.push('')
            data.push(actualData[i])
            blankData.push(null)
            
            var data = {
                labels: labels,
                datasets: [
                    {
                        // strokeColor: "rgba(243, 118, 27, 1)",
                        strokeColor: "rgba(20, 111, 46, 1)",
                        data: blankData
                    },
                    {
                        strokeColor: "transparent",
                        data: data
                    }
                ]
            };
            
            var ctx = document.getElementById("canvas2").getContext("2d");
            myLineChart = new Chart(ctx).Line(data, {
                animation: false,
                datasetFill: false,
                pointDot: false,
                datasetStrokeWidth: 7,
                showTooltips: false,
                scaleOverride: true,
                scaleSteps: 12,
                scaleStepWidth: 5,
                scaleStartValue: 30,
                scaleShowVerticalLines: false,
                scaleShowLabels: false,
                responsive: true,
                maintainAspectRatio: false
            });
            
            animationStep = 0;
        }
        
        // the actual animation
        myLineChart.datasets[0].points[animationStep].value = myLineChart.datasets[1].points[animationStep].value
        myLineChart.update();
        animationStep++;
        
        // start new cycle
        if (animationStep >= labels.length) {
            myLineChart.destroy();
            myLineChart = undefined;
        }
    }, 10)
    
    
    
});

