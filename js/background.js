const images = [
    "backgroundImg_1.jpeg"
    , "backgroundImg_2.jpeg"
    , "backgroundImg_3.jpeg"
    , "backgroundImg_4.jpeg"
    , "backgroundImg_5.jpeg"
    , "backgroundImg_6.jpeg"
    , "backgroundImg_7.jpeg"
];
const changeBtn = document.querySelector("#changeBtn button");

function changeBodyImage() {
    const changeImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(img/${changeImage})`;
}

changeBodyImage();
changeBtn.addEventListener("click", changeBodyImage);
