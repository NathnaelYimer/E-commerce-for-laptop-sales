function buttonClick(product_id) {
    const response = fetch("http://localhost:3000/cart/add", {
                    method: "Get",
                    body: JSON.stringify({product_id}),
                    redirect: 'manual',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    alert("added");
                } else {
                alert("failed");
}
}