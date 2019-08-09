import { combineReducers } from "redux";
import products from "./productReducer";

export default combineReducers({
	products
})

/*
	counter 

	MapStateToProps

	{
		count, 
		userInfo,
		comment, 
		setting
		userDel

	}

	countreducer() {
		count
	} 

	userInfoReducer() {
		
	}

	settingReducer() {
	
	}
*/