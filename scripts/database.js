const database = {
    PaintColor: [
        { id: 1, color: "Silver", price: 600 },
        { id: 2, color: "Midnight Blue", price: 550 },
        { id: 3, color: "Firebrick Red", price: 750 },
        { id: 4, color: "Spring Green", price: 450 }
    ],
    Interiors: [
        { id: 1, seatType: "Beige Fabric", price: 650 },
        { id: 2, seatType: "Charcoal Fabric", price: 795 },
        { id: 3, seatType: "White Leather", price: 1000 },
        { id: 4, seatType: "Black Leather", price: 1000 }
    ],

    Technology: [
        { id: 1, dashboard: "Basic Package", price: 850 },
        { id: 2, dashboard: "Navigation Package", price: 1100 },
        { id: 3, dashboard: "Visibility Package", price: 1450 },
        { id: 4, dashboard: "Ultra Package", price: 1750 }
    ],
    Wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 600 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 600 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 900 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 900 }
    ],
    orderBuilder: {

    },
    CarPackages: [{
        id: 1,
        InteriorId: 2,
        PaintId: 3,
        WheelId: 2,
        TechId: 3,
        timestamp: 1614659931693
    }
    ]
}
///////////////////////////////// get functions for modules
export const getPaintColor = () => {
    return database.PaintColor.map(paint => ({ ...paint }))
}
export const getInterior = () => {
    return database.Interiors.map(interior => ({ ...interior }))
}
export const getTechnology = () => {
    return database.Technology.map(Technology => ({ ...Technology }))
}
export const getWheels = () => {
    return database.Wheels.map(Wheel => ({ ...Wheel }))
}
export const getOrders = () => {
    return database.CarPackages.map(CarPackage =>({ ...CarPackage}))
}
//////////////////////////////////// set funtions for CarPackage
export const setPaintColor = (id) => {
    database.orderBuilder.PaintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.InteriorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.TechId = id
}

export const setWheel = (id) => {
    database.orderBuilder.WheelId = id
}
///////////////////////////////// funtion to push temp state order to carpackage
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.CarPackages.length - 1
    newOrder.id = database.CarPackages[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.CarPackages.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}