import { PerspectiveCamera } from "three";

export function createCamera(){
    const camera = new PerspectiveCamera(
        45, //fov
        1,  //aspect
        0.1, //near
        100    //far
    )
    camera.position.set(0,15,2)
    camera.lookAt(0,0,0)
    return camera
}