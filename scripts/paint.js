import { getPaintColor, setPaintColor } from "./database.js";

const paints = getPaintColor()

// export const carPaintHTML = () => {
//     let html = "<h2>Paint Color</h2>"

//     html += '<select id="paint">'
//     html += '<option value="0">Select a Paint Color</option>'

//     const arrayOfOptions = paints.map( (paint) => {
//             return `<option value="${paint.id}">${paint.color}</option>`
//         }
//     )

//     html += arrayOfOptions.join("")
//     html += "</select>"
//     return html
// }
export const carPaintHTML = () => {
    let html = "<h2>Paint Color</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a Paint Color</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html
        
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

