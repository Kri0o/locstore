// Ajouter les produits au panier

export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload : product
    }
}

// Supprimer les produits du panier

export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}