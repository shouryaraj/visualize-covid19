import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import  { fetchData }  from './api';



class App extends React.Component{
  // variable for the system
  state = {
     data: {},
  }



  //Built in async function after all the elements of the page is rendered correctly, this method is 
  //Called. After the markup is set on the page, this technique called by React itself to either 
  //fetch the data from An External API or perform some unique operations 
  async componentDidMount(){
    const data = await fetchData();

    this.setState({data: fetchData});

  }
    render(){
      console.log(this.state.data)
      return(
       <div className={styles.contianer}>
       <Cards data={this.state.data}/>
       <CountryPicker />
       <Chart />
       </div>
      )
    }
}

export default App;
