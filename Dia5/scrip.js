var data=[
    {
    "products": [
      {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 999.99,
        "quantityInStock": 50,
        "supplierId": 101
      }
    ],
    "suppliers": [
      {
        "id": 101,
        "name": "Tech Supplies Inc.",
        "contactInfo": {
          "phone": "123-456-7890",
          "email": "sales@techsupplies.com",
          "address": "123 Tech Lane, Silicon Valley, CA"
        }
      }
    ],
    "orders": [
      {
        "orderId": 1001,
        "productId": 1,
        "quantity": 5,
        "orderDate": "2024-08-23",
        "status": "Delivered"
      }
    ]
  }
]
//Menu Principal
var Opcion1=prompt("1).Gestion de productos\n2).Gestión de proveedores")//---------------------------fantan crud----------------------------------------
if (Opcion1==1){
    //Gestion de productos
    var Opcion2=prompt("--------------------\nGestion de productos\n--------------------\n1).Crear\n2).Leer\n3).Actualizar\n4).Borrar")
    //- **Crear**: Implementar una función `addProduct(product)` que añada un nuevo producto al inventario.
    if (Opcion2==1){
        function addProduct(){
            var nueIdProd=prompt("Ingresa el ID del producto nuevo")
            var nueNomProd=prompt("Ingresa el nombre del producto nuevo")
            var nuecatProd=prompt("Ingresa la categoria del producto nuevo")
            var nuePreProd=prompt("Ingresa el precio del producto nuevo")
        }
    }
}
//- **Leer**: Implementar una función `viewProducts()` que devuelva todos los productos del inventario.
//- Actualizar**: Implementar una función `updateProduct(id, newDetails)` que actualice los detalles de un producto por su ID.
//- Borrar**: Implementa una función `deleteProduct(id)` que elimina un producto del inventario.