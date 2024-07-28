import { Constants } from "../Constants";
import { Vect } from "../Vect";

export interface IRigidBody{
    mass:number;
    position:Vect;
    velocity:Vect;
    acceleration:Vect;
    force:Vect;
}

export class RigidBody implements IRigidBody{
    mass:number;
    position:Vect;
    velocity:Vect;
    acceleration:Vect;
    force:Vect;

    constructor({
        mass,
        position,
        velocity,
        acceleration,
        force
    }:IRigidBody) {
        this.mass = mass ?? 0;
        this.position = position ?? new Vect({});
        this.velocity = velocity ?? new Vect({});
        this.force = force ?? new Vect({y:Constants.g});
        this.acceleration = acceleration ?? new Vect({});
    }

    public calculatePos(dt:number) {
        this.acceleration = Vect.add([this.acceleration,this.force.multiplyScalar(1/this.mass)]);
        this.velocity = Vect.add([this.velocity,this.acceleration.multiplyScalar(dt)]);
        this.position = Vect.add([this.position, this.velocity.multiplyScalar(dt)])

        return this.position;
    }
}