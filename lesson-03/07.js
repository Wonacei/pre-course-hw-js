const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];


for (let item of numbers) {
    for (let i = 0; i < item.length; i++) {
        if (item[i] % 2 !== 0) {
            item.splice(i, 1)
            i--
        }
    }
}
console.log(numbers)