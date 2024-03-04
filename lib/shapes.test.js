const {Circle, Triangle, Square} = require("./shapes")

test("Circle render method renders circle tag", ()=>{
    const expectedShape = `<circle cx="150" cy="100" r="80" fill="blue" />`
    const shape = new Circle("blue").render()

    expect(expectedShape).toBe(shape)
})

test("Triangle render method renders triangle tag", () =>{
    const expectedShape = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    const shape = new Triangle("green").render()

    expect(expectedShape.toBe(shape))
})