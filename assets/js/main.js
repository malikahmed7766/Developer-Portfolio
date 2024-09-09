const PortfolioItem = Array.from(document.getElementsByClassName("portfolio-item"));
const ImagGallery = [
    {
        imgSrc: "../assets/img/portfolio/app-1.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/books-1.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/branding-1.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/product-1.jpg"
    },

    {
        imgSrc: "../assets/img/portfolio/app-2.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/books-2.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/branding-2.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/product-2.jpg"
    },
    
    {
        imgSrc: "../assets/img/portfolio/app-3.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/books-3.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/branding-3.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/product-3.jpg"
    },

    {
        imgSrc: "../assets/img/portfolio/app-4.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/books-4.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/branding-4.jpg"
    },
    {
        imgSrc: "../assets/img/portfolio/product-4.jpg"
    },

]

PortfolioItem.forEach((element , index) => {
    console.log(element , index);
    element.querySelector(".preview-link").href = ImagGallery[index].imgSrc;
    element.querySelector(".preview-link").setAttribute("target" , "_blank");
});