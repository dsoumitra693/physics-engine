export interface IVect {
    x?:number | undefined;
    y?:number | undefined;
    z?:number | undefined;
}


export class Vect implements IVect {
    x:number;
    y:number;
    z:number;


    constructor({x,y, z}:IVect) {
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.z = z ?? 0;
    }

    static add (A:Vect[]){
        let sum = new Vect({})
        for(let a of A) {
            sum.x += a.x;
            sum.y += a.y;
            sum.z += a.z;
        }

        return sum;
    }

    public negate(){
        return this.multiplyScalar(-1);
    }

    public length(){
        let {x, y, z} = this

        return Math.sqrt(x*x + y*y + z*z);
    }

    static norm(A:Vect){
        let invLen = 1/A.length(); 
        A.x *= invLen;
        A.y *= invLen;
        A.z *= invLen;

        return A;
    }

    public normalise() {
        return Vect.norm(this);
    }

    public dot(A:Vect){
        let prod = this.x * A.x + this.y * A.y + this.z * A.z;

        return prod;
    }

    public cross(A:Vect) {
        let prod = new Vect({});

        prod.x = this.y*A.z - this.z*A.y;
        prod.y = this.z*A.x - this.x*A.z;
        prod.z = this.x*A.y - this.y*A.x;


        return prod;
    }

    public multiplyScalar(s:number){
        this.x *= s;
        this.y *= s;
        this.z *= s;

        return this;
    }

    public copy(){
        let newVect = new Vect({});

        newVect.x = this.x;
        newVect.y = this.y;
        newVect.z = this.z;

        return newVect;
    }
}