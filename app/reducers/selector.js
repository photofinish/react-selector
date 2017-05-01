import * as actionCreators from '../actions'

const selectorInitialState = {
    url: 'http://192.168.2.211:3000/api/v1/instock_products',
    data: {},
    paginator: {},
    filter: {},
    visible: false,
    current: null
}

export default function selector(state = selectorInitialState, action) {
    console.log('reducer:', action.type, state)
    switch(action.type) {
        case actionCreators.SHOW_SELECTOR:
            return Object.assign({}, state, {
                visible: true
            })
        case actionCreators.HIDDEN_SELECTOR:
            return Object.assign({}, state, {
                visible: false
            })
        case actionCreators.SELECT_CHANGE:
            return Object.assign({}, state, {
                current: action.resource
            })
        case actionCreators.RETURN_SELECT:
            return Object.assign({}, state, {

            })
        default:
            return state
    }
}
