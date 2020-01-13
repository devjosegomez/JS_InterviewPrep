/*currying functions

Currying refers to the process of transforming a function with multiple arity into the same function 
with less arity. The curried effect is achieved by binding some of the arguments to the first function invoke,
 so that those values are fixed for the next invocation.

*/
function tripleAddCurrying(n1){
    return function(n2){
        return function(n3){
            return n1 + n2 + n3
        }
    }
}


function tripleAdd(n1, n2, n3){
    return n1 + n2 + n3
}

console.log(tripleAddCurrying(10)(20)(30))
console.log(tripleAdd(10, 20, 30))