import { Color, Scene } from "three";

export function createScene(){
    const scene = new Scene
    scene.background = new Color('#0f0f10')
    return scene
}