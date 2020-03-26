import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'bar',
          height:430
        },

        title: {
            text: 'Number of RPAs sold in 2020',
            fontSize:100,
            align: 'center',
            floating: true
        },
        plotOptions:{
          bar:{
            horizontal:true,
            dataLabels :{
            position:'top',
          },
        },
      },
      dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                  fontSize: '12px',
                  colors: ['#fff']
                }
              },
      stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
      },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
      },
      series: [{
          name:'Plan',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 20, 60, 100, 40]
        }, {
          name:'Actual',
          data: [53, 32, 40, 55, 70, 61, 80, 90, 19, 120, 100, 150]
        }
      ],

    };
  }






  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1000"
              align='center'
            />
          </div>

          <p className="col">
           //<button onClick={this.addChart}>Add!</button>
         </p>
        </div>
      </div>
    );
  }
}

export default ChartApp;
