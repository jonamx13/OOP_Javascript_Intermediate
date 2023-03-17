const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    edithA() {
        this.a = 'AAAA';
    }
};

//JSON.parse & JSON.stringify
const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);

// it doesn't work with methods