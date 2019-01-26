// CODE here for your Lambda Classes

class Person {
  constructor(basics){
    this.name = basics.name;
    this.age  = basics.age ;
    this.location = basics.location;
    this.gender= basics.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}. I am ${this.age} years old and live in ${this.location}`;
  }
};



class Instructor  extends Person {
  constructor(skills){
    super(skills);
    this.specialty = skills.specialty;
    this.favLanguage= skills.favLanguage;
    this.catchPhrase= skills.catchPhrase;
    //demo
    this.subject = skills.subject;
    
  }
  demo() {
    return `Today we are learning about ${this.subject}.`;
  }

  grade() {
    return `${this.name} receives a perfect score on ${this.subject}.`;
  }
};



class Student extends Person {
  constructor(noobs){
    super(noobs);
    this.previousBackground = noobs.previousBackground;
    this.className = noobs.className;
    this.subject = noobs.subject;
    this.favSubjects= noobs.favSubjects;//array
    
  }
  listsSubjects() {
    this.favSubjects.forEach(function(favSubject) {
      console.log(favSubject);
    })
  }

  PRAssignment() {
    return `${this.name} has submitted a PR for ${this.subject}.`;
  }

  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${this.subject}.`;
  }
};



class PManager extends Instructor {
  constructor(pm){
    super(pm);
    this.gradClassName = pm.gradClassName;
    this.favInstructor= pm.favInstructor;
    this.channel = pm.channel;
  }
  standUp() {
  return `${this.name} announces to  ${this.channel}, @channel standy times!.`;
}

debugsCode() {
  return `${this.name} debugs  ${bambam.name}'s code on ${this.subject}`;
}
};



const fred = new PManager({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `WIIIILLLMMMMMMAAAAAA`,
  subject: 'Graphic Design',
  previousBackground: 'programming tutor',
 
  
  channel: 'cohort4',
  
});

const wilma = new Instructor({
  name: 'Wilma',
  location: 'Bedrock',
  age: 35,
  gender: 'female',
  favLanguage: 'CSS',
  specialty: 'back-end',
  catchPhrase: `Stop, Fred`,
  subject: 'UI/UX Design',
});

const bambam = new Student({
  name: 'BamBam',
  location: 'Bedrock',
  age: 5,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Bam-Bam!!`,
  favSubjects: ['CSS', 'HTML', 'JAVASCRIPT'],
  className:'webpt4',
  subject: 'Javascript',
});

// console.log(fred.className);
console.log(fred.name);
console.log(wilma.demo());
console.log(wilma.grade());
console.log(bambam.listsSubjects());
console.log(bambam.PRAssignment());
console.log(bambam.sprintChallenge());
console.log(fred.standUp());
console.log(fred.debugsCode());