class ParkingSystem {
    _carTypeMap;
    constructor(large, medium, small) {
        this._carTypeMap = {
            1: large,
            2: medium,
            3: small,
        };
    }
    addCar(carType) {
        const parkingLotSpace = this._carTypeMap[carType];
        if (parkingLotSpace - 1 >= 0) {
            this._carTypeMap[carType] -= 1;
            return true;
        } else {
            return false;
        }
    }
}
const parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(2));
console.log(parkingSystem.addCar(3));
console.log(parkingSystem.addCar(1));
