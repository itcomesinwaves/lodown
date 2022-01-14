'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identity: function that takes in a parmaeter of a value and then returns that same value unchanged. 
 * @param {any value} : Takes in a parameter of any value and returns that value unchanged 
 * @returns {value} : returns the input value unchanged
 */


function identity(value) {
    return value; 
}

module.exports.identity = identity

/**
 * typeof: function that takes in a value as it's parameter then checks that value to see if it is a string. If so then it will return  "string".  
 * If not it will check if value is an array, if so then it will return  "array". If not it will check if the value is undefined, if so then it will return "undefined"
 * If not it will check if the value is a number,if so then it will return "number". If not it will check to see if value is a boolean,  if so then it will return "boolean".
 * If not then it will check if value is null, if so then it will return "null". If not it check if the value is a function, if so then it will return "function".
 * If not then it will check if value is an object, if so then it will return "object". Then the function body concludes. 
 * @param {value} any : Takes in a parameter of any value 
 * @returns {type of value} : Returns the data type of value that is being passed in, as a string.
 */
 function typeOf(value) {   
    if (typeof value === 'string') { 
        return "string";   
    } else if (Array.isArray(value)) { 
        return "array";  
    } else if (value === undefined) { 
        return "undefined"; 
    } else if (typeof value === 'number') { 
        return "number"; 
    } else if (typeof value ===  'boolean') { 
        return "boolean";
    } else if (value === null) {
        return "null";
    } else if (typeof value === 'function') {
        return "function";
    } else if (typeof value === 'object') { 
        return "object"; 
    }
}

module.exports.typeOf = typeOf 

/**
 * first: function that takes in an array and a number, at the beginning of the functions scope, there is a variable declaration to be used as a 'flag variable'
 * to implement as the return statement later on. The code then proceeds to check if the number being passed in is a number data type or not and if it is NOT, then
 * the flag variable is assigned to the first element of the array being passed in. Then if the the nubmer being passed in is a number data type, the code will then check
 * to see if number is less than or equal to any of the elements within the array, and if so the flag variable is then assigned to the value of the array with the 
 * slice method enacted on it so that it takes out any greater than or  matching elements of the number that is being passed into the function. Then if that last check wasn't able to pass
 * then the next line will check to see if the number being passed in is greater than any of the elements within the array, and if so then the flag variable is assigned 
 * to the value of the array being passed in. If any of those checks fail, the code will then check to see if the number being passed in is a negative number or if the array
 * being passed in is an array data type, and if either of those conditions are true than the flag variable is assigned to the value of an empty array. Then at the end of the function
 * scope the flag varible will be returned based off of it's assignment. 
 * 
 * @param {Array} : This function takes in an array
 * @param {number} : This funciton will also take in a number 
 * @returns {Number or Array} : Then returns either a number or an array based off of the conditions within the function, and the arguments passed into it 
 */
 function first(array, number) { 
    let ans;  
         if (typeof number !== 'number') { 
           ans = array[0];  
        } if (number <= array.length) { 
           ans = array;  
        } if (number <= 0 || !Array.isArray(array)) { 
           ans = [];       
        }
    return ans;
    }

module.exports.first = first 


/**
 * last : This is a function that takes in a parameter of an array and a number. There is then a flag variable declared to be used as the return statement later on in the function
 * The first condition checks whether or not the data type of the number parameter is actually a number or not and if NOT it will then assign the flag variable to the value of the 
 * last element of the array being passed in. The next condition checks if the number being passed in is less than or equal to any of the elements within the array and if they are,
 * assigns the flag varible to the value of the array with the slice method enacted onto it which will take out all of the elements of the array besides the one's that are equal to 
 * the number being passed in or the last elements of the array starting from the number being passed in. The next condition checks if the number being passed in is greater than any of 
 * the elements within the array being passed in, and if so the flag variable is then assigne to the value of the array being passed in. Then for the last condtion, it will check to see
 * if the array being passed in is an array datatype OR if the number being passed in is a negative integer, and if any or either of those cases are true, than the flag variable will be
 * assinged to the value of an empty array. The function will then return the flag variable and it's current assignment based off of the arguments that are passed in after invoking the 
 * last function.
 * 
 * @param {array} : Function will take in input array.
 * @param {number} : Function will take in a number.
 * @returns {Number or Array} : Then returns either a number or an array based off of the conditions within the function, and the arguments passed into it  
 */

function last(array, number) {
    let ans; 
        if (typeof number !== 'number') {
            ans = array[array.length-1];
        } if (number <= array.length) {
            ans = array.slice(-number); 
        } if (number > array.length) {
            ans = array; 
        } if (!Array.isArray(array) || number <= 0) {
            ans = [];
        }
        
      return ans; 
    }

