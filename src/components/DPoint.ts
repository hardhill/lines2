import { BufferGeometry, Group, Points, PointsMaterial, PointsMaterialParameters, Vector3 } from "three";
import Utils from "../classes/utils";
import { WorldObject } from "../types/WorldObject";


const paramsL:PointsMaterialParameters = {
    color:'#f98b8b',
    size: 0.08
}
const paramsR:PointsMaterialParameters = {
    color:'#d1d869',
    size: 0.08
}

export class DPoint extends Group implements WorldObject{
    private grLeft:Group
    private grRight:Group
    private pntLeft:Points
    private pntRight:Points
    constructor(){
        super()
        this.grLeft = new Group()
        let x = Utils.getRandomInRange(-0.5,0.5)
        let y = Utils.getRandomInRange(-0.5,0.5)
        let z = Utils.getRandomInRange(-0.5,0.5)
        this.grLeft.position.set(x,y,z)
        this.grRight = new Group()
        x = Utils.getRandomInRange(-0.5,0.5)
        y = Utils.getRandomInRange(-0.5,0.5)
        z = Utils.getRandomInRange(-0.5,0.5)
        this.grRight.position.set(x,y,z)
        this.add(this.grLeft)
        this.add(this.grRight)
        x = Utils.getRandomInRange(-0.5,0.5)
        y = Utils.getRandomInRange(-0.5,0.5)
        z = Utils.getRandomInRange(-0.5,0.5)
        const geometry = new BufferGeometry().setFromPoints(new Array<Vector3>(new Vector3(x,y,z)))
        let material = new PointsMaterial(paramsL)
        this.pntLeft = new Points(geometry,material)
        material = new PointsMaterial(paramsR)
        this.pntRight = new Points(geometry,material)
        this.grLeft.add(this.pntLeft)
        this.grRight.add(this.pntRight)
    }
    tick(delta: number): void {
        this.grLeft.rotateY(delta*Math.PI/12)
        this.grRight.rotateY(delta*Math.PI/12)
    }
    Object3d() {
        throw new Error("Method not implemented.");
    }
}