import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import useLocalStorage from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
	children: ReactNode;
};

type CartItem = {
	id: number;
	quantity: number;
};

type ShoppingCartContext = {
	openCart: () => void;
	closeCart: () => void;
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
	cartItems: CartItem[];
	cartQuantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
	const cartQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

	function getItemQuantity(id: number) {
		return cartItems.find((item: { id: number }) => item.id === id)?.quantity || 0;
	}

	function increaseCartQuantity(id: number) {
		// TODO : Sunny Solution
		// const newCartItems = [...cartItems];
		// const index = cartItems.findIndex((item) => item.id === id);
		// if (index === -1) setCartItems([...newCartItems, { id, quantity: 1 }]);
		// else {
		// 	newCartItems[index].quantity++;
		// 	setCartItems(newCartItems);
		// }
		// console.log(newCartItems);

		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id) == null) {
				return [...currentItems, { id, quantity: 1 }];
			} else {
				return currentItems.map((item) => {
					return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
				});
			}
		});
	}

	function decreaseCartQuantity(id: number) {
		// TODO : Sunny Solution with decrease

		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id)?.quantity == 1) {
				return currentItems.filter((item) => item.id !== id);
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function removeFromCart(id: number) {
		setCartItems((currentItems) => {
			return currentItems.filter((item) => item.id !== id);
		});
	}

	const openCart = () => setIsOpen(true);

	const closeCart = () => setIsOpen(false);

	return (
		<ShoppingCartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				cartItems,
				cartQuantity,
				openCart,
				closeCart,
			}}
		>
			{children}
			<ShoppingCart isOpen={isOpen} />
		</ShoppingCartContext.Provider>
	);
}
