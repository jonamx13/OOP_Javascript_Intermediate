
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

function SuperObject() {}

SuperObject.isObject = function (subject) {
        return typeof subject == 'object';
}
SuperObject.deepCopy = function (subject) {
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

function LearningPath({
    name = requiredParam('name'),
    courses = [],
    
}) {

    this.name = name;
    this.courses = courses;
};

function Student({ // RORO (Receive Object - Return Object)
    name = requiredParam('name'),
    email = requiredParam('email'),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) { // By default we are getting an empty object
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    const private = {
        '_learningPaths': [],
    }

    Object.defineProperty(this, 'learningPaths', {
        get() {
            return private['_learningPaths'];
        },
        set(newLP) {
            if(newLP instanceof LearningPath) {
                private['_learningPaths'].push(newLP);
            } else {
                console.warn('Some of the LP\'s are not an instance of the prototype LearningPath');
            }
        },
    });


    for (learningPathIndex in learningPaths) {
        this.learningPaths = learningPaths[learningPathIndex];
    }
}


// Factory Pattern
const webDevSchool = new LearningPath({ name: 'Web Development School', courses: []});
const dataScienceSchool = new LearningPath({ name: 'Data Science School', courses: []});

const jona = new Student({ 
    email: 'jona@than.com',
    name: 'Jonathan',
    learningPaths: [
        webDevSchool,
        dataScienceSchool,
        {
            name: 'fakeSchool',
            courses: [],
        }
    ]
});