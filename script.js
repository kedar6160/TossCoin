let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");


flipBtn.addEventListener("click", () => {

  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
      document.getElementById("result").style.visibility='visible';
      document.getElementById("result").innerHTML = "I predict it's - HEAD";
    }, 100);
  }
  else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
      document.getElementById("result").style.visibility='visible';
      document.getElementById("result").innerHTML = "I predict it's - TAIL";
    }, 100); 
  }
  setTimeout(function () {
    document.getElementById("result").innerHTML = "YESSSS I was right ! are you?";
  }, 3000);
  setTimeout(function(){ 
    document.getElementById("result").remove();
  }, 4500);

});

