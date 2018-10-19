import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import VehicleInfo from './VehicleInfo';
import LoadingPage from './LoadingPage';
import { getVehicleInfo } from '../actions/vehicle';
import { setIsLoading } from '../actions/isLoading';

class DashboardPage extends React.Component {
  
  componentDidMount() {
    let promise1 = new Promise((resolve, reject) => {
      resolve(this.props.getVehicleInfo());
    });
    
    promise1.then((val) => {
      this.props.setIsLoading(false);
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className='content-container'>
          {this.props.isLoading ? <LoadingPage /> : <VehicleInfo />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading.isLoading,
  msrp: state.vehicleInfo.msrp
});

const mapDispatchToProps = (dispatch, props) => ({
  setIsLoading: (isLoading) => dispatch(setIsLoading(isLoading)),
  getVehicleInfo: () => dispatch(getVehicleInfo())
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);