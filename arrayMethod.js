const product = [
    { name: 'laptop', Price: 25000, brand: 'MackBook Pro', color: 'Silver' },
    { name: 'Watch', Price: 2500, brand: 'Samsung', color: 'gray' },
    { name: 'Mobile', Price: 24000, brand: 'redmi pro', color: 'green' },
    { name: 'camera', Price: 250000, brand: 'canon', color: 'white' },
];
const brand = product.map(products => products.brand)
console.log(brand);
const prices = product.map(products => products.Price)
console.log(prices)

const name = product.map(products => products.name)
console.log(name);

// Using ForEach Method 
product.forEach(products => console.log(products))
product.forEach(products => console.log(products.color))
product.forEach(products => {

})

//3. Filter in the Array
const newProduct = product.filter(products => products.Price < 5000)
console.log(newProduct)

// Find in the Array 
const findObject = product.find(products => products.name.includes('c'))
console.log(findObject);
