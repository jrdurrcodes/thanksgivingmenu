/**
 * load items
 * select items
 * return selected items
 * 
 */

class MenuForm {

    constructor()   {
        //access DOM elements
        this.person = document.getElementById('person').value
        this.meatRow = document.getElementById('meatRow')
        this.sidesRow = document.getElementById('sidesRow')
        this.dessertsRow = document.getElementById('dessertsRow')
        this.drinksRow = document.getElementById('drinksRow')
        this.foodList = document.getElementById('foodList')

        this.rows = [
            this.meatRow,
            this.sidesRow,
            this.dessertsRow,
            this.drinksRow
        ]

        //create array of food items
        this.menu = [
            {
                id:1,
                type: 'meat',
                item:'fried_turkey.jpeg',
                imgUrl: 'friedturkey.jpeg',
                isChecked: 'false',
                madeBY: 'Bridget'
            },
            {
                id: 2,
                type: 'meat',
                item: 'oven turkey',
                imgUrl: 'ovenroastedturkey.jpeg',
                isChecked: false,
                madeBY: 'Mrs Alice'
            },
            {
                id: 3,
                type: 'meat',
                item: 'ham',
                imgUrl: 'ham.jpeg',
                isChecked: false,
                madeBY: 'Cousin Alexia'
            },
            {
                id: 4, 
                type: 'meat',
                item: 'turducken',
                imgUrl: 'turderken.jpeg',
                isChecked: false,
                madeby: 'Uncle Alex'
            },
            {
                id: 5,
                type: 'sides',
                item: 'maccaroni',
                imgUrl: 'maccaroni.jpeg',
                isChecked: false,
                madeBy: 'Aunt Shirley'
            },
            {
                id: 6, 
                type: 'sides',
                item: 'blackeye peas',
                imgUrl: 'blackeyepeas.jpeg',
                isChecked: false,
                madeBy: 'Sonya'
            },
            {
                id: 7,
                type: 'sides',
                item: 'collard greens',
                imgUrl: 'collardgreens.jpeg',
                isChecked: false,
                madeBY:'Louise'
            },    
            {

                id: 8,
                type: 'sides',
                item: 'yams',
                imgUrl:'candiedyams.jpeg',
                isChecked:'false',
                madeBy: 'Cousin Sue'
            },
            {
                id: 9,
                type: 'sides',
                item: 'friedcorn',
                imgUrl:'',
                isChecked: false
            },

        ]


            this.plate = {
                person: '',
                meat: [],
                sides: [],
                desserts: [],
                drinks: ''
                }
    }
            
    init() {
        // console.log('intialized')
        this.buildFigures(this.menu)
    }
            
    loadItems(el, child) {
        el.appendChild(child)

    }

    buildFigure(arr) {

        arr.forEach(obj => {
            //for each onject build figure
            // console.log(obj.hadOwnProperty('madeBy'))
            const column = document.createElement('div')
            column.classList.add('col')

            column.innHTML =`
            <div class="figure-div">
                            <figure class="figure item-figure">
                                <img src="http://via.placeholder.com/200x200" alt="placeholder img" class="img-fluid image food-image rounded" />
                                <figcaption class="figure-caption food-caption">${obj.hasOwnProperty('madeBy') ? obj.madeBy : ''}
                                </figcaption>
                                </figure>
                                <h3 class="food-heading">${obj.item}</h3>
                                <div class="form-check">
                                    <input 
                                        type="checkbox"
                                        name="${obj.type}" 
                                        id="${obj.type}-${obj.id}"
                                        value="${obj.item}"
                                        class="form-check-input"
                                    />
                                    <label 
                                        for="${obj.type}-${obj.id}" 
                                        class="text-capitalize form-check-label">${obj.item}
                                    </label>
                                </div>
                            </div>
                        </div>`            
            
                        // console.log(column)

                    // this.rows.forEach(row => { 
                    //     this.loadItems(row, column)
                    // })
                    switch (obj.type) {
                        case 'meat':
                            this.loadItems(this.meatRow, column)
                            break
                        case 'sides':
                            this.loadItems(this.sidesRow, column)
                            break
                        case 'desserts':
                            this.loadItems(this.dessertsRow, column)
                            break
                        case 'drinks':
                            this.loadItems(this.drinksRow, column)
                        break
                        default:
                            return "error"    
            }
        })
    }
            
    buildPlate() {
        const person = document.getElementById('person').value
        const checkboxes = document.querySelectorAll('input[type=checkbox]')
        const foodItems = document.querySelectorAll('.figure-div')

        checkboxes.forEach(checkbox => {
            const name = checkbox.name
            const value = checkbox.value
            if (checkbox.checked)   {
                //console.log(checkedbox.value)
                //console.log(name, value)
                this.plate = {
                ...this.plate,
                person:person,
                [name]: [...this.plate[name],value]

                }

                this.menu.forEach(item => {
                    if (checkbox.value == item[prop]) {
                        item.isChecked = checkbox.checked
                    }
                })
            }
        })
        //console.log(this.plate)

        const personPlate = document.getElementById('personplate')
        personPlate.innerText = `${this.plate.person}'s `
        
        this.makeReceipt(this.menu)
    }

    makeReceipt(obj) {
        if (obj.isChecked) {
            const listItem = document.createElement('li')
            listItem.classList.add('list-group-item')
            listItem.innerText = obj.item
            this. foodList.appendChild.foodList
        }
    }
    }
}


const submitBtn = document.getElementById('submitBtn')

const action = new MenuForm()
action.init()

submitBtn.addEventListener('click', () => {
    // console.log('click')
    action.buildPlate()
})

let obj = {
    a: 1, 
    b: 2, 
    c: 3
}

for (prop in obj) { 
    console.log(obj[prop] * 3)
}
