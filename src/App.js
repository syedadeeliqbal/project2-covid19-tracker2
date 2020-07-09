import React from 'react';
import { Cards, Chart, CountryPicker, Map } from './components'
import styles from './App.module.css';
import { fetchData, fetchCountryMapData } from './api';
// import coronaImage from './images2/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '', 
    mapData: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);

    this.setState({ data: fetchedData })

    const fetchedMapData = await fetchCountryMapData();
    console.log("Main Map data");
    console.log(fetchedMapData);
    this.setState({ mapData: fetchedMapData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
    console.log(fetchedData);
  }

  render() {
    const { data, country, mapData } = this.state;

    return (
      <div className={styles.container}>
        {/* <img className={styles.image} src={coronaImage} alt="Covid 19" /> */}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Map mapData={mapData}/>
      </div>
    );
  }
}
export default App;