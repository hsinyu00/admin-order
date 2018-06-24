// 產假資料

let revenueArray = [];
let costArray = [];
let netArray = [];
let totalRevenue = 0,
    totalCost = 0,
    netIncome = 0;

for (var i = 0; i < 6; i++) {
    let rev = faker.commerce.price() * 50;
    let cost = faker.commerce.price() * 20;

    revenueArray.push(rev);
    totalRevenue = totalRevenue + rev;

    costArray.push(cost);
    totalCost = totalCost + cost;
}

netArray = revenueArray.map((item, i) => {
    return item - costArray[i];
});
netIncome = totalRevenue - totalCost;

// Latest Order
let orderArray = [];
function Order(index) {
    this.imgSrc = 'http://lorempixel.com/300/300/fashion?' + 'v' + index,
        this.productName = faker.commerce.productName();
    this.date = faker.date.past().toDateString();
    this.userName = faker.name.firstName() + ' ' + faker.name.lastName();
    this.total = parseInt(faker.commerce.price() * 10, 10);
}
for (var i = 0; i < 4; i++) {
    let order = new Order(i);
    orderArray.unshift(order);
}