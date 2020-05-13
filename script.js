'use strict';
const selectedCar = document.querySelector('.car');

const car = {
    positionX: 0,
    positionY: 0,
    rotation: 0,

    moveLeft() {
        this.positionX -= 10;
    },
    moveRight() {
        this.positionX += 10;
    },
    moveUp() {
        this.positionY -= 10;
    },
    moveDown() {
        this.positionY += 10;
    },
    render() {
        selectedCar.style.left = this.positionX + 'px';
        selectedCar.style.top = this.positionY + 'px';
    },
    move(e) {
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
};

document.addEventListener('keydown', e => {
    car.move(e);
    car.render();
});