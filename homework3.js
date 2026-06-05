function pow(a, b) {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result = result * a;
    }

    return result; 
}

console.log(pow(6, 7));
