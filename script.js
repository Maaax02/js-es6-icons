
const icons =
[

    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'

    },

    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'

    },

    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'

    },

    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'

    },

    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'

    },

    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'

    },

    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'

    },

    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'

    },

    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'

    },

    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'

    },

    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'

    },

    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'

    },

    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'

    },

    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'

    },

    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'

    },

    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'

    }

];



const box = document.querySelector('.container')

function create(icon){
return ` <div class="icons-container">
<i class="${icon.family} ${icon.prefix}${icon.name} ${icon.color}"></i>
<div class"text"><p>${icon.name}</p></div>
</div> `
}
    icons.forEach(function(icon) {
        box.innerHTML += 
        create(icon);
    })


    function showIcons(container, iconList){
       container.innerHTML = ''
       iconList.forEach((icon) => {
           container.innerHTML += create(icon);
       })
    }

    showIcons(box, icons)
    let select = document.getElementById('select');

    select.addEventListener('change', function(){

        const filtered = icons.filter((icon) => {
            return this.value === '' || icon.type === this.value
        })
        showIcons(box, filtered)
    })