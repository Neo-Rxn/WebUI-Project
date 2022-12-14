let lightStates = { red: 0, amber: 1, green: 2 };
let currentState = lightStates.red;
let btn = document.getElementById('changeBtn')

btn.addEventListener("click", changeState);

function changeState() {
    clear();
    switch (currentState) {
        case lightStates.red:
            {
                document.getElementById("red").className = "light red";
                currentState = lightStates.amber;
            }
            break;
        case lightStates.amber:
            {
                document.getElementById("amber").className = "light amber";
                currentState = lightStates.green;
            } break;
        case lightStates.green:
            {
                document.getElementById("green").className = "light green";
                currentState = lightStates.red;
            } break;
    }
}

function clear() {
    document.getElementById("red").className = "light off";
    document.getElementById("amber").className = "light off";
    document.getElementById("green").className = "light off";
}