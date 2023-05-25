function cutString(str, n) {
    const result = [];
    for (let i = 0; i < str.length; i += n) {
        result.push(str.substr(i, n));
    }
    return result;
}

document.write(cutString('насолода', 3));