export const setVehicleInfo = (vehicleInfo) => ({
    type: 'SET_VEHICLE_INFO',
    vehicleInfo
});

export const getVehicleInfo = () => {
    return (dispatch) => {
        fetch('https://clearpathpro.io:9060/getVehicleInformation?userId=hobsonShane')
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            const { vehicleYear, vehicleMake, vehicleModel, vin, modelNumber } = jsonData.vehicleInfo;
            const { rebate, msrp, discount, purchasePrice} = jsonData.vehiclePricing;
            dispatch(setVehicleInfo({
                year: vehicleYear,
                make: vehicleMake,
                model: vehicleModel,
                vin,
                modelNumber,
                rebate,
                msrp,
                discount,
                purchasePrice,
                isLoading: false
            }));
        })
        .catch((e) => console.log(e));
    }
}

export const startSetVehicleInfo = (vehicleInfo = {}) => {
    return (dispatch) => {
        const {
            msrp,
            discount, 
            rebate, 
            purchasePrice
        } = vehicleInfo;
        const params = {
            userId: 'hobsonShane',
            msrp,
            discount, 
            rebate,
            purchasePrice
        }
        fetch('https://clearpathpro.io:9060/changeVehiclePricing', {
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then((result) => {
            dispatch(setVehicleInfo({
                msrp: parseInt(msrp),
                discount: parseInt(discount),
                rebate: parseInt(rebate), 
                purchasePrice: parseInt(purchasePrice),
                isLoading: false
            }))
        })
        .catch((e) => console.log(e));
    }  
}

export const setIsLoading = (isLoading) => ({
    type: 'SET_IS_LOADING',
    isLoading
});