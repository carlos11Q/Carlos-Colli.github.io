const imgArray = [
    './img/1.jpeg',
    './img/2.jpeg',
    './img/3.jpeg',
    './img/4.jpeg',
    './img/5.jpeg',
    './img/6.jpeg',
    './img/7.jpeg',
    './img/8.jpeg',
    './img/9.jpeg',
    './img/10.jpeg',
    './img/11.jpeg',
    './img/12.jpeg'
]

const imagen = document.getElementById('slide')
let i = 0

const slideShow = () =>{
    imagen.src = imgArray[i]
    i (i < imgArray.length - 1) ? i+1 : 0
}

const interval = () =>{
    setInterval( slideShow, 100)
}