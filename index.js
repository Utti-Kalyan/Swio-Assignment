let navbar = document.getElementById("navbar");
let navbar1 = document.getElementById("navbar1");

window.onscroll = function () {
    let top = window.scrollY;
    console.log(top)
    if (top > 1) {
        navbar.classList.add("d-none");
        navbar1.classList.remove("d-none");

    }
    else {
        navbar.classList.remove("d-none");
        navbar1.classList.add("d-none")
    }

}

const goodHandsCardArray = [
    {
        image: "./images/good-hands-icon1.svg",
        title: '24/7',
        description: "Customized Medical Services"
    },
    {
        image: "./images/good-hands-icon2.svg",
        title: '100+',
        description: "Skilled & Experienced Doctors"
    },
    {
        image: "./images/good-hands-icon3.svg",
        title: '120+',
        description: "Exclusive Partner Hospitals"
    },
    {
        image: "./images/good-hands-icon4.svg",
        title: '100+',
        description: "Surgeries Everyday"
    },
]
function cardGeneration(data) {
    let goodHandsContainer = document.querySelector(".good-hands-card-container");

    let cardEle = document.createElement('div');
    cardEle.classList.add("good-hands-card")

    let cardImg = document.createElement('img')
    cardImg.src = data.image
    cardEle.appendChild(cardImg)

    let cardContent = document.createElement("div");
    cardContent.classList.add('good-hands-cardcontent')
    cardEle.appendChild(cardContent);

    let cardTitle = document.createElement("h3");
    cardTitle.textContent = data.title;
    cardTitle.classList.add("good-hands-card-title")

    cardContent.appendChild(cardTitle);

    let cardDescription = document.createElement('p');
    cardDescription.textContent = data.description;
    cardDescription.classList.add("good-hands-card-description");

    cardContent.appendChild(cardDescription);

    goodHandsContainer.appendChild(cardEle);

}

goodHandsCardArray.map((eachcard) => {
    cardGeneration(eachcard)
    console.log(eachcard)
})



const whyOptArray = [
    {
        image: "./images/why-surgicare-icon-1.svg",
        title: 'Restore Clear Vision'
    },
    {
        image: "./images/why-surgicare-icon-2.svg",
        title: 'Bladeless & Painless Procedure'
    },
    {
        image: "./images/why-surgicare-icon-3.svg",
        title: 'Easy EMI Options'
    },
    {
        image: "./images/why-surgicare-icon-4.svg",
        title: 'Free Second Opinion'
    },
    {
        image: "./images/why-surgicare-icon-5.svg",
        title: 'Additional PharmEasy Benefits'
    },
    {
        image: "./images/why-surgicare-icon-6.svg",
        title: 'Min. 20% Savings on Total Cost'
    }

]
let whyOptCardContainer = document.querySelector(".why-opt-card-container")
function whyOptCardGeneration(data) {
    let whyOptCard = document.createElement("div")
    whyOptCard.classList.add("why-opt-card")

    let whyOptImg = document.createElement("img");
    whyOptImg.src = data.image;
    whyOptImg.classList.add("why-opt-img")

    whyOptCard.appendChild(whyOptImg);

    let whyOptTitle = document.createElement("h3");
    whyOptTitle.classList.add("why-opt-card-title")
    whyOptTitle.textContent = data.title;

    whyOptCard.appendChild(whyOptTitle)

    whyOptCardContainer.appendChild(whyOptCard);

}
whyOptArray.map((eachcard) => {
    whyOptCardGeneration(eachcard)
})

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })

});

const askedQue = document.querySelectorAll('.question-card-container')

askedQue.forEach((eachfaq) => {
    eachfaq.addEventListener("click", () => {
        eachfaq.classList.toggle("active");
    })
})
