"use strict";
function getOrderMessage(status) {
    switch (status) {
        case "Placed":
            return "Your order has been placed.";
        case "Preparing":
            return "Your food is being prepared.";
        case "Outfordelivery":
            return "Your food is out for delivery.";
        case "Delivered":
            return "Your order has been delivered.";
        case "Cancelled":
            return "Your order has been cancelled.";
    }
}
console.log(getOrderMessage("Preparing"));
