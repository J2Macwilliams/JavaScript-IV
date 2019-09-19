// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.newName = attributes.name,
        this.newAge = attributes.age,
        this.newLocation = attributes.location
    }
    speak(){
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}.`
    }
}//closes the Person

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.newSpecialty = instructorAttrs.specialty;
        this.newFavLanguage = instructorAttrs.favLanguage;
        this.newCatchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about {subject}.`
    }
    grade(student_name, subject){
        return `{student_name} receives a perfect score on {subject}.`
    }
}//closes the Instructor

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs)
        this.newPreviousBackground = studentAttrs.previousBackground;
        this.newClassName = studentAttrs.className;
        this.newFavSubjects = studentAttrs.favSubjects;
    }
    listsSubjects(){
        return console.log(this.newFavSubjects);
    }
    prAssignmnet(subject){
        return `student.name has submitted a PR for {subject}.`
    }
    sprintChallenge(subject){
        return `student.name has submitted a PR for {subject}.`
    }
}//closes the Student

class Project_Manager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.newGradClassName = pmAttrs.gradClassName;
        this.newFavInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        return `{this.newName} announces to {channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student.name, subject){
        returns `${this.newName} debugs {student.name}'s code on {subject}.`;
    }
}//closes the Project_Manager
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred.location);