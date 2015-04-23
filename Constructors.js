var Cat = function (name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
  return this.owner + " loves " + this.name;
};

var cat1 = new Cat("Ozzy", "Rhoen");
var cat2 = new Cat("Felix", "Felicia");

cat1.cuteStatement();

Cat.prototype.cuteStatement = function () {
  return "Everyone loves " + this.name;
};

Cat.prototype.meow = function () {
  return this.name + " meows";
};

cat1.meow = function () { return "meow MEOW"; };
