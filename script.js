class Producto{
  constructor(id, nombre, descripcion, precio, img, alt){
    this.id = id
    this.nombre = nombre
    this.cantidad = 1
    this.descripcion = descripcion
    this.precio = precio
    this.img = img
    this.alt = alt
  }
}
class productoController{
  constructor(){
    this.listaProductos = []
  }

levantarProducto(){
  this.listaProductos = [
    new Producto (1, "Cuadro abstracto","pintura oleo", 15000, "./cuadros/oleo.webp", "pintura 1"),
    new Producto (2, "Cuadro barco","pintura oleo", 12000, "./cuadros/barcooleo.webp", "pintura 2"),
    new Producto (3, "Cuadro flores","pintura oleo", 12000, "./cuadros/flores.webp", "pintura 3"),
    new Producto (4, "Milo Locket-marino","pintura acrilica", 10000, "./cuadros/milo.webp", "pintura 4"),
    new Producto (5, "Milo Locket-urbano","pintura acrilica", 10000, "./cuadros/milo2.webp", "pintura 5"),
    new Producto (6, "Milo Locket-desamor","pintura acrilica", 10000, "./cuadros/milo3.webp","pintura 6"),
  
  ]
}

mostrarEnDOM(){
this.listaProductos.forEach(producto => {
  contenedor_productos.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">$${producto.precio}</p>
          <a href="#" id= "cuadro${producto.id}" class="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>`

})


}


}


const controladorProductos = new productoController()

controladorProductos.levantarProducto()

let listaCarrito;


//DOM
const contenedor_productos = document.getElementById("contenedor_productos")
const contenedor_carrito = document.getElementById("contenedor_carrito")

//Chequeo si esta la lista de carrito en el DOM
if(localStorage.getItem("listaCarrito")){
  let listaCarritoJSON = localStorage.getItem("listaCarrito")
  listaCarrito = JSON.parse(listaCarritoJSON)
}



//Mostramos productos en el DOM
controladorProductos.mostrarEnDOM(contenedor_productos)


controladorProductos.listaProductos.forEach(producto => {
  const btnApp = document.getElementById(`cuadro${producto.id}`)
  btnAP.addEventListener("clic", () =>{

listaCarrito.push(producto)

//Convertir objetos a Json
let listaCarritoJSON = JSON.stringify(listaCarrito)
localStorage.setItem("listaCarrito", listaCarritoJSON)

contenedor_carrito.innerHTML = ""

listaCarrito.forEach(producto => {
contenedor_carrito.innerHTML += `
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.alt}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: $${producto.precio}</p>
        <p class="card-text">Cantidad${producto.cantidad}</p>
      </div>
    </div>
  </div>
</div>`
})

})

})
