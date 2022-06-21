import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

export const CarWheelsHTML = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheel">'
    html += `<option value= "0">Select a Wheel</option>`
    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.wheel}</option>`
    }
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

