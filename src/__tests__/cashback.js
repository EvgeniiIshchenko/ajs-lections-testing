import calculateCashback from "../cashback.js"

test("cashback at sum: 500", () => {
    const result = calculateCashback(500);
    expect(result).toBe(0)
    
})

// const dataList = [
//     ["gold", 1000000, 50000],
//     ["silver", 10000, 200],
//     ["regular", 1000, 10],
//     ["no", 500, 0],
// ]


// const handler = test.each(dataList);


// handler("Testing cashback with %s status and %i ammount", (status, ammount, expected) => {
//     const result = calculateCashback(ammount)
//     expect(result).toBe(expected)
// })

test.each([
    ["gold", 1000000, 50000],
    ["silver", 10000, 200],
    ["regular", 1000, 10],
    ["no", 500, 0],
])
("Testing cashback with %s status and %i ammount", (status, ammount, expected) => {
    const result = calculateCashback(ammount)
    expect(result).toBe(expected)
})