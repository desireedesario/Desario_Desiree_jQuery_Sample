/* script.js 
   Desiree Desario
   2015
*/
// for toggle
function toggleImages(imageIDs) {
    $(imageIDs).toggle();
}

// for hover caption
function toggleCaption(captionID) {
    $(captionID).toggle();
}

// for adding info
function pAddition(pID) {
    // get the text in p and store it in a var
    var text = $(pID).text();
    // take the text in var and put it in h1
    $("#h1_abc").append(text);
}

// for input field
function textinput(inputID) {
    // get the  content in the field and store it in a var
    var input = $(inputID).val();
    // take the text in field and put under the box
    $("#output").html(input);

}


$(document).ready(function() {

    /*animate*/
    $("#btn_change").click(function() {
        $("#animatePika").css({
            "background-color": "red",
            "border-color": "blue"
        });
    });

    $("#btn_change2").click(function() {
        $("#animatePika").animate({
            left: '250px'
        });
    });

    $("#btn_change3").click(function() {
        $("#animatePika").animate({
            left: '250px',
            height: '550px',
            width: '550px'
        });
    });

    $("#btn_change4").click(function() {
        var pikachu = $("#animatePika");
        pikachu.animate({
            height: '300px',
            opacity: '0.9'
        }, "slow");
        pikachu.animate({
            right: '350px'
        });
        pikachu.animate({
            height: '100px',
            opacity: '0.0'
        }, "slow");
    });


    /*TOGGLE*/
    $("#button1").click(function() {
        toggleImages("#toggle1a")
    });

    $("#button2").click(function() {
        toggleImages("#toggle1a, #toggle2a")
    });

    $("#button3").click(function() {
        toggleImages("#toggle1a, #toggle2a, #toggle3a")
    });

    /*Hover Caption*/
    $("#hoverImg2a").hover(function() {
        toggleCaption("#caption1")
    });

    $("#hoverImg2b").hover(function() {
        toggleCaption("#caption2")
    });

    $("#hoverImg2c").hover(function() {
        toggleCaption("#caption3")
    });

    /*Animate Subhead*/
    $("#subhead").hover(function() {
        $("#subhead").animate({
            'left': 250,
            "font-size": "37px"
        });
    });

    /*Adding Info*/
    $("#btn_fightingGames").click(function() {
        pAddition("#p_a");
    });

    $("#btn_fps").click(function() {
        pAddition("#p_b");
    });

    $("#btn_moba").click(function() {
        pAddition("#p_c");
    });

    /*Input Field*/
    $("#btn_yourname").click(function() {
        textinput("#yourname");
    });

    /*Photo Grab Gallery*/

    $(".thumbnailEsports img").click(function() {
        var bigdiv = $(this).attr("data-photo");
        $("#bigdiv img").attr("src", bigdiv);
    });


    /*Mini Calculator*/
    $("#btn_add").click(function() {
        var input1 = $("#firstinput").val();
        var input2 = $("#secondinput").val();
        var total = Number(input1) + Number(input2);
        $("#total").html(total);
    });



});