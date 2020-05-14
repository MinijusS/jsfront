'use strict';

const bmwCar = document.querySelector('.bmw');
const audiCar = document.querySelector('.audi');

const speed = {
    slow: 10,
    medium: 20,
    fast: 30
};

function ConstructCar(car, speed, x = 0, y = 0) {
    this.car = car;
    this.positionX = x;
    this.positionY = y;
    this.rotation = 0;
    this.speed = speed;

    this.moveLeft = function(){
        this.positionX -= this.speed;
        this.rotation = 270;
    }

    this.moveRight = function() {
        this.positionX += this.speed;
        this.rotation = 90;
    }

    this.moveUp = function() {
        this.positionY -= this.speed;
        this.rotation = 0;
    }

    this.moveDown = function() {
        this.positionY += this.speed;
        this.rotation = 180;
    }
    
    this.render = function() {
        this.car.style.left = this.positionX + 'px';
        this.car.style.top = this.positionY + 'px';
        this.car.style.transform = `rotate(${this.rotation}deg)`;
    }

    this.move = function(e) {
        switch (e.keyCode) {
            case 40:
                this.moveDown();
                break;
            case 39:
                this.moveRight();
                break;
            case 38:
                this.moveUp();
                break;
            case 37:
                this.moveLeft();
                break;
        }
    }
    document.addEventListener('keydown', e => {
        this.move(e);
        this.render();
    });
};

const bmw = new ConstructCar(bmwCar, speed.slow, 100, 200);
const audi = new ConstructCar(audiCar, speed.fast);
