function display(a){   
    let g= document.getElementById('get');
    g.style.display= "none";
    let person1 = {name:"John", number:7657657489, email:"ulala@gmail.com", place:"BasketBall Court", fine:100, cid:1};
    let person2 = {name:"John2", number:7652049489, email:"ulfs09@gmail.com", place:"BasketBall Court", fine:100, cid:2};
    let person3 = {name:"Maverick", number:7427657489, email:"uhjfs9a@gmail.com", place:"BasketBall Court", fine:100, cid:3};
    document.getElementById("det").style.display="block";
    if (a==1) {
        document.getElementById("name").innerHTML = person1.name;
        document.getElementById("number").innerHTML = person1.number;
        document.getElementById("email").innerHTML = person1.email;
        document.getElementById("place").innerHTML = person1.place;
        document.getElementById("fine").innerHTML = person1.fine;
    } else if (a==2) {
        document.getElementById("name").innerHTML = person2.name;
        document.getElementById("number").innerHTML = person2.number;
        document.getElementById("email").innerHTML = person2.email;
        document.getElementById("place").innerHTML = person2.place;
        document.getElementById("fine").innerHTML = person2.fine;
    } else {
        document.getElementById("name").innerHTML = person3.name;
        document.getElementById("number").innerHTML = person3.number;
        document.getElementById("email").innerHTML = person3.email;
        document.getElementById("place").innerHTML = person3.place;
        document.getElementById("fine").innerHTML = person3.fine;
    }

    console.log("Hello");
}