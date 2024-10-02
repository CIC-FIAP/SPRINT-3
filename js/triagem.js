function selectCard(cardDesejado = 1){
    var CardDesejado = cardDesejado
    var card1 = document.getElementsByClassName("card1")
    var card2 = document.getElementsByClassName("card2")
    var card3 = document.getElementsByClassName("card3")
    var card4 = document.getElementsByClassName("card4")
    var card5 = document.getElementsByClassName("card5")
    if (cardDesejado == 1){
        card1[0].style.display = ""
        card2[0].style.display = "none"
        card3[0].style.display = "none"
        card4[0].style.display = "none"
        card5[0].style.display = "none"
    } else if (CardDesejado == 2){
        card1[0].style.display = "none"
        card2[0].style.display = ""
        card3[0].style.display = "none"
        card4[0].style.display = "none"
        card5[0].style.display = "none"
    } else if (cardDesejado == 3){
        card1[0].style.display = "none"
        card2[0].style.display = "none"
        card3[0].style.display = ""
        card4[0].style.display = "none"
        card5[0].style.display = "none"
    } else if (cardDesejado == 4){
        card1[0].style.display = "none"
        card2[0].style.display = "none"
        card3[0].style.display = "none"
        card4[0].style.display = ""
        card5[0].style.display = "none"
    } else if (cardDesejado == 5){
        card1[0].style.display = "none"
        card2[0].style.display = "none"
        card3[0].style.display = "none"
        card4[0].style.display = "none"
        card5[0].style.display = ""
    }
}

selectCard()