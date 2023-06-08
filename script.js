function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

    document.body.style.background = bgColor;
    }
random_bg_color();


function admin(){
document.getElementById("admin").innerText= `Admin: ${document.getElementById('name').value}`//интерполяция
// "Admin: " + document.getElementById("name").value;
}


function admin(){
    document.getElementById("admin").innerText= `Admin: ${document.getElementById('name').value}`//интерполяция
    // "Admin: " + document.getElementById("name").value;
    }