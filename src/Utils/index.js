//Este archivo contiene funciones y objetos de uso general que se utilizan en toda la aplicación

/**
 * Esta función calcula el precio total de una nueva orden
 * @param {Array} products es cartProducts que es un Array de productos.
 * @returns {number} es la suma total de los precios de los productos con 2 decimales
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.finalPrice);

    return sum.toFixed(2);
}