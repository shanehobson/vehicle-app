import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import VehicleInfo from './VehicleInfo';
import LoadingPage from './LoadingPage';
import { getVehicleInfo } from '../actions/vehicleInfo';
import { setIsLoading } from '../actions/vehicleInfo';

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

DashboardPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  getVehicleInfo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: state.vehicleInfo.isLoading
});

const mapDispatchToProps = (dispatch, props) => ({
  setIsLoading: (isLoading) => dispatch(setIsLoading(isLoading)),
  getVehicleInfo: () => dispatch(getVehicleInfo())
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);