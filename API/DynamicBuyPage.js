fetch('http://localhost:3333/store/products/getallproducts').then((data)=>{
    return data.json();
}).then((completedata)=>{
    // document.getElementById('root').
    // innerHTML=completedata
    // let data1="";
completedata =completedata.slice(16,24);
completedata.map((values)=>{
    document.getElementById("laptopBuy").innerHTML +=`<div class="card rounded-4 m-5 p-0 col-sm-12 d-flex   "style="width: 15rem;height: 38rem;" >
            <div class="card-body">
                
              <img class="card-img-top  rounded-4" src=${values.image_url} alt="dell"/>

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
            </div>

            <a href="specificproduct.html" class="w-100 align-self-end m-0"><button type="button" class="btn btn-info  w-100" onclick=buttonclick"(${id=values.product_id})" id="${values.product_id}">ADD to Cart</button> </a> 
         </div>`
         
    });
}).catch((err)=>{
    console.log(err);
});
