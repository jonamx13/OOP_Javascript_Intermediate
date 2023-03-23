const testObj1 = {
    name: 'Jhonny',
    lastNames: {
        first: 'Olivas',
        second: 'Meixueiro',
    },
    age: 28,
    limbs: ['rightArm', 'leftArm', 'rightLeg', 'leftLeg'],

    birthday() {
        this.age += 1;
    }
};

function deepCopy2(testObj) {

    if(typeof testObj !== 'object' || testObj === null)
        return testObj;

    const copyObj = Array.isArray(testObj) ? [] : {};

    
    for (let key in testObj) {
        
        copyObj[key] = deepCopy2(testObj[key])
    }

    return Object.freeze(copyObj);
}