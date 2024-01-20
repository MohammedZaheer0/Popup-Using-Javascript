let Submit = document.getElementById("submit");


let OutputDiv = document.getElementById("OutputDiv");
let Button = document.getElementById("btn");
Button.addEventListener("click",function(){
    let OuterDiv = document.createElement("div");
    OuterDiv.classList.add("OuterDiv");
    OutputDiv.appendChild(OuterDiv);

    let Varified = document.createElement("img");
    Varified.setAttribute("src","https://img.icons8.com/color/48/tiktok-verified-account.png");
    Varified.classList.add("Varified");
    OuterDiv.appendChild(Varified)

    let ThankYou = document.createElement("h2");
    ThankYou.classList.add("ThankYou");
    ThankYou.textContent = "Thank You";
    OuterDiv.appendChild(ThankYou);

    let Content = document.createElement("p");
    Content.classList.add("Content");
    Content.textContent = "Your detailes has been successfully submitted. Thanks!";
    OuterDiv.appendChild(Content)

    let Ok = document.createElement("button");
    Ok.classList.add("Ok");
    Ok.textContent = "Ok";
    OuterDiv.appendChild(Ok);

    Ok.addEventListener("click",function(){
        OuterDiv.style.display = "none";
        Submit.style.display = "block";
        location.reload();
    });
    Submit.style.display = "none";
        
});