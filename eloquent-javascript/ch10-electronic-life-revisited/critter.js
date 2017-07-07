"use strict";

function BouncingCritter() {
    this.direction = randomElement(directionNames);
};

BouncingCritter.prototype.act = function(view) {
    if (view.look(this.direction) != " ")
        this.direction = view.find(" ") || "s";
    return {type: "move", direction: this.direction};
};

function WallFlower() {
    this.dir = "s";
}

WallFlower.prototype.act = function(view) {
    var start = this.dir;
    if (view.look(dirPlus(this.dir, -3)) != " ")
        start = this.dir = dirPlus(this.dir, -2);
    while (view.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, 1);
        if (this.dir == start) break;
    }
    return {type: "move", direction: this.dir};
}

var actionTypes = Object.create(null);

actionTypes.grow = function(critter) {
    critter.energy += 0.5;
    return true;
}

actionTypes.move = function(critter, vector, action) {
    var dest = this.checkDestination(action, vector);
    if (dest == null ||
        critter.energy <= 1 ||
        this.grid.get(dest) != null)
      return false;
    critter.energy -= 1;
    this.grid.set(vector, null);
    this.grid.set(dest, critter);
    return true;
}

actionTypes.eat = function(critter, vector, action) {
    var dest = this.checkDestination(action, vector);
    var atDest = dest != null && this.grid.get(dest);
    if (!atDest || atDest.energy == null)
        return false;
    critter.energy += atDest.energy;
    this.grid.set(dest, null);
    return true;
}

actionTypes.reproduce = function(critter, vector, action) {
    var baby = elementFromChar(this.legend, critter.originChar);
    var dest = this.checkDestination(action, vector);
    if (dest == null ||
        critter.energy <= 2 * baby.energy ||
        this.grid.get(dest) != null)
        return false;
    critter.energy -= 2 * baby.energy;
    this.grid.set(dest, baby);
    return true;
}

function Plant() {
    this.energy = 3 + Math.random() * 4;
}

Plant.prototype.act = function(view) {
    if (this.energy > 15) {
        var space = view.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
    }
    if (this.energy < 20)
        return {type: "grow"};
}

function PlantEater() {
    this.energy = 20;
}

PlantEater.prototype.act = function(view) {
    var space = view.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    var plant = view.find("*");
    if (plant)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
}

function Tiger() {
    this.energy = 20;
}

Tiger.prototype.act = function(view) {
    var space = view.find(" ");
    if(this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    var planteater = view.find("o")
    if(planteater)
        return {type: "eat", direction: planteater};
    if (space)
        return {type: "move", direction: space};
}