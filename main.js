
function isObject(subject) {
    return typeof subject == 'object';
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) { 
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    } 

    return copySubject;
}

// const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         twitter: undefined,
//         instagram: undefined,
//         facebook: undefined,
//     },
// };

function requiredParam(param) {
    throw new Error(`${param} is required`);
}

function createStudent({ // RORO (Receive Object - Return Object)
    name = requiredParam('name'),
    email = requiredParam('email'),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) { // By default we are getting an empty object
    const private = {
        '_name': name,
    };

    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },

        readName() {
            return private['_name'];
        },
        changeName(newName) {
            private['_name'] = newName;
        },
    };

    Object.defineProperties(public, {
        readName: {
            configurable: false,
            writable: false,
        },
        changeName: {
            configurable: false,
            writable: false,
        },
    });

    return public;
}

// Factory Pattern
const jona = createStudent({ email: 'jona@than', name: 'Jonathan' });