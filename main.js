
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


function requiredParam(param) {
    throw new Error(`${param} is required`);
}

function createLearningPath({
    name = requiredParam('name'),
    courses = [],
    
}) {
    const private = {
        '_name': name,
        '_courses': courses,

    };

    const public = {
        get name() {
            return private['_name'];
        },

        set name(newName) {
            if (newName.length != 0) {
                private['_name'] = newName;
            } else {
                console.warn('Your name must have at least 1 character')
            }
        },

        get courses() {
            return private['_courses'];
        }
    };

    return public;
};

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
        '_learningPaths': learningPaths,
    };

    const public = {
        email,
        age,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },

        get name() {
            return private['_name'];
        },
        set name(newName) {
            if (newName.length != 0) {
                private['_name'] = newName;
            } else {
                console.warn('Your name must have at least 1 character')
            }
        },

        get learningPaths() {
            return private['_learningPaths'];
        },
        set learningPaths(newLP) {
            if(!newLP.name) {
                console.warn('Your new LP has not a \"name\" property');
                return;
            }

            if(!newLP.courses) {
                console.warn('Your new LP has no courses');
                return;
            }

            if(!isArray(newLP.courses)) {
                console.warn('Your new LP is not a courses list');
                return;
            }

            private['_learningPaths'].push(newLP);
        },
    };



    return public;
}

// Factory Pattern
const jona = createStudent({ email: 'jona@than', name: 'Jonathan' });