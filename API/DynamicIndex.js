fetch('http://localhost:3000/store/products/getallproducts').then((data)=>{
    return data.json();
}).then((completedata)=>{
    // document.getElementById('root').
    // innerHTML=completedata
    // let data1="";
completedata =completedata.slice(0,16);
completedata.map((values)=>{
    document.getElementById("laptops").innerHTML+=`<div class="card rounded-4 m-5 p-0 col-sm-12 d-flex   "style="width: 15rem;height: 38rem;" >
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

    document.getElementById("laptops").innerText = data1;
}).catch((err)=>{
    console.log(err);
});







// fetch('').then((data)=>{
//     return data.json();
// }).then((completedata)=>{
//     // document.getElementById('root').
//     // innerHTML=completedata
//     let data1="";
//     number = 1
// // completedata =completedata.slice(17,22);
// completedata.map((values)=>{
//         number += 1
//         data1 += `<tr>
//             <td class="pt-2">${number}</td>
//             <td class="pt-2">
//               <img
//                 src=${values.image_url}
//                 style="width: 70px"
//               />
//             </td>
//             <td>${values.name}</td>
//             <td class="pt-2 pl-4">
//               <a href="#"><i class="far fa-times-circle"></i></a>
//             </td>
//             <td class="pt-2">${values.price}</td>
//           </tr>`
//     });

//     document.getElementById("laptops").innerHTML=data1;
// }).catch((err)=>{
//     console.log(err);
// });
