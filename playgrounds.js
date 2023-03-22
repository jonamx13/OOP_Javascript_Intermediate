/*
    ?With the given object
    * Create a function that applies Object.freeze
    * to every nested object recursively
    * thereby actually achieve blocking the whole object.
    * 
    * This is commonly known as //! deepFreeze.


*/

const jonaPlayGRDS = {
    name: "Jonathan",
    approvedCourses: ['Course 1','Course 2'],
    characteristics: {
      age: 18,
      hairColor: 'Red',
      gustos: {
        music: ['metal', 'videogames sountracks', 'movies soundtracks'],
        movies: ['drama', 'horror', 'comedia'],
      },
    },
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
  };

  function deepFreeze(obj) {
    if (typeof obj != 'object') return obj;

    Object.freeze(obj);

    for(key in obj) {
        deepFreeze(obj[key]);
    }

    return obj;

  }