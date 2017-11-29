const SHAKE_THRESHOLD = 3000;
const SHAKE_PERIOD = 1000;

let last_update = 0;
let x = y = z = last_x = last_y = last_z = 0;
let last_shake = 0;

function init() {
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
        alert('not support mobile event');
    }
}

function deviceMotionHandler(eventData) {
    let acceleration = eventData.accelerationIncludingGravity;
    let curTime = new Date().getTime();
    if ((curTime - last_update) > 100) {
        let diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        let elapsed = Math.abs(curTime - last_shake);

        if (speed > SHAKE_THRESHOLD && elapsed > SHAKE_PERIOD) {
            last_shake = curTime;
            app.getRandom()
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}

init();