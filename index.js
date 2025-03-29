function selectBox(pairs, price, discount) {
    document.querySelectorAll(".box").forEach(box => {
        box.classList.remove("expanded");
    });

    event.currentTarget.classList.add("expanded");

    document.getElementById("total-price").textContent = `DKK ${price}.00`;
}
