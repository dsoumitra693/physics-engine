import { IRigidBody, RigidBody } from "../RigidBody";

interface IBall extends IRigidBody{
    radius?:number;
    color?:string;
    htmlElem?:HTMLDivElement;
    parent?:HTMLBodyElement | HTMLCollectionOf<HTMLBodyElement>;
}

export class Ball extends RigidBody implements IBall{
    radius:number;
    color:string;
    htmlElem:HTMLDivElement;
    parent:HTMLBodyElement | HTMLCollectionOf<HTMLBodyElement>;

    constructor({
        mass,
        position,
        velocity,
        acceleration,
        force,
        color,
        radius,
        htmlElem,
        parent
    }: IBall) {
        super({mass, position, velocity, acceleration, force});
        this.radius = radius ?? 100;
        this.color = color ?? "#000";
        this.htmlElem = htmlElem ?? document.createElement('div') as HTMLDivElement;
        this.parent = parent ?? document.getElementsByTagName("body");

        (this.parent as HTMLBodyElement).appendChild(this.htmlElem);
    }


    public draw(dt:number){
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