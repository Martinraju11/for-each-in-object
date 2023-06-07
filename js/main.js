const car = [{
    name: "i10",
    price: 100000,
    color: "red",
    varient: "diesel"
},
{
    name: "brezza",
    price: 1500000,
    color: "black",
    varient: "diesel"
},
{
    name: "alto",
    price: 100000,
    color: "white",
    varient: "petrol"
},
{
    name: "city",
    price: 1800000,
    color: "white",
    varient: "petrol"
}
];


car.forEach(function (e) {
    {
        if (e.price > 1200000) {
            document.write(`${e.name}- Too costly`, "<br>");
        }
        else {
            document.write(`${e.name} - Affordable`, "<br>");
        }
    }
})
document.write("<br>");

car.forEach(function (e) {
    for (let key in e) {
        if (key == "varient") {
            if (e[key] == "petrol") {
                document.write(`${e.name} runs on petrol`, "<br>");
            }
        }

    }
})

