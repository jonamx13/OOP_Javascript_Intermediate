const jona = {
    name: 'Jonathan',
    age: 18,
    approvedCourses: ['Course 1'],
    addCourse(newCourse) {
        console.log('This', this);
        console.log('This.approvedCourse', this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

Object.seal(jona); //? Locks deleting (configurable)
// Object.freeze(jona); //? Locks deleting and editing (configurable & writable)

console.log(Object.getOwnPropertyDescriptors(jona));

/*  enumerable: //? If this property is shown up during enumeration
    writable: //? if this property can be edited
    configurable: //? If this property can be deletable
*/

// console.log(Object.keys(jona));
// console.log(Object.getOwnPropertyNames(jona));
// console.log(Object.entries(jona));

    ///  .defineProperty(1,2,3) ///

    //* 1st argument: Object to select 
    //! 2nd argument: name of property 
    //? 3rd argument: {properties}
    
/* Object.defineProperty(jona, 'navigator', {
    value: 'Chrome',
    enumerable: false,
    writable: true,
    configurable: true,
});

Object.defineProperty(jona, 'editor', {
    value: 'VSCode',
    enumerable: true,
    writable: false,
    configurable: true,
});

Object.defineProperty(jona, 'terminal', {
    value: 'WSL',
    enumerable: true,
    writable: true,
    configurable: false,
});

Object.defineProperty(jona, 'nasaTest', {
    value: 'Aliens',
    enumerable: false,
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(jona)); */