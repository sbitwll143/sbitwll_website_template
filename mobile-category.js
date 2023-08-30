let products = [
    {
        name: 'Samsung M12',
        image1: './assets/images/samsung/m12-1.png',
        image2: './assets/images/samsung/m12-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Samsung M12',
        image1: './assets/images/samsung/m12-1.png',
        image2: './assets/images/samsung/m12-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Samsung A52',
        image1: './assets/images/samsung/A52-1.png',
        image2: './assets/images/samsung/A52-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Samsung M12',
        image1: './assets/images/samsung/m12-1.png',
        image2: './assets/images/samsung/m12-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Samsung M12',
        image1: './assets/images/samsung/m12-1.png',
        image2: './assets/images/samsung/m12-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Samsung M12',
        image1: './assets/images/samsung/m12-1.png',
        image2: './assets/images/samsung/m12-2.png',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./individualPage.html" target="_blank" class="btn-flat btn-hover btn-shop-now">shop now</a>
                       
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                        <span class="rating mt-5">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                    </span>
                    </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))