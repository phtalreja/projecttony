import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Line} from 'react-chartjs-2'

function createChart(inputData, phrase) {
  var chartlabels = []

  for (var i = 0; i < inputData.length; i++) {
    chartlabels.push("" + i);
  }
  const chart = {
    labels: chartlabels,
    

    //labels: ['9:00 am','10:00 am','11:00 am','12:00 pm', '1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm','9:00 pm','10:00 pm','11:00 pm'],
    datasets: [
      {

        label: phrase,
        fill: false,
        responsive: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(124,178,246, 1)',
        borderColor: 'rgba(124,178,246, 1)',
        pointBorderColor: 'rgba(124,178,246, 1)',
        borderWidth: 2,
        spanGaps: true,
        data: inputData
      }
    ],
  }

  return (
    <Line
      data={chart}
    
    />
    )


}
function App() {
  var data = [0, .4, .3, .6, .4, .3, .6, .9]

  var chart = createChart(data,"Sentiment for Pizza")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
      <div class = "centered">
        {chart}
      </div>
    </div>
  );
}


export default App;
