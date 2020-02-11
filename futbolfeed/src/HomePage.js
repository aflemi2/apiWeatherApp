import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Leagues: [],
      object: 'objet',
    };
  }

  componentDidMount() {
    fetch('https://www.scorebat.com/video-api/v1/')
    .then((response)=> {
      return response.json();
    })
    .then(response => {
    console.log(response[0].competition.name);
    this.setState({object: JSON.stringify(response[0])})
    let compArray = response.map( highlight => highlight.competition.name);
    this.setState({Leagues: compArray})
    console.log(compArray);
    })
    .catch(e => console.log(e));
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>{this.state.object}</p>
        <h2>It is {this.state.Leagues[0]}.</h2>
        { this.state.Leagues.map(league => {
          return <h2>{league}</h2>
        })}
      </div>
    );
  }
}

export default HomePage;