module.exports.last = last

/**
 * indexOf : This is a function that takes in the parameters of the an array, and a value. The function will then iterate through the array, and will then check to see if the any of the elements within the array are the same
 * as the value being passed into the function, and if that is the case, the function will then return the index of that value, yet if the value being passed is does not match any of the elements within the array then the function 
 * will return negative one. 
 * 
 * @param {array} : Function will take in an array. 
 * @param {value} : Function will take in a value
 * @returns {index, or -1} : The function will return either a negative one (if the value being passed in doesn't exist within the array being passed in) or the index of the value being passed into it. 
 */
 _.indexOf = function(array, value) {
    // return index of array that is the first occurence of the value 
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i; 
        }
    }
        return -1; 

}

module.exports.indexOf = indexOf

/**
 * contains : This is a function that takes in the parameters of an array and a value, which then iterates through the array being passed in and will check if any of the elements in the input array match the value that is being 
 * passed into the function, and if so the function returns the boolean value of true, and if there are not any matches of the value being passed in compared to any index of the array being passed in then the function will return 
 * false. 
 * @param {array, value} : Function will take in an array.
 * @param {value} : Function takes in a value
 * @returns {boolean} : The function will return a boolean value of either true or false based off of the arguments being passed in and their conditions
 */
  function contains(array, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return true;
        }
    }
    return false;
}

module.exports.contains = contains

/**
 * each: Takes in a collection which can either be an array or an object as one parameter and a function as another
 *  then it checks if the type of collection is an array, and if so the code will then iterate throught the array and perform the function being passed in, 
 * on each element within the array 
 *  If the collection being passed in is not an array the code will then see it as an object and iterate through the object instead and again would perform 
 * the function being passed in upon each property within the object.  
 * 
 * @param {collection} : Function will take in a collection (either array or object)
 * @returns {Function} : The Function to be applied to each value in the 
 * collection
 */
 function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
} 
module.exports.each = each

/**
 * unique : Function that takes in an array as it's parameter. The function starts off by making a variable declaration and assigning it to the value of an empty array.
 *  The function then iterates through the array and for each element in the array it will ivoke the indexof function (which checks takes in an array and a value and will resolve to the matching
 * values index) and will then check if that index matches any of the elemnets within the array being passed in, and if it does, the push method is enacted on the empty array to 
 * insert those matching values into it, then the function will return that new array with the new values. 
 * @param {array} : Function takes in an array. 
 * @returns {array} : Returns a new array based off of the conditions after the arguments are passed in during the function call  
 * 
 */
 function unique(array) {
    let newArr = []; 
         for (let i = 0; i < array.length; i++) {
             if (indexOf(array, array[i]) === i) {
                 newArr.push(array[i]);
             }
         }
         return newArr; 
 }
 module.exports.unique = unique

 /**
  * filter: Function that takes in an array and a function to be tested against eachother. There is a variable declaration at the beginning of the function body which assings the variabel 
  * to the value of an empty array, that will be used to return later. It then will iterate throughout each element in the array and will invoke the function that is being passed in on each 
  * element, the function resolves to truthy then it will push the values of those truthy iterations into the new array. The function will then return that array. 
  * @param {array} : Function will take in an array
  * @param {function} : Function will take in a callback function
  * @returns {array} : This function will return an array based off of the conditions resolutions after the arguments are passed in
  */
  function filter(array, func) {
    let newArray = []; 
for (let i = 0; i < array.length; i++) {
        if(func(array[i], i, array)) {
           newArray.push(array[i]); 
   }
}
return newArray; 
}
module.exports.filter = filter

/**
 * reject: This is a function that takes in an array and a function as it's parameters. There is then a variable declaration that assigns the variable to the value of an empy array. Then there is an 
 * iteration throught the passed in array and the passed in function is then tested on each element of the arrray, and if the resolution of those iterations resolve to falsey, then 
 * those elements are passed into the new array utilizing the push method, and then the function returns that new array.  
 * @param {array} : Function will take in an array. 
 * @param {function} : This function will take in a callback function
 * @returns {array} : Returns a new array based off of the resolution of the arguments passed into the function
 */
function reject(array, func) {
    let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!func(array[i], i, array)) {
                newArray.push(array[i]);
            }
        }
    return newArray;
    }
module.exports.reject = reject

