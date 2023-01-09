import React from 'react'
import Chart from "react-apexcharts";


export default function Graph({isMobile = false}) {


    const createOptions = () => {
        const options = {
            chart: {
              height: 350,
              type: 'line',
            },
            stroke: {
              curve: ['smooth', 'straight'],
            },
            colors: ['#008FFB', '#A52A2A'],
            fill: {
              type:'solid',
              opacity: [0.35, 1],
            },
            labels: ['Jan 11', 'Mar 11','May 11','Jul 11','Sep 11','Nov 11','Jan 12','Mar 12'],
            markers: {
              size: 5
            },
            yaxis: [
              {
                title: {
                  // text: 'Profit',
                },
              },
              {
                opposite: true,
                title: {
                  // text: 'Margin',
                },
              },
            ],
            tooltip: {
              shared: true,
              intersect: false,
              y: {
                formatter: function (y) {
                  if(typeof y !== "undefined") {
                    return  `€${y.toFixed(0)}`;
                  }
                  return y;
                }
              }
            }
          }

          return options

    }

    const createSeries = () => {
        const series = [{
            name: 'Profit',
            type: 'area',
            data: [44, 56, 31, 47, 41, 55, 26, 41]
          }, {
            name: 'Margin',
            type: 'line',
            data: [40, 69, 70, 20, 60, 20, 37, 52]
          }]

          return series

    }

  return (
    <Chart options={createOptions()} series={createSeries()} type="line" height={350} width={isMobile ? 400 : 1000} />
    
  )
}
