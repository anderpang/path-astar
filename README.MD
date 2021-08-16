# path-astar

A*(a-star) pathfinding in TypeScript

### Installation

```bash
 npm i path-astar
```

```bash
 import PathAstar from "path-astar";
```

![](https://github.com/anderpang/path-astar/blob/main/demo.gif?raw=true)

### Usage
```js
var maps=[
        [0,0,1],
        [0,1,1],
        [0,0,0],
        [0,1,0]
    ];

var astar=new PathAstar(maps);

astar.setStart(1,0)
     .setEnd(2,3)
     .track(function (paths) {
         console.log(paths);
     },function(){
         // fail
     });

```
```js
var maps=[
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

var astar=new PathAstar(maps);
var wallsNum=4;

astar.randomAll(wallsNum);

// console.log(astar.startNode);
// console.log(astar.endNode);
// astar.obstacleList.forEach(function (index) {
//     var coord = astar.index2Coord(index);
// });
astar.track(function (paths) {
         console.log(paths);
     },function(){
         // fail
     });

```

## METHODS
```ts
constructor(maps:Array<Array<0|1>>);

setStart(x:number,y:number):PathAstar;

setEnd(x:number,y:number):PathAstar;

randomAll(wallsNum:number):PathAstar;

track(
    success:(paths:{x:number,y:number}[])=>void,
    fail?:()=>void
):PathAstar;

```