/**
 * partition: This function takes in a parameter of an array and a function. Then there are three variable declarations which are assigned to empty arrays to be utilized later. One is for truthy values
 * another one for falsey values, and also a new array. The function then iterates through the input array and tests the input function on every element in the array, and then checks if the function resolves to 
 * truthy, it will then push the values of the function resolution into the truthy array. It then will check if the resolution of passing each element of the input array throught the parameters of the input function resolves to 
 * falsey, then it will push those values into the falsey array. Then outside of the loop both the falsey array and the truthey array will be pushed into the new array, and then that new array is returned containing both truthy and falsey values
 * as well as in that order. 
 * @param {array} : Function will take in an array
 * @param {function} : Function will take in a callback function
 * @returns {array} : Returns an array of the truthy values, and the falsey values in that order.
 */
 function partition(array, func) {
    let truthy = []; 
    let falsy = [];
    let newArray = []; 
            for (let i = 0; i < array.length; i++) {
                if (func(array[i], i, array)) {
                    truthy.push(array[i]);
                } else { (!func(array[i], i, array)) 
                    falsy.push(array[i]);
                }
              
            }
            newArray.push(truthy, falsy);
            return newArray;        
    }
module.exports.partition = partition

/**
 * map: Function that takes in a collection (array or object), and a function as it's parameters. There is a variable declaration that assignes the variable to the value of an empty array. Then the function checks to see if the the collection being passed in is an array
 * and then it will iterate through the array, and push the resolution of the function acting on each element of the array into the output array. If either beginning conditions isn't true for the first
 * blocks of code then the collection will be seen as an object and then iterate accordingly, and will store the resolution of the callback function acting on the properties of the object into a result variable
 * and then it will push that result into the output array. The output array is then returned based off of the arguments passed into the function.  
 * @param {collection} : Function will take in a collection (either an array or object)
 * @param {function} : Function will take in a callback function 
 * @returns {array} : This function will return an array with the resolved values of the callback function contained within. 
 */
 _.map = function(collection, func) {
    var outputArr = [];
    if (Array.isArray(collection)) {
       if (typeof func === 'string') {
            for (var i = 0; i < collection.length; i++) {
                outputArr.push(collection[i][func]); 
            }
        } else {
            for (var i = 0; i < collection.length; i++) {
                var result = func(collection[i], i, collection);
                outputArr.push(result);
        }
    }

    } else {
        for (var key in collection) {
            var result = func(collection[key], key, collection); 
            outputArr.push(result); 
        }
    }
return outputArr; 
}
module.exports.map = map

/**
 * pluck: This function takes in an array and a property as it's parameters and calls the map function on those parameters in the return statement, which will then return the current property that is 
 * being checked from the map function based off of the value being passed into the prop parameter. 
 * @param {array} : Function will take in an array 
 * @param {property} : Function will take in a property 
 * @returns {value} : This function returns the element or value that is found in the array or collection that it is checking.
 */
 function pluck(array, prop) {
    return map(array, function(current) {
        return current[prop];
        
    });   
}
module.exports.pluck = pluck

