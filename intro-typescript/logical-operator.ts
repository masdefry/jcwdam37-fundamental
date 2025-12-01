/*
    LOGICAL OPERATOR

    AND (&&)
    - Apabila salah 1 kondisi bernilai false, hasil akhir akan bernilai false
    - Apabila ingin hasil akhir bernilai true, maka seluruh kondisi harus bernilai true

    OR (||)
    - Apabila salah 1 kondisi bernilai true, hasil akhir akan bernilai true
    - Apabila ingin hasil akhir bernilai false, maka seluruh kondisi harus bernilai false

    NOT (!)
    - Negasi/kebalikan dari suatu nilai
*/

// AND 
if(100 === 1000 && 500 === '500'){ // FALSE && FALSE > FALSE
    console.log('true');
}

if('BCA' === 'bca' && 1000 === 1000){ // FALSE && TRUE > FALSE
    console.log('true');
}

if(1000 === 1000 && 100 == '100' && 'bca' === 'BCA'.toLowerCase()){ // TRUE && TRUE && TRUE > TRUE
    console.log('true');
}



// OR 
if(100 === 1000 || 500 === '500'){ // FALSE || FALSE > FALSE
    console.log('true');
}

if('BCA' === 'bca' || 1000 === 1000){ // FALSE || TRUE > TRUE
    console.log('true');
}

if(1000 === 1000 || 100 == '100' || 'bca' === 'BCA'.toLowerCase()){ // TRUE > TRUE 
    console.log('true');
}



// NOT 
if(!(100 === 1000)){ // !FALSE > TRUE
    console.log('true');
}

if(!(1000 === 1000)){ // !TRUE > FALSE
    console.log('true');
}

if(!(1000 === 1000 && 100 === 1000) && !('abc' !== 'ABC')){ // TRUE && FALSE > FALSE
    console.log('true');
}