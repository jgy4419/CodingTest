// Factory Pattern (공장 패턴)

// 각 자동차 종류 별 기능.
const Car = function () {
    this.say = function () {
        console.log('I am a car.');
    }
}

const Truck = function () {
    this.say = function () {
        console.log('I am a truck.');
    }
}

const Bike = function () {
    this.say = function () {
        console.log('I am a Bike');
    }
}

const VehicleFactory = function () {
    this.createVehicle = (vehicleType) => {
        let vehicle;
        switch (vehicleType) {
            case 'car':
                vehicle = new Car();
                break;
            case 'truck':
                vehicle = new Truck();
                break;
            case 'bike':
                vehicle = new Bike();
                break;
            default:
                return 'x';
        }
        return vehicle;
    }
}

const vehicleFactory = new VehicleFactory();
let car = vehicleFactory.createVehicle('car');

car.say();