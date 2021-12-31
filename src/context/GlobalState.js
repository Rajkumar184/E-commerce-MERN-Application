import React, { useReducer } from "react";
import { ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from "./Types";
import Reducer from "./Reducer";
import GlobalContext from "./GlobalContext";

const initialState = {
	cartItems: [],
};

const GlobalState = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	// to add the product into cart
	const addToCart = (item) => {
		dispatch({ type: ADD_TO_CART, payload: item });
	};

	// to delete the indv. elements from an Item Cart
	const removeItem = (id) => {
		dispatch({ type: REMOVE_ITEM, payload: id });
	};

	// clear the cart
	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	return (
		<GlobalContext.Provider
			value={{
				cartItems: state.cartItems,
				addToCart,
				removeItem,
				clearCart,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
