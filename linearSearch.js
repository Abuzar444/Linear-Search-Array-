const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i
        }
    }
    return -1;
}

console.log(linearSearch([1, 3, 4, 6], 6));
//The final answer should be 3 because our key mached at the last index which is 3