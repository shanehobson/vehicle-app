const isLoadingDefaultState = {
    isLoading: true
};

const isLoadingReducer = (state = isLoadingDefaultState, action) => {
    switch(action.type) {
        case 'SET_IS_LOADING':
            return {
                isLoading: action.isLoading
            };
        default:
            return state;
    } 
}

export default isLoadingReducer;