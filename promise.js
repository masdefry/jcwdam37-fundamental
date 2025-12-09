const products = ['Indomie'];

function DeleteProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        products.pop();
        resolve('Product successfully deleted');
      } else {
        reject('Product failed to delete');
      }
    }, 4000);
  });
}

function ReadProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        resolve(products);
      } else {
        reject('Products is empty');
      }
    }, 2000);
  });
}

// function main() {
//   DeleteProduct()
//     .then((res) => {
//       return DeleteProduct();
//     })
//     .then((res) => {
//       return DeleteProduct();
//     })
//     .then((res) => {
//       return ReadProduct();
//     })
//     .then((res) => {})
//     .catch((err) => {})
//     .catch((err) => {
//       console.log(err);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .catch((err) => {
//       console.log('.catch');
//       console.log(err);
//     });
// }

// main();

async function Main() {
  try {
    const res = await DeleteProduct();
    console.log(res);
    const res1 = await DeleteProduct();
    console.log('res1', res1);
    const res2 = await DeleteProduct();
    console.log('res2', res2);
    const res3 = await ReadProduct();
    console.log('res3', res3);
  } catch (error) {
    console.log(error);
  }
}

// Main();

/*
    Lakukan riset mengenai function fetch di Javascript. 
    Dan lakukan read data posts ke URL server berikut:
    https://jsonplaceholder.typicode.com/posts
*/

async function FetchData() {
  try {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsJSON = await posts.json(); // Proses untuk mendapatkan data dari response server
    console.log(postsJSON);
  } catch (error) {
    console.log(error);
  }
}

FetchData();
