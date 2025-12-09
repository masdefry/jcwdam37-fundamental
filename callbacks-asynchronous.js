const products = ['Indomie', 'Mie Sedap', 'Sarimi'];

function DeleteProduct() {
  setTimeout(() => {
    products.pop();
  }, 4000);
}

function ReadProduct() {
  setTimeout(() => {
    console.log(products);
  }, 2000);
}

// Setelah delete product berhasil, saya ingin menampilkan data product terbarunya
DeleteProduct();
ReadProduct();

{
  function DeleteProduct(cb) {
    setTimeout(() => {
      products.pop();
      cb();
    }, 4000);
  }

  function ReadProduct() {
    setTimeout(() => {
      console.log(products);
    }, 2000);
  }

  // Setelah delete product berhasil, saya ingin menampilkan data product terbarunya
  DeleteProduct(DeleteProduct(DeleteProduct(ReadProduct)));
}
