fetch('http://localhost:3000/store/products/getallproducts').then((data)=>{
    return data.json();
}).then((completedata)=>{
    // document.getElementById('root').
    // innerHTML=completedata
    let data1="";
const cardList = document.getElementsByClassName('card-list');
completedata =completedata.slice(0,16);
completedata.map((values)=>{
        data1 += ` <div class="cart-holder card rounded-4 "style="width: 15rem;height: 35rem;" >
            <div class="card-body">
              <img class="card-img-top rounded-4" src=${values.image_url} alt="dell"/>

            <h5 class="card-title">
                ${values.name}
            </h5>

            <h6 class="card-text">
            ${values.description}
            </h6>

            <div class="star text-warning">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
            </div>

            <h2 class="text-info font-weight-bold">${values.price}</h2>
            <button class="cart btn btn-lg w-100 btn-info" onClick='buttonClick(${values.product_id})' id="${values.product_id}">Add to cart</button>
         </div>
         </div>`
    });
    document.getElementById("laptops").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
});


