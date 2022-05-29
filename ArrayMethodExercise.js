//double values

function doubleValues(arr) {
    let newArr = []

    arr.forEach(function(val) {
        newArr.push(val * 2);
    });
    return newArr;
}

// only even values

function onlyEvenValues(arr) {
    let newArr = []

    arr.ForEach(function(val) {
        if (val % 2 == 0) {
            newArr.push(val)
        }
    });

    return newArr;
}

// show first and last

function showFirstAndLast(arr) {
    let newArr = []

    arr.ForEach(function(string) {
        newArr.push(string[0])
        newArr.push(string[length(string)]-1)
    });

    return newArr;
}

// add key and value

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(name) {
        name[key] = value
    })
    
    return arr;
}

// count vowels

function vowelCount(string) {

    let startArr = string.split("");
    let obj = {};
    const vowels = "aeiou";

    startArr.forEach(function(char) {
        let lowercasechar = char.toLowerCase()
        if (vowels.indexOf(lowercasechar) !== -1) {
            if (obj[lowercasechar]) {
                obj[lowercasechar] ++;
            }
            else {
                obj[lowercasechar] = 1;
            }
        }
    });
    return obj;
}

// doubling with map

function doubleValuesWithMap(arr) {
    return arr.map(function(val){
        return val * 2;
    });
}

// return value * index with map

function valTimesIndex(arr) {
    return arr.map(function(value, index) {
        return value * index;
    });
}


// extract key with map

function extractKey(obj, key) {
    return obj.map(function(value) {
        return value[key];
    });
}

// extract full name

function extractFullName(obj) {
    return obj.map(function(value) {
        return value.first + " " + value.last;
    });
}

// filter by value

function filterByValue(obj, key) {
    return obj.filter(function(name) {
        return name[key] !== undefined;
    });
}

// find

function find(arr, value) {
    return arr.filter(function(number) {
        return number === value;
    });

}

// find in Obj

function findInObj(arr, key, searchValue) {
    return arr.filter(function(person) {
        return person[key] == searchValue;
    });
}

// remove Vowels

function removeVowels(string) {
    let newArr = string.split("");
    let vowels = "aeiou"
    return newArr.toLowerCase().filter(function(char) {
        return vowels.indexOf(char) === -1;
    });
}

// double Odd Numbers

function doubleOddNumbers(arr) {
    return arr
    .filter(function(value) {
        return value % 2 !== 0;
    })

    .map(function(va) {
        return val * 2;
    });
}