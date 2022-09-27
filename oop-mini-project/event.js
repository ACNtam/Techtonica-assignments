class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
    // method in classes https://www.w3schools.com/Js/js_classes.asp
    addAvailableTickets(name, price) {
        //create new ticket object
        let ticketObj = new TicketType(name, price)
        //add ticket to available tickets
        this.availableTickets.push(ticketObj);
    }
    allTickets() {
        // #5 & #6return "All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)"
        let message = this.name + " - " + this.description + " - " + "All tickets: ";
        let count = 1
        //function passed as an arguement inside another function
        this.availableTickets.forEach((item) => {
            message += count + ". " + item.name + " " + `(${item.price})`
            count++
        })
        return message
    }
    // #7 use same method as #5
    searchTickets(lower, upper) {
        let message = this.name + " - " + this.description + " - " + "Eligible tickets: ";
        let count = 1
        //function passed as an arguement inside another function
        this.availableTickets.forEach((item) => {
            // if statement o specify the lower and upper bounds of a price range
            if (item.price >= lower && item.price <= upper) {
                message += count + ". " + item.name + " " + `(${item.price})`
                count++
            }
        })
        //no tickets are available in that range
        if (count === 1) {
            return "No tickets available."
        }
        return message
    }
}


// #4 The below statement creates an object.
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
);
//#5
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

//#6
const eventArray = new Array();

//#7
// pushing single object to an array
eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

//#8
// in order to check whether the elements are pushed, use console.log
console.log(eventArray);

//#9
document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    //looping through each event array item
    eventArray.forEach((item) => {
        //add item name and item description to the html string(string concatnation)
        //innerhtml
        html += `<li>${item.name} - ${item.description}`;
    });
    //querySelector is selctin event and we populate using innerhtml
    document.querySelector('#event').innerHTML = html;
});

class TicketType {
    //this will return an object https://www.w3schools.com/js/js_this.asp
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// invoking a method addAvailabeTickets to our availble ticket array, event class object1,object2,object3
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

eventObj1.allTickets();