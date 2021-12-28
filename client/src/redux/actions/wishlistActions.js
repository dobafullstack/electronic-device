export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";
export const DELETE_ALL_FROM_WISHLIST = "DELETE_ALL_FROM_WISHLIST";

// add to wishlist
export const addToWishlist = (item, addToast) => {
    return (dispatch, getState) => {
        if (addToast) {
            addToast("Added To Wishlist", {
                appearance: "success",
                autoDismiss: true,
            });
        }
        dispatch({ type: ADD_TO_WISHLIST, payload: item });

        localStorage.setItem("wishList", JSON.stringify(getState().wishlistData));
    };
};

// delete from wishlist
export const deleteFromWishlist = (item, addToast) => {
    return (dispatch, getState) => {
        if (addToast) {
            addToast("Removed From Wishlist", {
                appearance: "error",
                autoDismiss: true,
            });
        }
        dispatch({ type: DELETE_FROM_WISHLIST, payload: item });

        localStorage.setItem("wishList", JSON.stringify(getState().wishlistData));
    };
};

//delete all from wishlist
export const deleteAllFromWishlist = (addToast) => {
    return (dispatch, getState) => {
        if (addToast) {
            addToast("Removed All From Wishlist", {
                appearance: "error",
                autoDismiss: true,
            });
        }
        dispatch({ type: DELETE_ALL_FROM_WISHLIST });

        localStorage.setItem("wishList", JSON.stringify(getState().wishlistData));
    };
};
