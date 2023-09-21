class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}


// module.exports = new SuperHero('Batman')
// exporting the class instead of the instance
module.exports =  SuperHero