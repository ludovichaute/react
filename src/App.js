import React, { Component } from 'react';
import './App.css';
import Module from './components/Module';
import data from './data.json';

class App extends Component {
  constructor(props){  
    super(props);
    this.LogValue = this.LogValue.bind(this);
    this.state = {
      LogValue: this.LogValue.bind(this),
      firstCountry: 'Belgique',
      secondCountry: 'France',
      
    }
  }
  
  LogValue(value){
    console.log(value)
    if (value.name === this.state.firstCountry) {
      console.log("test");
    }else{

    }
  }
  render() {
    return (
      <div className="module">
        <h3>“Qui va gagner ce match? {this.state.firstCountry} VS {this.state.secondCountry}</h3>
        <Module name={this.state.firstCountry} callback={this.LogValue} button={
          data.map(function(ContentAPI){
            return <form action={"http://sports.ladbrokes.be/add-selns?lang=en&bet_ref="+ContentAPI.ContentAPI.Sport.SBClass.SBType.Ev.Mkt[0].Seln[0].Price["-bet_ref"]} key={ContentAPI.ContentAPI.Sport.SBClass.SBType.Ev.Mkt[0].Seln[0].Price["-bet_ref"]} target="_blank">
              <button >
              {ContentAPI.ContentAPI.Sport.SBClass.SBType.Ev.Mkt[0].Seln[0].Price["-dec_prc"]}
              </button>
            </form> ;
          })}>
        </Module>
        <Module name={this.state.secondCountry} callback={this.LogValue} button={
          data.map(function(ContentAPI){
            return <form action={"http://sports.ladbrokes.be/add-selns?lang=en&bet_ref="+ContentAPI.ContentAPI.Sport.SBClass.SBType.Ev.Mkt[0].Seln[2].Price["-bet_ref"]} key={ContentAPI.ContentAPI.Sport.SBClass.SBType.Ev.Mkt[0].Seln[2].Price["-bet_ref"]} target="_blank">
                <button >
                {ContentAPI.ContentAPI.Sport.SBClass.SBType.Ev.Mkt[0].Seln[2].Price["-dec_prc"]}
                </button>
              </form>;
          })}>
        </Module>
      </div>
    );    
  }
  
}
export default App;
//ContentAPI.ContentAPI.Sport.SBClass.SBType.Ev.Mkt[0].Seln[0].Price["-bet_ref"]
//ContentAPI.ContentAPI.Sport.SBClass.SBType.Ev.Mkt[0].Seln[0].Price["-dec_prc"]