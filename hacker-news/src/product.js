import React from "react";
import {connect} from "react-redux";
import { fetchProductsAPICall } from './productActions'

class Product extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchProductsAPICall())
	}

	render() {
		const { error, loading, products } = this.props;

		console.log(this.props)

		if (loading) {
			return <div>Loading the page. . .</div>
		}

		return(
				<div>
					{
						products.map(product => product.name)
					}
				</div>
			)
	}

}

const mapStateToProps = state => ({
	products: state.products.items, 
	loading: state.products.loading, 
	error: state.products.error
})

export default connect(mapStateToProps)(Product)