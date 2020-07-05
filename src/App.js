import React,{Component} from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Charts from './components/Charts/Charts';
import {fetchData} from './Api/Api';
import image from './images/image.png';


class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      fetch_data : '',
      country : ''
    }
  }

  handleChange = async (country) =>{
    console.log(`country : ${country}`)
    const data = await fetchData(country);
    this.setState({fetch_data : data,country:country })
    
  }

  async componentDidMount(){
    const data = await fetchData(this.state.country);
    
    this.setState({
      fetch_data : data
    })
  }
  
  render(){
    return(
        <div className='container'>
          <img src={image} className={image}/>   
            <Cards data={this.state.fetch_data}  />
            <CountryPicker handleChange = {this.handleChange}/>
            <br></br>
            <Charts country={this.state.country} data={this.state.fetch_data}/> 
          </div>
    );
  }
}

 

export default App;
