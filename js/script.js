'use strict';
(function () {
    function Phone(brand, price, color, os) {
        //Here we put interior of the constructing function.
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.os = os;
        //by using this, the 'brand' property of the object we create will assume the value of the brand argument
    };

    Phone.prototype.infoString = function () {
        return 'The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + ' EUR and the Operating System is ' + this.os + '.';
    };
    
    Phone.prototype.printInfo = function () {
        console.log(this.infoString());
    };

    Phone.prototype.log = function () {
        var output = document.getElementById('output');
        output.innerHTML += this.infoString() + '<br>';
    };

    var SamsungGalaxyS6 = new Phone('Samsung', 280, 'black', 'Android Lollipop');
    var iPhone6S = new Phone('Apple', 500, 'silver', 'iOS 9');
    var OnePlusOne = new Phone('OPPO', 250, 'white', 'Android KitKat');
    var XiaomiMi5 = new Phone('Xiaomi', 240, 'silver', 'Android Marshmallow');

    SamsungGalaxyS6.printInfo();
    iPhone6S.printInfo();
    OnePlusOne.printInfo();
    XiaomiMi5.printInfo();

    SamsungGalaxyS6.log();
    iPhone6S.log();
    OnePlusOne.log();
    XiaomiMi5.log();


})();