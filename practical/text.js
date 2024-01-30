let prices=[15,5,20,8,7];
let weights=[3,4,6,8,2];
let cap=20;
class Product{
    constructor(price,weight){
        this.price=price;
        this.weight=weight;
        this.PerkgPrice=price/weight;
    }
}

function FreactionalKnapSack(products,cap){
    let Sorted=products.sort((a,b)=>(b.PerkgPrice-a.PerkgPrice));
    // console.log(Sorted)
    let totalProfit=0;
    let currentWeight=0;
    for(let item of Sorted){
        if(item.weight+currentWeight<=cap){
            currentWeight+=item.weight;
            totalProfit+=item.price;
        }
        else{
            let remainingWeight=cap=currentWeight;
            totalProfit=totalProfit+item.price*(remainingWeight/item.weight);
            break;
        }
    }
    return totalProfit;

}
let Products=[];

for (let i = 0; i < prices.length; i++) {
    Products.push(new Product(prices[i],weights[i]))
    
}

FreactionalKnapSack(Products,cap)
console.log(FreactionalKnapSack(Products,cap))