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

// console.log(Object.keys(jona));
// console.log(Object.getOwnPropertyNames(jona));
// console.log(Object.entries(jona));

console.log(Object.getOwnPropertyDescriptors(jona));

Object.defineProperty(jona, 'nasaTest', {
    value: 'Aliens',
    enumerable: true,
    writable: true,
    configurable: true,

})