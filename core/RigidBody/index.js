"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RigidBody = void 0;
const Constants_1 = require("../Constants");
const Vect_1 = require("../Vect");
class RigidBody {
    constructor({ mass, position, velocity, acceleration, force }) {
        this.mass = mass !== null && mass !== void 0 ? mass : 0;
        this.position = position !== null && position !== void 0 ? position : new Vect_1.Vect({});
        this.velocity = velocity !== null && velocity !== void 0 ? velocity : new Vect_1.Vect({});
        this.force = force !== null && force !== void 0 ? force : new Vect_1.Vect({ y: Constants_1.Constants.g });
        this.acceleration = acceleration !== null && acceleration !== void 0 ? acceleration : new Vect_1.Vect({});
    }
    calculatePos(dt) {
        this.acceleration = Vect_1.Vect.add([this.acceleration, this.force.multiplyScalar(1 / this.mass)]);
        this.velocity = Vect_1.Vect.add([this.velocity, this.acceleration.multiplyScalar(dt)]);
        this.position = Vect_1.Vect.add([this.position, this.velocity.multiplyScalar(dt)]);
        return this.position;
    }
}
exports.RigidBody = RigidBody;
