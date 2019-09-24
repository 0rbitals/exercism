export const abilityModifier = (num) => {
  if(num < 3){
    throw 'Ability scores must be at least 3';
  } else if (num > 18){
    throw 'Ability scores can be at most 18';
  }
  return Math.floor((num - 10) / 2);
};

export class Character {

  static rollAbility() {
    let rolls = [];
    for(let i = 0; i < 4; i++){
      rolls.push(Math.ceil(Math.random() * 6));
    }
    return rolls.reduce((acc, next) => acc + next, -Math.min(...rolls)); // the initial value is a way to substract the miniumum roll
  }

  constructor(){
    this.str = Character.rollAbility();
    this.dex = Character.rollAbility();
    this.con = Character.rollAbility();
    this.int = Character.rollAbility();
    this.wis = Character.rollAbility();
    this.char = Character.rollAbility();
  }

  get strength() {
    return this.str;
  }

  get dexterity() {
    return this.dex;
  }

  get constitution() {
    return this.con;
  }

  get intelligence() {
    return this.int;
  }

  get wisdom() {
    return this.wis;
  }

  get charisma() {
    return this.char;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}

let character = new Character;
console.log(character.strength);
console.log(character.charisma);
console.log(character.constitution);
console.log(character.dexterity);
console.log(character.wisdom);
console.log(character.intelligence);
console.log(character.hitpoints)