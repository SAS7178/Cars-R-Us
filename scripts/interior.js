import { getInterior, setInterior } from "./database.js";

const interiors = getInterior()

export const carInteriorHTML = () => {
    return `<h2>Interior</h2>
        <select id="interior">
            <option value="0">Select a Interior</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.seatType}</option>`
                    }
                ).join("")
            }
        </select>`
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)