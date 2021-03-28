// typeof comparisons to verify correct input
typecheck() = (param) => {
    console.log(typeof param === Number)
}
// Unsafe functions
// eval(), function constructor, setTimeout
// eval has access to the entire scope

// TO stop prototype pollution the object.prototype can be frozen with Object.freeze()