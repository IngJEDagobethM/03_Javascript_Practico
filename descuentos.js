function porcPrecioConDescuento(descuento) {
    return 100 - descuento;
} 

function precioConDescuento(precio, descuento) {
    return ( precio * porcPrecioConDescuento(descuento) ) / 100;
} 

const coupons = [
    {valor: "NEW", descuento: 5},
    {valor: "GOLD", descuento: 15},
    {valor: "ROYAL", descuento: 20},
    {valor: "BLACKF", descuento: 17.5}
];

function onClickButtonPriceDiscount() {
    let inputPrice = document.getElementById("inputPrice").value;
    let inputDiscount = document.getElementById("inputDiscount").value;

    let encuentraCoupon = coupons.find(function(coupon){
        return coupon.valor === inputDiscount;
    });

    document.getElementById("resultP").innerText = "El precio con descuento es: " + precioConDescuento(inputPrice, encuentraCoupon.descuento);
}