/**
 * every: This function takes in a collection that will either be an array or an object, and a fucntion that it will test on the elements or properties of the collection as it's parameters. It then declares a boolean flag 
 * variable and assigns it to the value of true. The function will then check if the collection is an array or not, and if so it will make sure that the function being passed in is a function(incase there wasn't on passed in) and 
 * if so the the function will iterate through the array and will perform the callback function on the elements of the array and if the resolution of the callback function resolves to a falsy statement, then the flag variable is 
 * reassigned to false, and then breaks out of the loop since we found our first falsey resolution. If the the collection is an array but there isn't a function provided then then a different iteration proceeds and will check to see 
 * if the elements relsolve to a falsey statement and if so the flag variable is then re assigned to the value of false as well. Then if the collection isn't an array it will be an object so it proceeds to again check if the function exists
 * and if so will iterate through the object and execute the callback function on every property thorughout the iteration, which will then check to see if the resolution of that callback function resolves to a falsey statement, and if so 
 * will reassigne the flag variable to false, and then will break out of the loop at the first falsey scenerio. Then if there isn't a callback function the fucntion will then check if the any values in the collection resolves to a falsey 
 * statement, and if so it will reassigne the flag variable to false. The function will then return the the flag variable which will be either true or false based off of the arguments passed into the function invocation. 
 * @param {collection} : Function will take in a collection (either an object or array) 
 * @param {function} : Function will take in a callback function 
 * @returns {boolean} : This function returns a boolean value of either true or false based off of the arguments passed into the parameters during the functions invocation. 
 */
 function every(collection, func) {
    let boolyBoi = true; 
        if (Array.isArray(collection)) {
            if (typeof func === 'function') {
               for (var i = 0; i < collection.length; i++) {
                   if (!func(collection[i], i, collection)) {
                       boolyBoi = false; 
                        break;
                    }
               }
           } else if (typeof func === 'undefined') {
                for (let i = 0; i < collection.length; i++) {    
                    if (!collection[i]) {
                        boolyBoi = false; 
                        break;
                    }
                }
            }
       } else if (typeof collection === 'object') {
           if (typeof func === 'function') {
               for (var key in collection) {
                   if (!func(collection[key], key, collection)) {
                       boolyBoi = false;
                        break; 
                   }
                }
            } if (typeof func === null) {
                    if(!collection) {
                        boolyBoi = false;
                    }
            }
        }   
        return boolyBoi;
    }
    module.exports.every = every

    /**
     * some: This function takes in a collection that will either be an object or an array, and function that will be executed of the properties or elements of the collection, as its parameters. This function will then make a variable declaration and 
     * assign it to the value of false. The function will then check if the collection being passed in is an array, and will also check if there is a function being passed in, and if so it will iterate through the passed in array and will invoke the callback
     * function on every elemnet of the array, and will check to see if the callback function resolution will resolve to a truthy statement, and if so it will reassigne the flag variable to true. Then if the collection is an array but the function doesn't exist, 
     * then it will then iterate throught the array and if any of the arrays elements resolve to a truthy statement, then the flag variable will be reassigned to true. Then if collection is an object and the function exists, the code will then iterate through
     * the object and enact the callback function on all of the objects properties, and then it will check to see if the any of the callback functions resolutions after being enacted on those properties is true, it will then reassigne the flag variable to true.
     * If the collection is an object but there isn't a function being passed in then it will see if any of the objects properties resolve to a truthey statement and if so the flag variable will be reassigned to true. The some function will then return the flag 
     * variable which will be a boolean value. 
     * @param {collection} : Function will take in a collection (either object or array)  
     * @param {function} : Function will take in a callback function
     * @returns {boolean} : This function will return either true or false based off of the arguments passed into the parameters after being invoked. 
     */
     function some(collection, func) {
        let boolyboi = false; 
         if (Array.isArray(collection)) {
             if (typeof func === 'function') {   
                 for (let i = 0; i < collection.length; i++) {
                     if (func(collection[i], i, collection)) {
                         boolyboi = true; 
                         
                     }
                 }
             } else if (typeof func === 'undefined') {
                 for (var i = 0; i < collection.length; i++) {
                     if (collection[i]) {
                         boolyboi = true; 
                 
                     }
                 }
             }
         } else if (typeof collection === 'object') {
             if (typeof func === 'function') {
                 for (let key in collection) {
                     if (func(collection[key], key, collection)) {
                         boolyboi = true; 
                         
                     }
                 }
             } else if (typeof func === null) {
                 if (collection[key]) {
                     boolyboi = true; 
                 }
             }
         }
         return boolyboi;
     }
     module.exports.some = some

     /**
      * reduce: This function will take in an array, a function, and a seed (optional), as it's parameters. It will first check to see if an argument was passed into the seed parameter, and if so the seed will be assigned to the first element within the 
      * the passed in array. It will then iterate through the array, and reassigne the value of the seed to the value of the function being enacted on the the elements of the array as well as the seed. If there was not a seed passed into the reduce function, it 
      * will then iterate through the array and will still assigne the value of seed to the value of the callback functions resolution. The reduce function will then return the value of seed which can be either an array, an object, a string, or a number. 
      * 
      * @param {array} : Function will take in an array
      * @param {function} : Function will take in a callback function 
      * @param {seed} : Function will take in a seed 
      * @returns {value} : This function will return any value depending on the seeds value after the functions resolution. 
      */
     function reduce(array, func, seed) {
        if (seed === undefined) {
            seed = array[0];
                for (let i = 1; i < array.length; i++) {
                    seed = func(seed, array[i], i);
                }
        } else {
            for (let i = 0; i < array.length; i++) {
                seed = func(seed, array[i], i);
            }
        }
        return seed;   
    }
    module.exports.reduce = reduce

    /**
     * extend: This function takes in objects (an optional amount as noted with the spread operator), as it's parameter(s). There is a flag variable that will assign it to the value of the first index of the array of objects (array exists because of the spread operator) 
     * it wil then iterate throughout the array of objects to acsess the objects and then will iterate through each object passed in to acsess it's key/value pairs and will assign the properties of the ne objects to the orginal object assignment. The function will then return 
     * the flag variable which will be an object containing all of the key/value pairs of any object passed into the function. 
     * @param {object} : Function will take in an object 
     * @param {objects} : Function will take in an x amount of more objects 
     * @returns {object} : This function will return one object containing all of the properties of any other object passed into the function. 
     */
     function extend(...others) { 
        let didlydo = others[0] 
        for (let i = 1; i < others.length; i++) {
             for (var key in others[i]) {
                didlydo[key] = others[i][key];
             }
         }
        return didlydo; 
    }
    module.exports.extend = extend