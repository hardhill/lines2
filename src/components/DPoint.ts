import { BufferGeometry, Group, Line, LineBasicMaterial, Points, PointsMaterial, PointsMaterialParameters, Vector3 } from "three";
import Utils from "../classes/utils";
import { WorldObject } from "../types/WorldObject";


const paramsL:PointsMaterialParameters = {
    color:'#6B94E0',
    size: 0.08
}
const paramsR:PointsMaterialParameters = {
    color:'#FCFDA2',
    size: 0.08
}

export class DPoint extends Group implements WorldObject{
    private grLeft:Group
    private grRight:Group
    private pntLeft:Points
    private pntRight:Points
    private worldLeftPoint:Vector3 = new Vector3()
    private worldRightPoint:Vector3 = new Vector3()
    constructor(){
        super()
        this.name = 'DPoint'
        this.grLeft = new Group()
        this.grRight = new Group()
        this.grLeft.position.add(new Vector3(-0.5,0,0))
        this.grRight.position.add(new Vector3(0.5,0,0))
        this.add(this.grLeft)
        this.add(this.grRight)
        
        let vectorPointLeft = this.RandomVector(1.4)
        const geometryL = new BufferGeometry().setFromPoints(new Array<Vector3>(new Vector3()))
        let vectorPointRight = this.RandomVector(1.4)
        const geometryR = new BufferGeometry().setFromPoints(new Array<Vector3>(new Vector3()))
        let material = new PointsMaterial(paramsL)
        this.pntLeft = new Points(geometryL,material)
        material = new PointsMaterial(paramsR)
        this.pntRight = new Points(geometryR,material)
        this.grLeft.add(this.pntLeft)
        this.grRight.add(this.pntRight)
        this.pntLeft.position.copy(vectorPointLeft)
        this.pntRight.position.copy(vectorPointRight)
        
      
    }
    tick(delta: number): void {
        this.grLeft.rotateY(delta*Math.PI/-12)
        this.grRight.rotateY(delta*Math.PI/12)
        let pointLeft = this.grLeft.children[0] as Points
        let pointRight = this.grRight.children[0] as Points
        pointLeft.getWorldPosition(this.worldLeftPoint)
        pointRight.getWorldPosition(this.worldRightPoint)
    }

    GetWorldPositionLeftPoint():Vector3{
        return this.worldLeftPoint
    }
    GetWorldPositionRightPoint():Vector3{
        return this.worldRightPoint
    }

    Object3d() {
        throw new Error("Method not implemented.");
    }
    RandomVector(delta:number=1):Vector3{
        let min = -delta/2
        let max = delta/2
        let x = Utils.getRandomInRange(min,max)
        let y = Utils.getRandomInRange(min,max)
        let z = Utils.getRandomInRange(min,max)
        return new Vector3(x,y,z)
    }
}