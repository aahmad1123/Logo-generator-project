class Shape {
//    todo: move color constructors back into parent shape
    constructor(color){
        this.color = color
    }
}

// following 3 functions render shape and color
class Circle extends Shape{
    

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
//const circle = new Circle().setColor("blue").render()

class Square extends Shape{

    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}
class Triangle extends Shape{

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}




module.exports = { Circle, Triangle, Square };