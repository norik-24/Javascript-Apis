const saveProduct = async (data) => {
    const config = {
        method: "POST",
        body: JSON.stringify(data),
    }
    const response = await fetch("http://127.0.0.1:5600/products", config);
    const result = await response.json();
    return result;
}
const editProduct = async (data) => {
    const {id, ...dataUpdate} = data;
    const config = {
        method: "PATCH",
        body: JSON.stringify(dataUpdate),
    }
    const response = await fetch(`http://127.0.0.1:5600/products/${id}`, config);
    const result = await response.json();
    return result;
}

while(confirm("are you sure you want to update?")){
    const data = {};
    data.id = prompt('input the products id you want to update', 'Mic330');
    data.name = (confirm('¿do you want to update the name?')) ? prompt('input the new name') : undefined;
    if(confirm('¿do you want to update the price?')) data.price = Number(prompt('input the new products price'));
    if(confirm('¿do you want to update the category?')) data.category = prompt('input the new products category');
    editProduct(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error));
}




while(confirm('do you want to update a product?')){
    const data = {
        id: prompt('input the id', 'Mic330'),
        name: prompt('input the name', 'Mac mini'),
        price: prompt('input the price', '600'),
        category: prompt('input the category', 'thecnology'),
    }
    saveProduct(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error));
}

const SaveUser = async(data)  =>{
    const url = new URL("https://67e689e66530dbd311106656.mockapi.io")
    url.pathname = '/users'
    const header = 
}

while(confirm('do you wanna input a data?')){
    const data = {
        name: prompt('input the username', 'esteban'),
        last:prompt('input the last name', 'chacon')
    }
    saveUser(data)
    .then(result => alert(JSON.stringify(result)))
    .catch(error => alert(error));
}