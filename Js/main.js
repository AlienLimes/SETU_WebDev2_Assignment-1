

// code for about page search bar and return data, used card example

const form = document.querySelector('form');


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let name = form.elements.name.value;
    let filtered_coptions = coptions.filter(colours => colours.name.toLocaleLowerCase().includes(name.toLowerCase()));
    let cpalette = document.querySelector('.cpalette');
    cpalette.innerHTML = '';

    if (filtered_coptions.length === 0) {
        cpalette.innerHTML = '<p class="text-red-400">No colors found matching "' + name + '"</p>';
        return;
    }



    filtered_coptions.forEach(colour => document.querySelector('.cpalette').insertAdjacentHTML('beforeend',
        `<div class="card">
    <img src="${colour.image}" alt="${colour.name}" >
    <div class="text">
    <h3>${colour.name}</h3>
   <p>${colour.name} has the following shades: <b>${colour.shades}</b>
     </p>
	  <p>${colour.name} has also compatible colurs such as:  ${colour.compatible_colours}</p>
    </div>
   </div>`
    ));



    form.reset();

});
const coptions = [
    {
        "name": "Red",
        "shades": ["crimson", "carmine", "burgundy", "coral", "scarlet", "chili red", "vermilion", "cardinal", "cherry"],
        "image": "images/red.jpg",
        "compatible_colours": ["white", "black", "blue", "green", "neutrals"]
    },
    {
        "name": "Black",
        "shades": ["onyx", "charcoal", "jet black", "ebony", "black chocolate", "midnight blue", "licorice", "asphalt", "jungle green"],
        "image": "images/black.jpg",
        "compatible_colours": ["white", "black", "blue", "green", "neutrals"]
    }
]

///////////////////////////////////////////////////////////////////////////////////////////