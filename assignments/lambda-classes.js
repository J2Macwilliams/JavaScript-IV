// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}.`
    }
}//closes the Person

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
    score(student){
        let random_sign = -1 + Math.round(Math.random()) * 2;  
         let result = ((random_sign * 1) * (Math.floor(Math.random() * 10)));
         return student.grade = (student.grade + result);
         
    }
    graduate(student){
        if (student.grade > 69){
            return `${student.name} is ${student.grade}% , let them graduate!`
        }else{
           return `${student.name} is below passing. Continue to study.`
        }
    }
}//closes the Instructor

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs)
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    prAssignmnet(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
}//closes the Student

class Project_Manager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}//closes the Project_Manager

//Instructors
const marty = new Instructor({
    name: 'Marty',
    location: 'Hill Valley',
    age: 17,
    specialty: 'Problem-Solving',
    favLanguage: 'English' ,
    catchPhrase: 'Nobody Calls ME CHICKEN!!!'
})

const doc = new Instructor({
    name: 'Doc Brown',
    location: 'Hill Valley',
    age: '??',
    specialty: ['React', 'Python','Ruby on Rails', 'Dos'],
    favLanguage: 'My own Creation',
    catchPhrase: "I've got to go Back to the Future!"
})

const george = new Instructor({
    name: 'George Jetson',
    location: 'Orbit City',
    age: '40',
    specialty: 'Referential Universal Digital Indexer',
    favLanguage: 'HTML',
    catchPhrase: "Hooba-dooba-dooba!"
})
//Students

const jeremy = new Student({
    name:'Jeremy',
    location: 'Bay Area',
    age: 40,
    previousBackground: 'Restaurant Hospitality',
    className:'Web24',
    favSubjects:'CSS',
    grade: 89 ,
})
const huey = new Student({
    name:'Huey',
    location: 'Duckburg',
    age: 11,
    previousBackground: 'Following Treasure Maps',
    className:'Web22',
    favSubjects:'JavaScript',
    grade: 85,
})
const dewey = new Student({
    name:'Dewey',
    location: 'Duckburg',
    age: 11,
    previousBackground: 'Feats of Strenght',
    className:'Web26',
    favSubjects:'React',
    grade: 70,
})
const louie = new Student({
    name:'Louie',
    location: 'Duckburg',
    age: 11,
    previousBackground: 'Stand-Up',
    className:'Web23',
    favSubjects:'JavaScript',
    grade: 73,
})

//Project Managers
const fred = new Project_Manager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Yabba Dabba Doo!`,
    gradClassName: 'Stone-Age 570',
    favInstructor: 'Barney Rubble'
  });

  const wilma = new Project_Manager({
    name: 'Wilma',
    location: 'Bedrock',
    age: 33,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Don't Drop the Dino Egg!!!!`,
    gradClassName: 'Stone-Age 567',
    favInstructor: 'Doc Brown'
  });



  
  
  console.log(marty.demo('English'));
  console.log(doc.grade(huey, 'Javascript'));
  console.log(george.catchPhrase);
  console.log(jeremy.listsSubjects());
  console.log(huey.prAssignmnet('CSS'));
  console.log(dewey.sprintChallenge('Javascript'));
  console.log(louie.favSubjects);
  console.log(fred.debugsCode(jeremy, 'Javascript'));
  console.log(fred.catchPhrase);
  console.log(wilma.standUp('Web24_Wilma'));
  console.log(marty.score(jeremy));
  console.log(george.score(jeremy));
  console.log(doc.graduate(jeremy));
  console.log(marty.score(huey));
  console.log(george.score(dewey));
  console.log(doc.graduate(dewey));
  console.log(george.score(louie));
  console.log(marty.graduate(louie));

