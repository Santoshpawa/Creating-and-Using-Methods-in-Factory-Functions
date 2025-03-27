function createCar(make,model,year){
    obj={};
    obj.make = make;
    obj.model = model;
    obj.year = year;
    obj.describeCar = function(){
        console.log(`This car is a ${this.year} ${this.make} ${this.model}`)
    }
    return obj;
}

let car1 = createCar("Toyota", "Camey", 2022);
car1.describeCar();