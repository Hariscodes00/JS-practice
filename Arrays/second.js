let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
car.color = "red";
car.year = 2022;
delete car.model;
console.log(car)