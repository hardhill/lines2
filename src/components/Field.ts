import { Group, Line3, Vector3 } from "three";
import Utils from "../classes/utils";
import { WorldObject } from "../types/WorldObject";
import { DLine } from "./DLine";
import { DPoint } from "./DPoint";

export class Field extends Group implements WorldObject{
    
    constructor(){
        super()
        
        const point = new DPoint()
        this.add(point)
        let points_line = new Array<Vector3>()
       
        points_line.push(point.GetWorldPositionLeftPoint())
        points_line.push(point.GetWorldPositionRightPoint())
       
        const line = new DLine()
        this.addPoints(100)
      
        
    }
    addPoints(valume:number){
          for(let i=0;i<valume;i++){
              let rad = Utils.getRandomInRange(0,Math.PI*2)
              let z = Math.sin(rad)*Utils.getRandomInt(1,11)
              let x = Math.cos(rad)*Utils.getRandomInt(1,11)
              let y = Utils.getRandomInRange(-1,1)
              let point = new DPoint()
              point.position.set(x,y,z)
              this.add(point)
              let line = new DLine()
              this.add(line)
          }  
    }
    tick(delta: number): void {
        let leftPoint = new Vector3()
        let rightPoint = new Vector3()
       
       this.children.forEach((item)=>{
           if(item.name === 'DPoint'){
               let points = (item as DPoint)
               leftPoint = points.GetWorldPositionLeftPoint()
               rightPoint = points.GetWorldPositionRightPoint()
               points.tick(delta)
           }
           if(item.name === 'DLine'){
              let line = (item as DLine)
              line.setPoints(leftPoint,rightPoint)
              line.tick(delta)
              
           }
       })
      
       
       
    }
    Object3d() {
        throw new Error("Method not implemented.");
    }

}