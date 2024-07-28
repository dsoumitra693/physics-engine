"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ball = void 0;
const RigidBody_1 = require("../RigidBody");
class Ball extends RigidBody_1.RigidBody {
    constructor({ mass, position, velocity, acceleration, force, color, radius, htmlElem, parent }) {
        super({ mass, position, velocity, acceleration, force });
        this.radius = radius !== null && radius !== void 0 ? radius : 100;
        this.color = color !== null && color !== void 0 ? color : "#000";
        this.htmlElem = htmlElem !== null && htmlElem !== void 0 ? htmlElem : document.createElement('div');
        this.parent = parent !== null && parent !== void 0 ? parent : document.getElementsByTagName("body");
        this.parent.appendChild(this.htmlElem);
    }
    draw(dt) {
        let pos = super.calculatePos(dt);
        let style = `
        width:${this.radius * 2};
        aspect-ratio:1;
        left:${pos.x};
        right:${pos.y};
        border-radius:50%;
        position:absolute;
        background-color:${this.color};
        `;
        this.htmlElem.setAttribute("style", style);
    }
}
exports.Ball = Ball;
