function navResponsive(whichID, classN) {
    var x = document.getElementById(whichID);
    if (x.className === classN) {
        x.className += " responsive";
    } else {
        x.className = classN;
    }
}


function bcResponsive() {
    var x = document.getElementById("bcNav");
    if (x.className === "breadcrumbs") {
        x.className += " responsive";
    } else {
        x.className = "breadcrumbs";
    }

    var icon = document.getElementById("iconArrow");

    
    if (icon.className === "fontawesome-chevron-down") {
        icon.className = "fontawesome-chevron-up";
    } else {
        icon.className = "fontawesome-chevron-down";
    }
}