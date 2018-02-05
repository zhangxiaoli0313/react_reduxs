let initialState = {total: 0}
const home = (state=initialState, action) => {
    switch (action.type) {
        case 'LIST': 
            return Object.assign({}, state, {total: action.list})
        default: 
           return state 
    }
}

export default home
