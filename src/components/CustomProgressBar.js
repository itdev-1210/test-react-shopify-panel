import React from 'react';
import Progress from 'react-progressbar';

export default class CustomProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallSize: 0,
      currentSize: 0,
      leftSize: 0,
      productName: ""
    }
  }

  componentDidMount() {
    /*    
    this.setState((prevState) => ({
      overallSize: prevState.overallSize,
      currentSize: prevState.currentSize,
      leftSize: prevState.leftSize,
      productName: prevState.productName
    }));
    */
    this.setState({
      overallSize: 100000,
      currentSize: 60000,
      leftSize: 40000,
      productName: 'Car'
    });
  }

  render() {
    return (      
      <div style={{
        width: '100%', 
        height: 'auto',
        background: '#F7F7F7',
        display: 'flex',
        marginTop: '5px',
        marginBottom: '5px',
        flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{padding: '10px'}}>
            <span>{this.state.productName}</span>
          </div>  
          <div style={{padding: '10px'}}>
            <span>{this.state.overallSize}</span>
          </div>  
        </div>
        <div style={{ width: '100%' }}>
          <div style={{padding: '10px'}}>
            <Progress completed={75} height={'20px'} color={'orange'}/>
          </div>  
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{padding: '10px'}}>
            <span style={{color: 'orange', fontSize: '18px'}}>{this.state.currentSize}</span>
          </div>  
          <div style={{padding: '10px'}}>
            <span style={{fontSize: '15px'}}>{this.state.leftSize}</span>
          </div>  
        </div>
      </div>
    );
  }
}