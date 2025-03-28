// ==== CONFIGURACIONES ====

// URL base
const API_BASE = "https://67e689e66530dbd311106656.mockapi.io/";

// Headers comunes
const headers = new Headers({ "Content-Type": "application/json" });

// ==== FUNCIONES DE PRODUCTOS ====

// Crear producto
const saveProduct = async (data) => {
  const config = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };
  const response = await fetch(`${API_BASE}`, config);
  if (!response.ok) throw new Error("Error al crear producto");
  return await response.json();
};

// Editar producto
const editProduct = async (data) => {
  const { id, ...dataUpdate } = data;
  const config = {
    method: "PUT",
    headers,
    body: JSON.stringify(dataUpdate),
  };
  const response = await fetch(`${API_BASE}`, config);
  if (!response.ok) throw new Error("Error al editar producto");
  return await response.json();
};

// Eliminar producto
const deleteProduct = async (id) => {
  const config = {
    method: "DELETE",
    headers,
  };
  const response = await fetch(`${API_BASE}`, config);
  if (!response.ok) throw new Error("Error al eliminar producto");
  return await response.json();
};

// Consultar productos
const findProducts = async () => {
  const config = {
    method: "GET",
    headers,
  };
  const response = await fetch(`${API_BASE}`, config);
  if (!response.ok) throw new Error("Error al obtener productos");
  return await response.json();
};

// ==== FUNCIONES DE USUARIOS ====

// Crear usuario
const saveUser = async (data) => {
  const config = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };
  const response = await fetch(`${API_BASE}`, config);
  if (!response.ok) throw new Error("Error al crear usuario");
  return await response.json();
};

// Editar usuario
const editUser = async (data) => {
  const { id, ...dataUpdate } = data;
  const config = {
    method: "PUT",
    headers,
    body: JSON.stringify(dataUpdate),
  };
  const response = await fetch(`${API_BASE}`, config);
  if (!response.ok) throw new Error("Error al editar usuario");
  return await response.json();
};

// Eliminar usuario
const deleteUser = async (id) => {
  const config = {
    method: "DELETE",
    headers,
  };
  const response = await fetch(`${API_BASE}`, config);
  if (!response.ok) throw new Error("Error al eliminar usuario");
  return await response.json();
};

// Consultar usuarios
const findUsers = async () => {
  const config = {
    method: "GET",
    headers,
  };
  const response = await fetch(`${API_BASE}`, config);
  if (!response.ok) throw new Error("Error al obtener usuarios");
  return await response.json();
};

// ==== FLUJO DE PRODUCTOS ====

while (confirm("¿Desea insertar un producto?")) {
  const data = {
    name: prompt("Ingrese el nombre del producto"),
    price: prompt("Ingrese el precio"),
    category: prompt("Ingrese la categoría"),
  };
  saveProduct(data)
    .then((result) => alert(`Producto creado:\n${JSON.stringify(result)}`))
    .catch((error) => alert(error.message));
}

while (confirm("¿Desea actualizar un producto?")) {
  const data = {
    id: prompt("Ingrese el ID del producto"),
    name: prompt("Nuevo nombre (dejar vacío para no cambiar)"),
    price: prompt("Nuevo precio (dejar vacío para no cambiar)"),
    category: prompt("Nueva categoría (dejar vacío para no cambiar)"),
  };
  editProduct(data)
    .then((result) => alert(`Producto actualizado:\n${JSON.stringify(result)}`))
    .catch((error) => alert(error.message));
}

while (confirm("¿Desea eliminar un producto?")) {
  const id = prompt("Ingrese el ID del producto a eliminar");
  deleteProduct(id)
    .then((result) => alert(`Producto eliminado:\n${JSON.stringify(result)}`))
    .catch((error) => alert(error.message));
}

while (confirm("¿Desea ver todos los productos?")) {
  findProducts()
    .then((result) => console.table(result))
    .catch((error) => alert(error.message));
}

// ==== FLUJO DE USUARIOS ====

while (confirm("¿Desea insertar un usuario?")) {
  const data = {
    name: prompt("Ingrese el nombre del usuario"),
    last: prompt("Ingrese el apellido"),
  };
  saveUser(data)
    .then((result) => alert(`Usuario creado:\n${JSON.stringify(result)}`))
    .catch((error) => alert(error.message));
}

while (confirm("¿Desea actualizar un usuario?")) {
  const data = {
    id: prompt("Ingrese el ID del usuario"),
    name: prompt("Nuevo nombre (dejar vacío para no cambiar)"),
    last: prompt("Nuevo apellido (dejar vacío para no cambiar)"),
  };
  editUser(data)
    .then((result) => alert(`Usuario actualizado:\n${JSON.stringify(result)}`))
    .catch((error) => alert(error.message));
}

while (confirm("¿Desea eliminar un usuario?")) {
  const id = prompt("Ingrese el ID del usuario a eliminar");
  deleteUser(id)
    .then((result) => alert(`Usuario eliminado:\n${JSON.stringify(result)}`))
    .catch((error) => alert(error.message));
}

while (confirm("¿Desea ver todos los usuarios?")) {
  findUsers()
    .then((result) => console.table(result))
    .catch((error) => alert(error.message));
}