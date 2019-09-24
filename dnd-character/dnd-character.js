export const abilityModifier = (num) => {
  throw new Error('Remove this statement and implement this function');
};

export class Character {
  static rollAbility() {
    let rolls = [];
    for(let i = 0; i < 4; i++){
      rolls.push(Math.ceil(Math.random() * 7));
    }
    return rolls;
  }

  get strength() {
    const rolls = Character.rollAbility();
    return rolls.reduce((acc, next) => acc + next, -Math.min(...rolls));  // the initial value is a way to substract the miniumum roll
  }

  get dexterity() {
    const rolls = Character.rollAbility();
    return rolls.reduce((acc, next) => acc + next, -Math.min(...rolls));
  }

  get constitution() {
    const rolls = Character.rollAbility();
    return rolls.reduce((acc, next) => acc + next, -Math.min(...rolls));
  }

  get intelligence() {
    const rolls = Character.rollAbility();
    return rolls.reduce((acc, next) => acc + next, -Math.min(...rolls));
  }

  get wisdom() {
    const rolls = Character.rollAbility();
    return rolls.reduce((acc, next) => acc + next, -Math.min(...rolls));
  }

  get charisma() {
    const rolls = Character.rollAbility();
    return rolls.reduce((acc, next) => acc + next, -Math.min(...rolls));
  }

  get hitpoints() {
    const modifier = Math.floor((this.constitution - 10) / 2);
    return 10 + modifier;
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