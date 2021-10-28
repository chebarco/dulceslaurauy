function searchProducto(){
    const input = document.getElementById("filter").value.toUpperCase();
    const cardContainer = document.getElementById("lista-chocolates");

    const cards = cardContainer.getElementsByClassName("card");

    for(let i = 0; i < cards.length; i++){
    let title = cards[i].querySelector(".info-card h4.cardTitle");

    if(title.innerText.toUpperCase().indexOf(input) > -1){
        cards[i].style.display = "";
    }else{
        cards[i].style.display = "none";
    }



    }


}
