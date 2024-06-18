// const {calculateTotal} = require("../calculate.js")

// // test("basic test", () => {
// //     const result = 4;
// //     expect(result).toBe(4)
// // }) 

test('calculateTotal sum without discount', () => {
    const list = [
        {
            id: 123,
            name: "Война и мир",
            count: 3,
            price: 400
        },
        {
            id: 122,
            name: "JS",
            count: 1,
            price: 1200
        }
    ]

    const result = calculateTotal(list)
    expect(result).toBe(2400)
}) 


import {calculateTotal} from "../calculate.js"

test('calculateTotal sum with discount', () => {
    const list = [
        {
            id: 123,
            name: "Война и мир",
            count: 3,
            price: 401
        },
        {
            id: 122,
            name: "JS",
            count: 1,
            price: 1200
        }
    ]

    const result = calculateTotal(list, true)
    expect(result).toBeCloseTo(2141.07)
}) 