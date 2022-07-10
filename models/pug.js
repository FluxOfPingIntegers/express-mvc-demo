module.exports = class Pug {
  constructor({name, age, owner}) {
    this.name = name;
    this.age = age;
    this.owner = owner;
  }

  save() {
    Pug.all.push(this);
  }

  static all = [];

}
