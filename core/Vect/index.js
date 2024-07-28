"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vect = void 0;
class Vect {
    constructor({ x, y, z }) {
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.z = z !== null && z !== void 0 ? z : 0;
    }
    static add(A) {
        let sum = new Vect({});
        for (let a of A) {
            sum.x += a.x;
            sum.y += a.y;
            sum.z += a.z;
        }
        return sum;
    }
    negate() {
        return this.multiplyScalar(-1);
    }
    length() {
        let { x, y, z } = this;
        return Math.sqrt(x * x + y * y + z * z);
    }
    static norm(A) {
        let invLen = 1 / A.length();
        A.x *= invLen;
        A.y *= invLen;
        A.z *= invLen;
        return A;
    }
    normalise() {
        return Vect.norm(this);
    }
    dot(A) {
        let prod = this.x * A.x + this.y * A.y + this.z * A.z;
        return prod;
    }
    cross(A) {
        let prod = new Vect({});
        prod.x = this.y * A.z - this.z * A.y;
        prod.y = this.z * A.x - this.x * A.z;
        prod.z = this.x * A.y - this.y * A.x;
        return prod;
    }
    multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }
    copy() {
        let newVect = new Vect({});
        newVect.x = this.x;
        newVect.y = this.y;
        newVect.z = this.z;
        return newVect;
    }
}
exports.Vect = Vect;
