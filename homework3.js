function pow(a, b) {
    let result = 1;
    let isNegative = b < 0;
    if (b < 0) { b = Math.abs(b)};
    for (let i = 0; i < b; i++) {
        result = result * a;
    }
    
   if (isNegative) {
    return 1 / result;
} else {
    return result;
}
}
console.log(pow(5, -6));
