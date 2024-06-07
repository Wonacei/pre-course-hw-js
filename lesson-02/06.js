let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
function coppyObj(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof (obj[key]) == "object") {
            newObj[key] = coppyObj(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}
let passportWithAddress2 = coppyObj(passportWithAddress);
passportWithAddress2.address.city = "Bobryisk"

console.log(passportWithAddress.address.city)
console.log(passportWithAddress2.address.city)