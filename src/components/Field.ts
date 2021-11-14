import { Group } from "three";
import { WorldObject } from "../types/WorldObject";
import { DPoint } from "./DPoint";

export class Field extends Group implements WorldObject{
    private points:Array<DPoint>
    constructor(){
        super()
        for(let i=0;i<100;i++){
            for(let n=0;n<100;n++){
                let point = new DPoint()
                let x = -50+n
                let z = -50+i
                point.position.set(x,0,z)
                this.add(point)
            }
        }
        this.rotateX(Math.PI/4)
        this.points = new Array<DPoint>()
    }
    tick(delta: number): void {
        // for(let i=0;i<10;i){
        //     for(let n=0;n<10;n++){

        //     }
        // }
       let l = this.children.length
       for(let n=0;n<l;n++){
           let point:DPoint = this.children[n] as DPoint
           point.tick(delta)
       }
    }
    Object3d() {
        throw new Error("Method not implemented.");
    }

}