console.log('this works');

const projects = [
    {
        image:
        "./FilterImage/01.jpg",
        name: "RYTHEM UTOPIA",
        year: "1970s",
        description: ".."
    },
    {
        image:
        "./FilterImage/02.jpg",
        name: "..",
        year: "1970s",
        description: ".."
    },
    {
        image:
        "./FilterImage/03.jpg",
        name: "..",
        year: "1970s",
        description: ".."
    }




];


// grab the ul
const ul = document.querySelector('ul');
const filterBtns = document.querySelector('.filters');
const cards = document.getElementsByClassName('card');


// write fuction
const renderProjectsToPage = (items) => {
    for(let i =0; i<items.length; i++)
    {
        console.log(items[i]);

        // create a list item
        let list_item = document.createElement("li");
        list_item.classList.add("card",projects[i].year, `item--${i + 1}`)




        //  name
        let title = document.createElement("h2");

        title.textContent = projects[i].name;


       

        //  color
        let year = document.createElement("p");
        year.textContent = projects[i].year;



        //  image
        let image = document.createElement("img");
        image.setAttribute("src", projects[i].image);




        let description = document.createElement("p");
    description.classList.add("description");
    description.textContent = projects[i].description;





        // append to page
        ul.appendChild(list_item)
        list_item.appendChild(title)
        // list_item.appendChild(year)
        list_item.appendChild(image)
        list_item.appendChild(description)

    }
}

// pass data into it

renderProjectsToPage(projects)


const filterFn = (event) => {
    // console.log(event)
    console.log(event.target)

     
    if(event.target.classList.contains('filter-btn')){
        let active = filterBtns.querySelector('.active');
        active.classList.remove('active')

        event.target.classList.add('active')

        const filterValue = event.target.getAttribute("data-filter")
        console.log(filterValue)


        for(let i =0; i< cards.length; i++){
            if(cards[i].classList.contains(filterValue) || filterValue === "all"){
                cards[i].classList.remove('hide');
                cards[i].classList.add('show');
            }else{
                cards[i].classList.remove('show');
                cards[i].classList.add('hide');
            }
            }

        }

    }


filterBtns.addEventListener('click', filterFn)




window.onscroll = function () {
    showBackToTopButton();
};

function showBackToTopButton() {
    var button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}














  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
    
        this.classList.toggle('is-flipped');
      });
    });
  });
  