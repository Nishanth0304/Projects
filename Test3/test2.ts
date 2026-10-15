type orderstatus = "Placed" | "Preparing" | "Outfordelivery" | "Delivered" | "Cancelled";

function getordermessage(status: orderstatus): string {
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
console.log(getordermessage("Preparing"));