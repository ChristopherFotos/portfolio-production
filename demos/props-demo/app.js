

const scene = new Scene("#canvas", window.innerWidth, window.innerHeight);
startScene(scene)

// scene.gravity = true;

let grid = new Grid(scene, scene.width, 100, 20);
let colors = ["#FB980A", "#A60DEA", "#BD33AD", "#DB645E"];

let _mx, _my;
let drawing;

const maintxt = new Image()
maintxt.src = `https://christopherfotos.herokuapp.com/props-demo/props-demo-main.svg`


function limit(){
    if (scene.rectProps.length > 2200) {
        scene.rectProps.splice(2200, scene.rectProps.length - 1 - 2200)
    }
}

setInterval(limit, 5)

maintxt.onload = () => {
    scene.add(scene, {
    width: maintxt.naturalWidth * 2,
    height: maintxt.naturalHeight * 2,
    x: 100,
    y: 200,
    image: maintxt,
    strokeColor: "gray",
    // fill: true,
    // fillColor: colors[Math.floor(utils.randomRange(0, 4))],
    accelMag: 0.02,
    antiTunneling: {interval: 8, floor: 0.2},
    speed: 10,
    solid: true,
    stackable: true,
    direction: 0,
    movement: "default",
    friction: 0.952,
    mass: 1,
    collision: "edgeBounce",
    elasticity: 0.6,
    customProperties: {
      health: 5
    }
})
}





document.addEventListener('mousedown', (e)=>{
    if(!drawing) drawing = true

    for (let i = 0; i < 5; i++) {
        let square = Math.random() * 20;
        scene.add(scene, {
            shape: "rectangle",
            width: square,
            height: square,
            noGrav: true,
            x: e.pageX,
            y: e.pageY,
            strokeColor: "gray",
            fill: true,
            fillColor: colors[Math.floor(utils.randomRange(0, 4))],
            accelMag: 0.025,
            speed: 0.15,
            solid: true,
            direction: Math.random() * 100,
            movement: "default",
            friction: 0.965,
            // collision: "edgeBounce",
            mass: 0.5,
            // customFunctions: [highlightCandidates],
            elasticity: 0.1,
            
        });
        }   
})

document.addEventListener('mouseup', ()=>{
    if(drawing) drawing = false
})

document.body.addEventListener("mousemove", e => {

    if(drawing){
        for (let i = 0; i < 5; i++) {
        let square = Math.random() * 20;
        scene.add(scene, {
            shape: "rectangle",
            width: square,
            height: square,
            x: e.pageX,
            y: e.pageY,
            strokeColor: "gray",
            fill: true,
            fillColor: colors[Math.floor(utils.randomRange(0, 4))],
            accelMag: 0.025,
            speed: 0.15,
            solid: true,
            direction: Math.random() * 100,
            movement: "default",
            friction: 0.965,
            collision: "edgeBounce",
            mass: 0.5,
            // customFunctions: [highlightCandidates],
            elasticity: 0.1
        });
        }   
    }
});
    

let clear = {
    clear: null,
    tick: scene.rectProps.length - 1,
    clear: function () {
        this.clear = setInterval(()=>{
            scene.rectProps.splice(tick, 2)
            tick -= 1
        },10)
    } 
}

