// 1.

function getFirstWord(a: string): number {
  return a.split(/ +/)[0].length;
}
//2.
type User = {
  name: string;
  surname: string;
};

function getUserNamings(a: User): { fullname: string; initials: string } {
  return {
    fullname: a.name + " " + a.surname,
    initials: a.name[0] + "." + a.surname[0],
  };
}

// 3.
type Product = {
  name: string;
};

type ProductList = {
  products: Product[];
};

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a: ProductList): string[] {
  return a?.products?.map((prod) => prod?.name) || [];
}
// 4.1

// easy way is using 'as' keyword
// hard way is ?...
function hey1(a: { name: () => string }): string {
  return "hey! i'm " + a.name();
}
console.log(hey1({ name: () => "roma", cuteness: 100 } as any));
console.log(hey1({ name: () => "vasya", coolness: 100 } as any));

// 4.2

class Cat {
  name: string;
  isCute: boolean;

  constructor(name: string, isCute: boolean) {
    this.name = name;
    this.isCute = isCute;
  }

  getName() {
    return this.name;
  }
}

class Dog {
  name: string;
  coolness: number;

  constructor(name: string, coolness: number) {
    this.name = name;
    this.coolness = coolness;
  }

  getName() {
    return this.name;
  }
}

function hey2(abstractPet: { getName: () => string }): string {
  return "hey! i'm " + abstractPet.getName();
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);
console.log(hey2(a));
console.log(hey2(b));

// 4.3
function hey3(a: {name: ()=>string; type: "cat" | "dog"; cuteness?: number; coolness?: number}): string {
  return "hey! i'm " + a.name() + " " + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
}
console.log(hey3({name: () => "roma", type: "cat", cuteness: 100}));
console.log(hey3({name: () => "vasya", type: "dog", coolness: 100}));
