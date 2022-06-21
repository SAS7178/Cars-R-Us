import { getTechnology, setTechnology } from "./database.js";

const techs = getTechnology()

export const technologyHTML = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.dashboard}</option>`
    }

    html += "</select>"
    return html
        
}
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnology(parseInt(event.target.value))
        }
    }
)
