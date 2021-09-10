
const parseClient = (string) => {
    var listForObjectValues = string.split(" ");
    var voyagesObjectForOneClient = {};
    voyagesObjectForOneClient["client"] = listForObjectValues[0];
    voyagesObjectForOneClient["start"] = parseInt(listForObjectValues[1]);
    voyagesObjectForOneClient["duration"] = parseInt(listForObjectValues[2]);
    voyagesObjectForOneClient["price"] = parseInt(listForObjectValues[3]);
    voyagesObjectForOneClient["end"] = voyagesObjectForOneClient["duration"] + voyagesObjectForOneClient["start"];
    return voyagesObjectForOneClient;
}

const clientsOfDay = () => {
    var listOfClients = ["Roger 0 5 10", "Pongo 3 7 14", "Perdita 8 10 8", "Anita 16 3 7"];
    var voyagesObjectForDay = [];
    for (var i = 0; i < listOfClients.length; i++) {
        voyagesObjectForDay.push(parseClient(listOfClients[i]));
    }
    return voyagesObjectForDay;
}

const paiementOfDay = (list) => {
    var priceOfDay = 0;
    for (let i = 0; i < list.length; i++) {
        priceOfDay += list[i]["price"];
    }
    return priceOfDay;
}

const compatibilityBetweenTwoObject = (object1, object2) => {
    return !(object1["end"] >= object2["start"])
}

const compatibilityListOfObject = (list) => {
    var listOfCompatibilty = [];
    list.map((objectForOneClient) => {
        for (var elem of list) {
            if (compatibilityBetweenTwoObject(objectForOneClient, elem) == true) {
                listOfCompatibilty.push([objectForOneClient, elem]);
            }
        }
    });
    return listOfCompatibilty;
}
console.log(compatibilityListOfObject(clientsOfDay()));


