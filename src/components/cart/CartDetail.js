import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import { connect } from 'react-redux';

class CartDetail extends Component {
    render() {
        return (
            <div>
                <h1>Sepet</h1>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)