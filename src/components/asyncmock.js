const products = [
    {
        id: '1',
        name: "glacoXAN E",
        category: "fumigacion",
        clase: "hormiguicida",
        price: 250,
        stock: 25,
        img: "https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png", 
    },
    {
        id: '2',
        name: 'capXAN I',
        category: 'fumigacion',
        clase: 'insecticida',
        price: '$400',
        img: "https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png",
    },
    {
        id: '3',
        name: 'Bermuda',
        category: 'siembra',
        clase: 'puras',
        price: '$2000',
        img: "https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png",
    },
    {
        id: '4',
        name: 'Patagonia',
        category: 'siembra',
        clase: 'mexcla',
        price: '$2500',
        img: "https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png",        
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
