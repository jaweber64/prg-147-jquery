/**
 * Created by jaWeber on 10/15/16.
 */

$(document).ready(function(){

    // ****************************************************************
     function manip(fld1, fld2) {
         $(fld1).toggle(1000);
         $(fld2).animate({left: "+75%"});
         $(fld2).animate({left: "0%"});
     }

    $("#hdr1").click(function () {manip("#description1","#hdr1");});
    $("#hdr2").click(function () {manip("#description2","#hdr2");});
    $("#hdr3").click(function () {manip("#description3","#hdr3");});
    $("#hdr4").click(function () {manip("#description4","#hdr4");});
    $("#hdr5").click(function () {manip("#description5","#hdr5");});
    $("#hdr6").click(function () {manip("#description6","#hdr6");});
    $("#hdr7").click(function () {manip("#description7","#hdr7");});
    $("#hdr8").click(function () {manip("#description8","#hdr8");});

    // ****************************************************************
    function hdrHover(hdr) {
        $(hdr).hover(function() {
            $(hdr).css("text-shadow","2px 2px 4px grey");
        },
        function () {
            $(hdr).css("text-shadow","none");
        }
        )
    }
    hdrHover("#hdr1");
    hdrHover("#hdr2");
    hdrHover("#hdr3");
    hdrHover("#hdr4");
    hdrHover("#hdr5");
    hdrHover("#hdr6");
    hdrHover("#hdr7");
    hdrHover("#hdr8");

    // ****************************************************************
     function imgHover(img) {
         $(img).hover(function() {
                 $(img).animate({height: "150px", width: "150px"});
             },
             function () {
                 $(img).animate({height: "30px", width: "30px"});
             });
     }
    imgHover("#img1");
    imgHover("#img2");
    imgHover("#img3");
    imgHover("#img4");
    imgHover("#img5");
    imgHover("#img6");
    imgHover("#img7");
    imgHover("#img8");
});
