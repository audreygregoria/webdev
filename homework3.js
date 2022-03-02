// Q1: Function This
function max(iterable, key) {
    var maximum = max(abs(iterable));
    for (var item in iter) {
      var val = key(item);
      if (val >= maximum) {
        maximum = item;
      }
    }
    return maximum;
}

// Q2: Flip It and Reverse It
const reverser = function(x) {
    return -1 * x;
};

// Q4: Objects Gworl
// Testing Objects (JSON), Arrays, and Object Properties
function changer(object, key, value) {
    let prev = object[key];
    if (Array.isArray(prev)) {
        object.append(value) // not sure whether we can just add the value to the object or whether it would be object[value].append(value)
    } else if ((typeof(prev) == 'object') && (prev != null)) {
        // what to do if value is a JSON object
        object.key = value; 
    } else {
        object[key] = value; // not sure whether correct
    }
    return null
}

// Q5: Promises Promises
// Testing asynchronous, promises, 
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1); 
        resolve(5)// use this line to resolve the value that we will need later
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = await a;
    console.log(five)
    return five
}

promise_me()