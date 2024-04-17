
    let btn = document.querySelector(".btn");
    let btn1 = document.querySelector(".btn1");
    let card = document.querySelector(".card");
    let check = document.querySelector("#check");
    let email = document.querySelector("#email");

    btn.addEventListener("click", () => {
        if (check.checked && email.value.trim() !== '') {
            alert("You have successfully subscribed to us");
            card.style.display = "none";
            btn1.style.display = "flex";
        } else {
            alert("Please first agree with the agreement and fill in your email");
        }
    });

    btn1.addEventListener("click", () => {
        card.style.display = "flex";
        btn1.style.display = "none";
        email.value = '';
        check.checked= false;
    });
