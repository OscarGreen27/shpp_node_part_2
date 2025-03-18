// 1.
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0],
    };
}
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a) {
    return a?.products?.map((prod) => prod?.name) || [];
}
// 4.1
// easy way is using 'as' keyword
// hard way is ?...
function hey1(a) {
    return "hey! i'm " + a.name();
}
console.log(hey1({ name: () => "roma", cuteness: 100 }));
console.log(hey1({ name: () => "vasya", coolness: 100 }));
// 4.2
class Cat {
    name;
    isCute;
    constructor(name, isCute) {
        this.name = name;
        this.isCute = isCute;
    }
    getName() {
        return this.name;
    }
}
class Dog {
    name;
    coolness;
    constructor(name, coolness) {
        this.name = name;
        this.coolness = coolness;
    }
    getName() {
        return this.name;
    }
}
function hey2(abstractPet) {
    return "hey! i'm " + abstractPet.getName();
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);
console.log(hey2(a));
console.log(hey2(b));
// 4.3
function hey3(a) {
    return "hey! i'm " + a.name() + " " + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness));
}
console.log(hey3({ name: () => "roma", type: "cat", cuteness: 100 }));
console.log(hey3({ name: () => "vasya", type: "dog", coolness: 100 }));
export {};
