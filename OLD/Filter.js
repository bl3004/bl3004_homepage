console.log('this works');

const projects = [
    {
        image:
        "./FilterImage/01.jpg",
        name: "RYTHEM UTOPIA",
        year: "2023-NOW",
        time:"2023",
        location:"Atlanta, USA",
        description: "Concept - GSAPP Studio Project - Main Designer"
    },
    {
        image:
        "./FilterImage/02.jpg",
        name: "CAMPUS",
        year: "2021-2022",
        time:"2022",
        location:"China",
        description: "Concept - RMJM Professional Project - Designer"
    },
    {
        image:
        "./FilterImage/03.jpg",
        name: "OFFICE TOWER",
        year: "2021-2022",
        time:"2022",
        location:"China",
        description: "Concept - RMJM Professional Project - Main Designer"
    },
    {
        image:
        "./FilterImage/04.jpg",
        name: "CAMPUS",
        year: "2021-2022",
        time:"2021",
        location:"China",
        description: "Built - RMJM Professional Project - Designer & Main Coordinator"
    },
    {
        image:
        "./FilterImage/04B.jpg",
        name: "HONGANWEI COMPLEX",
        year: "2021-2022",
        time:"2021",
        location:"China",
        description: "Concept - RMJM Professional Project - Designer"
    },
    {
        image:
        "./FilterImage/04C.jpg",
        name: "DAYUN TOD",
        year: "2021-2022",
        time:"2021",
        location:"China",
        description: "Concept - RMJM Professional Project - Designer"
    },
    {
        image:
        "./FilterImage/05.jpg",
        name: "CAMPUS",
        year: "2021-2022",
        time:"2021",
        location:"China",
        description: "Concept - RMJM Professional Project - Designer"
    },
    {
        image:
        "./FilterImage/06.jpg",
        name: "CAMPUS",
        year: "2021-2022",
        time:"2021",
        location:"China",
        description: "Concept - RMJM Professional Project - Designer"
    },
    {
        image:
        "./FilterImage/07.jpg",
        name: "YOUTUBE Headquarter",
        year: "2018-2021",
        time:"2020",
        location:"CA, USA",
        description: "Built - EHDD Professional Project - Designer & Coordinator"
    },
    {
        image:
        "./FilterImage/08.jpg",
        name: "SSU Stevenson Hall Renovation",
        year: "2018-2021",
        time:"2020",
        location:"CA, USA",
        description: "Built - EHDD Professional Project - Designer & Coordinator"
    },
    {
        image:
        "./FilterImage/09.jpg",
        name: "CSU Vasche Library Renovation",
        year: "2018-2021",
        time:"2019",
        location:"CA, USA",
        description: "Built - EHDD Professional Project - Designer & Coordinator"
    },
    {
        image:
        "./FilterImage/10.jpg",
        name: "Dartmouth College Anonymous Hall Renovation",
        year: "2018-2021",
        time:"2018",
        location:"MH, USA",
        description: "Built - LWA Professional Project - Designer & Coordinator"
    },
    {
        image:
        "./FilterImage/11.jpg",
        name: "Transit-oriented Innovative Hub",
        year: "2015-2017",
        time:"2017",
        location:"Saint Louis, USA",
        description: "Concept - Degree Project - Personal"
    },
    {
        image:
        "./FilterImage/12.jpg",
        name: "Urban Corridor",
        year: "2015-2017",
        time:"2016",
        location:"Seoul, Korea",
        description: "Concept - Graduate Project - Personal"
    },
    {
        image:
        "./FilterImage/13.jpg",
        name: "The Levee House",
        year: "2015-2017",
        time:"2015",
        location:"New Orleans, USA",
        description: "Concept - Graduate Project - Personal"
    },
    {
        image:
        "./FilterImage/14.jpg",
        name: "Lingnan Food Center",
        year: "2010-2014",
        time:"2013",
        location:"GZ, China",
        description: "Concept - Undergraduate Project - Personal"
    },
    {
        image:
        "./FilterImage/15.jpg",
        name: "",
        year: ".",
        description: ""
    },





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


       

        //  year
        let year = document.createElement("p");
        year.textContent = projects[i].year;

        // time
        let time = document.createElement("p");
        time.textContent = projects[i].time;

        // location
        let location = document.createElement("p");
        location.textContent = projects[i].location;

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
        list_item.appendChild(time)
        list_item.appendChild(location)
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
  