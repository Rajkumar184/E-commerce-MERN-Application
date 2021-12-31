import { ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from "./Types";

const Reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		}
		case REMOVE_ITEM: {
			return {
				...state,
				cartItems: state.cartItems.filter((item) => item.id !== action.payload),
			};
		}

		case CLEAR_CART: {
			return { cartItems: [] };
		}

		default:
			return state;
	}
};

export default Reducer;
