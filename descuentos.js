function porcPrecioConDescuento(descuento) {
    return 100 - descuento;
} 

function precioConDescuento(precio, descuento) {
    return ( precio * porcPrecioConDescuento(descuento) ) / 100;
} 

function onClickButtonPriceDiscount() {
    let inputPrice = 0;
    let inputDiscount = 0;
    inputPrice = document.getElementById("inputPrice").value;
    inputDiscount = document.getElementById("inputDiscount").value;
    document.getElementById("resultP").innerText = "El precio con descuento es: " + precioConDescuento(inputPrice, inputDiscount);
}