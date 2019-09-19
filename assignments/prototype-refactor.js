/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
=== GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(attrs){
//     this.createdAt = attrs.createdAt;
//     this.name = attrs.name;
//     this.dimensions = attrs.dimensions;
//     };
    
//     GameObject.prototype.destroy = function(){
//       return `${this.name} was removed from the game.`;
//     }
    
    
    /*
      === CharacterStats ===
      * healthPoints
      * takeDamage() // prototype method -> returns the string '<object name> took damage.'
      * should inherit destroy() from GameObject's prototype
    */
    
    // function CharacterStats(stats) {
    //   GameObject.call(this, stats); 
    //   this.healthPoints = stats.healthPoints;
    // }
    
    
    // CharacterStats.prototype = Object.create(GameObject.prototype);
    
    // CharacterStats.prototype.takeDamage = function(){
    //   return `${this.name} took damage.`;
    // }
    
    
    /*
      === Humanoid (Having an appearance or character resembling that of a human.) ===
      * team
      * weapons
      * language
      * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
      * should inherit destroy() from GameObject through CharacterStats
      * should inherit takeDamage() from CharacterStats
    */
    
    
    // function Humanoid(quest) {
    //   CharacterStats.call(this, quest); 
    //   this.team = quest.team;
    //   this.weapons = quest.weapons;
    //   this.language = quest.language;
    // }
    
    // Humanoid.prototype = Object.create(CharacterStats.prototype);
    
    
    // Humanoid.prototype.greet = function(){
    //   return `${this.name} offers a greeting in ${this.language}`;
    // }
    /*
      * Inheritance chain: GameObject -> CharacterStats -> Humanoid
      * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
      * Instances of CharacterStats should have all of the same properties as GameObject.
    */
    
    
    //   const mage = new Humanoid({
    //     createdAt: new Date(),
    //     dimensions: {
    //       length: 2,
    //       width: 1,
    //       height: 1,
    //     },
    //     healthPoints: 5,
    //     name: 'Bruce',
    //     team: 'Mage Guild',
    //     weapons: [
    //       'Staff of Shamalama',
    //     ],
    //     language: 'Common Tongue',
    //   });
    
    //   const swordsman = new Humanoid({
    //     createdAt: new Date(),
    //     dimensions: {
    //       length: 2,
    //       width: 2,
    //       height: 2,
    //     },
    //     healthPoints: 15,
    //     name: 'Sir Mustachio',
    //     team: 'The Round Table',
    //     weapons: [
    //       'Giant Sword',
    //       'Shield',
    //     ],
    //     language: 'Common Tongue',
    //   });
    
    //   const archer = new Humanoid({
    //     createdAt: new Date(),
    //     dimensions: {
    //       length: 1,
    //       width: 2,
    //       height: 4,
    //     },
    //     healthPoints: 10,
    //     name: 'Lilith',
    //     team: 'Forest Kingdom',
    //     weapons: [
    //       'Bow',
    //       'Dagger',
    //     ],
    //     language: 'Elvish',
    //   });
    
    //   const villain = new Humanoid({
    //     createdAt: new Date(),
    //     dimensions: {
    //       length: 2,
    //       width: 1.5,
    //       height: 3,
    //     },
    //     healthPoints: 12,
    //     name: 'Zebulon',
    //     team: 'The Green Dragon Drinking Club',
    //     weapons: [
    //       'Eye of Incredulous', 
    //       'Whispperio', 
    //       'Stolen Steel of Syntactic Sugar'
    //     ],
    //     language: ['Common Tongue', 'Dwarvish', 'Snapwhiffle']
    //   });
    
    //   const hero = new Humanoid({
    //     createdAt: new Date(),
    //     dimensions: {
    //       length: 2,
    //       width: 2,
    //       height: 2.5,
    //     },
    //     healthPoints: 16,
    //     name: 'Matt',
    //     team: 'Coopers Cross',
    //     weapons: [
    //       'Grapthars Hammer',
    //     ],
    //     language: 'Common Tongue',
    //   });
    
    
// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
// */

class GameObject{
    constructor(attrs){
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`;
      }
}//closes the Game Object

class CharacterStats extends GameObject{
    constructor(stats) {
        super(stats); 
        this.healthPoints = stats.healthPoints;
            }
    takeDamage(){
    return `${this.name} took damage.`;
    }
}//closes the CharacterStats
 
class Humanoid extends CharacterStats{
    constructor(quest) {
        super(quest);
        this.team = quest.team;
        this.weapons = quest.weapons;
        this.language = quest.language;
        }
    greet(){
    return `${this.name} offers a greeting in ${this.language}`;
  }
}//closes the Humanoid
 
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const villain = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1.5,
      height: 3,
    },
    healthPoints: 12,
    name: 'Zebulon',
    team: 'The Green Dragon Drinking Club',
    weapons: [
      'Eye of Incredulous', 
      'Whispperio', 
      'Stolen Steel of Syntactic Sugar'
    ],
    language: ['Common Tongue', 'Dwarvish', 'Snapwhiffle']
  });

  const hero = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2.5,
    },
    healthPoints: 16,
    name: 'Matt',
    team: 'Coopers Cross',
    weapons:'Grapthars Hammer',
    language: 'Common Tongue',
  });
  

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(hero.weapons);
console.log(villain.weapons);