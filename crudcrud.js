async function CreateCrudCrud() {
  try {
    const res = await fetch(
      'https://crudcrud.com/api/122799334181482a844babfdc99814d4/students',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Defryan',
          address: 'Bogor',
          birthDate: '2025-01-01',
        }), // Mengubah object JS, menjadi JSON,
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

CreateCrudCrud();



// email: defryan.purwadhika@gmail.com