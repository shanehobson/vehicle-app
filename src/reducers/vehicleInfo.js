const vehicleInfoDefaultState = {
    year: '',
    make: '',
    model: '',
    vin: '',
    modelNumber: '',
    msrp: 0,
    discount: 0,
    rebate: 0,
    purchasePrice: 0,
    isLoading: true
};

const vehicleInfoReducer = (state = vehicleInfoDefaultState, action) => {
    switch(action.type) {
        case 'SET_VEHICLE_INFO':
            return {
                ...state,
                ...action.vehicleInfo
            };
        case 'SET_IS_LOADING':
            return {
                ...state,
                ...action.isLoading
            };
        default:
            return state;
    } 
}

export default vehicleInfoReducer;