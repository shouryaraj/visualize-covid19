import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import  { fetchData }  from './api';



class App extends React.Component{
  // variable for the system
  state = {
     data: {},
     country: ''
  }



  //Built in async function after all the elements of the page is rendered correctly, this method is 
  //Called. After the markup is set on the page, this technique called by React itself to either 
  //fetch the data from An External API or perform some unique operations 
  async componentDidMount(){
    const data = await fetchData();
    // Setting the state of the data to the fetched data
    this.setState({data: data});

  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({data: data, country: country});
    // fetch the data 
    // change the data
  }
    render(){

      return(
       <div className={styles.contianer}>
       <Cards data={this.state.data}/>
       <CountryPicker handleCountryChange={this.handleCountryChange} />
       <Chart data={this.state.data} country= {this.state.country} />
       </div>
      )
    }
}

export default App;
