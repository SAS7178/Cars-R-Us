
import { carPaintHTML } from "./paint.js"
import { technologyHTML } from "./technology.js";
import { CarWheelsHTML } from "./wheels.js";
import { carInteriorHTML } from "./interior.js";
import { addCustomOrder } from "./database.js";
import { Orders } from "./Orders.js";


export const CarsRUs = () => {
    return `
        <h1>Cars R' Us</h1>
        <div class= "choices_main">
        <article class="choices">
            <section class="choices__card">
                ${carPaintHTML()}
            </section>
            <section class="choices__card">
                ${carInteriorHTML()}
            </section>
            <section class="choices__card">
                ${CarWheelsHTML()}
            </section>
            <section class="choices__card">
                ${technologyHTML()}
            </section>
            </div>
        </article>
        <article>
            <button id="orderButton">Place Car Order</button>
        </article>
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}  
            </article>`
}

// addevent listener for submit button
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("orderButton")) {
          addCustomOrder()
        }
    }
)