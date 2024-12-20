import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        if (storedUsers.length > 0) setAllUsers(storedUsers);
        if (storedCurrentUser) setCurrentUser(storedCurrentUser);
        setLoading(false)
    }, []);


    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(allUsers));
    }, [allUsers]);


    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);

    const logOut = () => {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");   
    }

    const addToCart = (item, quantity = 1) => {
        if (!currentUser) return;
        const updatedUser = { ...currentUser };
        updatedUser.cart = updatedUser.cart || [];

        const existingItem = updatedUser.cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            updatedUser.cart.push({ ...item, quantity });
        }
        setCurrentUser(updatedUser);
        const updatedUsers = allUsers.map(u => u.id === updatedUser.id ? updatedUser : u)
        setAllUsers(updatedUsers)
    };
    const removeFromCart = (item) => {
        if (currentUser) {
            const updateCart = (currentUser.cart || []).filter((i) => i.id !== item.id);
            const updateUser = { ...currentUser, cart: updateCart }
            setCurrentUser(updateUser)
            const updatedUsers = allUsers.map(u => u.id === currentUser.id ? updateUser : u)
            setAllUsers(updatedUsers)
        }
    }
    const handleAddToWishlist = (item) => {
        if (currentUser) {
            const updateWishlist = [...(currentUser.wishlist || []), item]
            const updateUser = { ...currentUser, wishlist: updateWishlist }
            setCurrentUser(updateUser)
            const updatedUsers = allUsers.map(u => u.id === currentUser.id ? updateUser : u)
            setAllUsers(updatedUsers)
        }
    }
    const handleRemoveFromWishlist = (item) => {
        if (currentUser) {
            const updateWishlist = (currentUser.wishlist || []).filter((i) => i.id !== item.id);
            const updateUser = { ...currentUser, wishlist: updateWishlist }
            setCurrentUser(updateUser)
            const updatedUsers = allUsers.map(u => u.id === currentUser.id ? updateUser : u)
            setAllUsers(updatedUsers)
        }
    }
    const value = {
        allUsers,
        setAllUsers,
        currentUser,
        setCurrentUser,
        loading,
        addToCart,
        handleAddToWishlist,
        removeFromCart,
        handleRemoveFromWishlist,
        logOut
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}