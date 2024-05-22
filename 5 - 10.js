var car = {
    fuel: Math.ceil(Math.random() * 10 + 10),
    power: Math.ceil(Math.random() * 3 + 2),
    moved: 0,
    run : function () {
        var km = Math.ceil(Math.random() * 6);
        var wasteFuel = km / this.power;
        if (this.fuel < wasteFuel) {
            console.log('이동불가');
            return;
        }
        this.fuel -= wasteFuel;
        this.moved += km;
        console.log(km + 'km 이동 (총 ' + this.moved + 'km)');
    }
};
car.fuel = 10000;
car.power = 100;
car.moved = 1000;
car.run();