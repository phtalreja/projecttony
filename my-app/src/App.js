import React, { Component } from 'react';
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
    datasets: [
      {

        label: phrase,
        fill: false,
        responsive: true,
        lineTension: 0.1,
        backgroundColor:  'rgba(124,178,246, 1)', //'rgba(57,255,2,1)', //'rgba(191,87,0,1)',
        borderColor: 'rgba(124,178,246, 1)', //'rgba(191,87,0,1)'
        pointBorderColor: 'rgba(124,178,246, .5)', // rgba(25,25,100,.5)',
        borderWidth: 2,
        spanGaps: true,
        data: inputData
      }
    ],
  }
  return (
  <Line
    data={chart}
    options={{
      title:{
        display:true,
        text: phrase,
        fontSize:32,
        fontFamily: 'Quicksand',
        fontColor : 'black'
      },
      scales:{
        yAxes:[{gridLines: {
          display: true ,
          color: "#696969"
        },
          ticks:{fontFamily: 'Quicksand', fontSize: 20, fontColor : 'black', beginAtZero:true}
        }],
        xAxes:[{gridLines: {
          display: true ,
          color: "#696969"
        },
          ticks:{fontFamily: 'Quicksand', fontColor : 'black', fontSize: 20}
        }]
      },
      legend:{
        
        labels: {fontFamily: 'Quicksand', fontColor : 'black', fontSize: 20},
        display:false,
        position:'top'
      },
      responsive: true,
      maintainAspectRatio: true,
    }}
  />
  )

}


// This class works on its own, but I am having trouble sending the value that was submitted to the Container class. 
// I am trying to do it with props, but it's not working

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: this.element.value });
    this.props.handleSubmit(this.state.value)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" ref={el => this.element = el} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{ this.state.value }</p>
      </div>
    );
  }
}

class Container extends Component {
  constructor() {
    super()
    this.state = {data : [.3, .4, .9, .7, .3, .1], phrase : "Sentiment for ___"}
    //this.handleSubmit = this.handleSubmit.bind(this)
        
    }
 
    // Need to call this function and update the state of the Container component when the form is submitted
    handleInputChange(input) {
      this.setState({
        phrase : "Sentiment for " + input
      })
    }
  

  render() {

    var graph = createChart(this.state.data, this.state.phrase)

    return (
      
      <React.Fragment>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Quicksand" />
        <div>
          <TextInput> props={this}</TextInput>
          {this.state.phrase}
        </div>
      <div class = "centered">
        {graph}
      </div>
    </React.Fragment>
    )
  }

}

function App() {
  return (
    <div className="App">
      <div class="title">
        TITLE OF THE APPLICATION
      </div>
      <div>
      <Container/>
        </div>
    </div>
  );
}

export default App;
