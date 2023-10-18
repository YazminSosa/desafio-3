


// 1. realizamos una solicitud a una URL utilizando la función fetch para obtener datos y luego procesarlos para extraer una lista de productos en formato JSON.
async function obtenerProductos() {
  const respuesta =  await fetch("https://dummyjson.com/products")
 const productos =  await respuesta.json()
  return productos.products
}

//2. El parámetro id se utiliza para realizar una solicitud a la URL para obtener un producto con un ID específico.

async function obtenerProductos(id) {
const respuesta = await fetch("https://dummyjson.com/products/" + id)
const productoId = await respuesta.json()
  return productoId
}
  
obtenerProductos(5)
 .then((productoId) => {
  console.log("producto:", productoId);

})


//--------------------------------------------------------------------------------------------

 async function obtenerUnToDo(id) {
  const respuesta = await fetch("https://dummyjson.com/todos/" + id)
  const unToDo = await respuesta.json()
  return unToDo
 }

 obtenerUnToDo(10)
 .then((unToDo) => {
  console.log("Mi ToDo es:",unToDo);
})

//---------------------------------------------------------------------------------------------
async function obtenerUnUsuario(id) {
  const respuesta = await fetch("https://dummyjson.com/users/" + id);
  const usuario = await respuesta.json();
  return usuario;
}

async function CelularDelUsuario(id) {
const usuario = await obtenerUnUsuario(id); 
const celular = usuario.phone; 

  console.log(`El usuario con ID ${id} tiene el número de celular: ${celular}`);
}

CelularDelUsuario(8); 

//--------------------------------------------------------------------------------------------
async function obtenerProductosDeApple() {
  try {
    const respuesta = await fetch("https://dummyjson.com/products");
    const data = await respuesta.json();

    const productosApple = data.products.filter(producto => producto.brand === "Apple");
    const cantidadProductosApple = productosApple.length;
    const titulosProductosApple = productosApple.map(producto => producto.title);

    console.log(`Hay ${cantidadProductosApple} productos de la marca Apple:`);
    titulosProductosApple.forEach((titulo, index) => {
      console.log(`${index + 1}. ${titulo}`);
    });
  } catch (error) {
    console.error("Ocurrió un error al obtener los productos:", error);
  }
}

obtenerProductosDeApple();
