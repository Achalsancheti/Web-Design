
$("#b1").on("click", function(){
    $("#r1").addClass("rippling");
    $("#bw1").addClass("clicked").delay(1500).queue(function(){
        $("#l1").addClass("active");
    });
});

$("#c1").on("click", function(){
    $("#bw1").removeClass("clicked");
    $("#r1").removeClass("rippling");
    $("#l1").removeClass("active");
});


$("#b2").on("click", function(){
    $("#r2").addClass("rippling");
    $("#bw2").addClass("clicked").delay(1500).queue(function(){
        $("#l2").addClass("active");
    });
});

$("#c2").on("click", function(){
    $("#bw2").removeClass("clicked");
    $("#r2").removeClass("rippling");
    $("#l2").removeClass("active");
});

$("#b3").on("click", function(){
    $("#r3").addClass("rippling");
    $("#bw3").addClass("clicked").delay(1500).queue(function(){
        $("#l3").addClass("active");
    });
});

$("#c3").on("click", function(){
    $("#bw3").removeClass("clicked");
    $("#r3").removeClass("rippling");
    $("#l3").removeClass("active");
});

$("#b4").on("click", function(){
    $("#r4").addClass("rippling");
    $("#bw4").addClass("clicked").delay(1500).queue(function(){
        $("#l4").addClass("active");
    });
});

$("#c4").on("click", function(){
    $("#bw4").removeClass("clicked");
    $("#r4").removeClass("rippling");
    $("#l4").removeClass("active");
});

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

function divDisplay2(){
	document.getElementById("div1").style.display="none";
	document.getElementById("div2").style.display="block";
}

function divDisplay1(){
	document.getElementById("div2").style.display="none";
	document.getElementById("div1").style.display="block";
}