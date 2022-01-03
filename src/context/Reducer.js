import { ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from "./Types";
import { toast } from "react-toastify";

const Reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		}
		case REMOVE_ITEM: {
			toast.success("Product removed from cart!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
			return {
				...state,
				cartItems: state.cartItems.filter((item) => item.id !== action.payload),
			};
		}

		case CLEAR_CART: {
			toast.success("Your Cart is Empty Now!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
			return { cartItems: [] };
		}

		default:
			return state;
	}
};

export default Reducer;
