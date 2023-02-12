fetch('http://localhost:3000/cart/viewitems').then((data)=>{
    return data.json();
}).then((completedata)=>{
    // document.getElementById('root').
    // innerHTML=completedata
    let data1="";
    number = 1
// completedata =completedata.slice(17,22);
completedata.map((values)=>{
        const product_id = values.product_id
        const response =  fetch("http://localhost:3000/store/products/getproduct",{
            method: "GET",
            body: JSON.stringify({ product_id }),
            redirect: 'manual',
            headers: {
              "Content-Type": "application/json",
                },
            });
        console.log(response); 
        number += 1
        document.getElementById("laptops").innerHTML += `<tr>
            <td class="pt-2">${number}</td>
            <td class="pt-2">
              <img
                src=${values.image_url}
                style="width: 70px"
              />
            </td>
            <td>${values.name}</td>
            <td class="pt-2 pl-4">
              <a href="#"><i class="far fa-times-circle"></i></a>
            </td>
            <td class="pt-2">${values.price}</td>
          </tr>`
    });

    ;
}).catch((err)=>{
    console.log(err);
});