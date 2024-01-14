function car (make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}
    


let myCar = new car;
myCar.make = 'Mazda';
myCar.model = 'M2';
myCar.year = 2022;
myCar.color = 'Red';

console.log(myCar);