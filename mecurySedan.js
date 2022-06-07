//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

let m = new VehicleModule.Car(5, 0, 4, 160, 10)
console.log('Maximum Passengers: ', m.maximumPassengers)
console.log('Passengers: ', m.passenger)
console.log('Number of Wheels: ', m.numberOfWheels)
console.log('Maximum Speed: ', m.maximumSpeed)
console.log('Fuel: ', m.fuel)
m.loadPassenger(2)
console.log('Passengers: ', m.passenger)
m.start()
console.log('Started: ', m.started)
m.scheduleService()
console.log('Service Scheduled: ', m.service)