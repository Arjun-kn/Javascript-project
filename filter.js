const data = [
    {
        id:1,
        name:"Acnos",
        img:"https://m.media-amazon.com/images/I/81PZBKpAx-L._AC_UL480_FMwebp_QL65_.jpg",
        price:'375',
        cat:'Dress'

    },
    {
        id:2,
        name:"Seiko",
        img:"https://m.media-amazon.com/images/I/71C7ihi3wVS._AC_UL480_FMwebp_QL65_.jpg",
        price:'28,427',
        cat:'Dress'

    },

    {
        id:3,
        name:"Carlein",
        img:"https://m.media-amazon.com/images/I/51lMxw1NH0L._AC_UL480_QL65_.jpg",
        price:'6,024',
        cat:'Casual'

    },

    {
        id:4,
        name:"Timewear",
        img:"https://m.media-amazon.com/images/I/81nj6IlZpVL._AC_UL480_FMwebp_QL65_.jpg",
        price:'375',
        cat:'Casual'

    },

    {
        id:5,
        name:"Fossil",
        img:"https://m.media-amazon.com/images/I/81eMDGQJxkL._AC_UL480_FMwebp_QL65_.jpg",
        price:'7,497',
        cat:'Casual'

    },
    
    {
        id:6,
        name:"Casio",
        img:"https://m.media-amazon.com/images/I/71jAvJ1u5oL._AC_UL480_QL65_.jpg",
        price:'8,795',
        cat:'sport'

    },
    {
        id:7,
        name:"V2A",
        img:"https://m.media-amazon.com/images/I/61Jzj6BxjQL._AC_UL480_QL65_.jpg",
        price:'1,090',
        cat:'sport'

    },
    {
        id:8,
        name:"Tommy Hilfiger",
        img:"https://m.media-amazon.com/images/I/71akq-jRnQS._AC_UL480_QL65_.jpg",
        price:'5,775',
        cat:'sport'

    },
    {
        id:9,
        name:"OLEVS",
        img:"https://m.media-amazon.com/images/I/61gGGV2XPyL._AC_UL480_QL65_.jpg",
        price:'2,890',
        cat:'Luxury'

    },

    {
        id:10,
        name:"Casio",
        img:"https://m.media-amazon.com/images/I/61IlwQIwyxL._AC_UL480_QL65_.jpg",
        price:'5,995',
        cat:'Luxury'

    },

    {
        id:11,
        name:"Fossil",
        img:"https://m.media-amazon.com/images/I/81q-86EVPBL._AC_UL480_QL65_.jpg",
        price:'14,495',
        cat:'Luxury'

    },
    
    

]


const productContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")


const displayProducts = (filterProducts)=>{
    productContainer.innerHTML= filterProducts.map(product=>(
        `<div class="product">
        <img  class="trans" src=${product.img}
        alt=""
        />
        <span class="name">${product.name}</span>
        <span class="priceText">₹${product.price}</span>
        </div>
        `
    )).join("");
}

displayProducts(data)

searchInput.addEventListener("keyup",(e)=>{
    const value = e.target.value.toLowerCase();

    if(value){
        displayProducts(data.filter(item=>item.name.toLowerCase().indexOf(value) !== -1))
    }else{
        displayProducts(data)
    }
})

const setCategories = () =>{
    const allCats = data.map(item=>item.cat)
    const categories=['All',...allCats.filter((item,i)=>{
        return allCats.indexOf(item)==i
    })];

    categoriesContainer.innerHTML= categories.map(cat=>
        `
        <span class="cat">${cat}</span>
        `).join("")

        categoriesContainer.addEventListener("click",(e)=>{
            const selectedCat = e.target.textContent;

            selectedCat === "All"
            ? displayProducts(data)
            :displayProducts(data.filter((item)=>item.cat===selectedCat))
        });
   
}


const setPrice = () =>{
    const priceList = data.map((item)=> parseInt(item.price.replace(/,/g, '')));;
    console.log(priceList)
    const minPrice = Math.min(...priceList)
    console.log(minPrice)
    const maxPrice = Math.max(...priceList)

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice
    priceValue.textContent = "₹" + maxPrice

    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent = "₹" + e.target.value; 
        displayProducts(data.filter((item)=> parseInt(item.price.replace(/,/g, '')) <= parseInt(e.target.value)))
    })

};
setCategories()
setPrice()


