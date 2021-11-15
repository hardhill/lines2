import { BufferGeometry, Line, Line3, LineBasicMaterial, Vector3 } from "three";
import { WorldObject } from "../types/WorldObject";

export class DLine extends Line implements WorldObject{
    private points:Array<Vector3>
    constructor(){
        super()
        this.points = new Array<Vector3>()
        this.type = 'DLine'
        this.name = 'DLine'
        this.material = new LineBasicMaterial({color:'#A9D0D1', transparent:true,opacity:1})
        this.geometry = new BufferGeometry().setFromPoints(this.points)
        //new Line(geometry,material)
        
    }
    tick(delta: number): void {
        this.geometry.setFromPoints(this.points)
        this.setOpacity()
    }
    setPoints(pointLeft:Vector3, pointRight:Vector3){
        let points:Array<Vector3> = []
        points.push(pointLeft)
        points.push(pointRight)
        this.points = points
        this.geometry.setFromPoints(points)
       
    }
    private setOpacity(){
       
        const lineDist = new Line3(this.points[0],this.points[1])
        console.log(lineDist.distance())
        if(lineDist.distance()<0.5){
            (this.material as LineBasicMaterial).opacity = 1
            
        }else if(lineDist.distance()>=1.5){
            (this.material as LineBasicMaterial).opacity = 0
        }else{
            (this.material as LineBasicMaterial).opacity = 1.5 - lineDist.distance()
        }
    }
    Object3d() {
        return this
    }
}