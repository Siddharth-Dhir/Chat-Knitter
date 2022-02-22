
function Login(){
    var Name= document.getElementById("Uname").value;
    localStorage.setItem("Uname",Name);
    window.location ="room.html";

}