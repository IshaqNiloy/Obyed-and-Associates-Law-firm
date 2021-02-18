var flag = 0;

function closeModal() {
    document.getElementById("my-modal").style.display = "none";
}

function toggleNum() {
    if(flag == 0){
        document.getElementById("phone-number").style.display = "none";
        flag = 1;
    }
    else{
        document.getElementById("phone-number").style.display = "block";
        flag = 0;
    }
}

function scrollToTop(){
    var div = document.getElementById("scroll-top");
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}