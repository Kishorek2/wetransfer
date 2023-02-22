let lg = document.getElementById ("lg");
let ca = document.getElementById ("ca");
let fname = document.getElementById ("fname");
let sname = document.getElementById ("sname");

lg.onclick = function() {
    fname.style.maxHeight = "0";
    sname.style.maxHeight = "0";
    ca.classlist.add("disable");
    lg.classlist.remove("disable");
}

ca.onclick = function() {
    fname.style.maxHeight = "65";
    sname.style.maxHeight = "65";
    ca.classlist.remove("disable");
    lg.classlist.add("disable");
}