declare class PathAstar {
    constructor(maps:Array<Array<0|1>>);
    setStart(x:number,y:number):PathAstar;
    setEnd(x:number,y:number):PathAstar;
    randomAll(wallsNum:number):PathAstar;
    track(
        success:(paths:{x:number,y:number}[])=>void,
        fail?:()=>void
    ):PathAstar;
}

export default PathAstar;