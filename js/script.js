let mode;
let blurbs = ["Sphinx of black quartz, judge my vow.","Jackdaws love my big sphinx of quartz!","Pack my box with five dozen liquor jugs.","The quick onyx goblin jumps over the lazy dwarf.","Cwm fjord bank glyphs vext quiz?","How razorback-jumping frogs can level six piqued gymnasts!","Cozy lummox gives smart squid who asks for job pen?","Amazingly, few discotheques provide jukeboxes.",'"Now fax quiz Jack!" my brave ghost pled.']
let shortWords = ["FROG","DOG","CAT","COW","HELP","HEY","LOVE","NOW","WHY"]
let paragraphs = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Phasellus egestas tellus rutrum tellus pellentesque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. In hendrerit gravida rutrum quisque non. Odio tempor orci dapibus ultrices in iaculis. Tortor condimentum lacinia quis vel. Fusce ut placerat orci nulla. Ac turpis egestas integer eget aliquet. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Nisl vel pretium lectus quam id leo. Enim facilisis gravida neque convallis a cras. Sed turpis tincidunt id aliquet. Laoreet id donec ultrices tincidunt. Ut enim blandit volutpat maecenas volutpat blandit. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.","Dui nunc mattis enim ut tellus elementum sagittis. Sit amet risus nullam eget. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Felis bibendum ut tristique et egestas. Pharetra pharetra massa massa ultricies. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Nec sagittis aliquam malesuada bibendum arcu vitae. Sed cras ornare arcu dui. Faucibus in ornare quam viverra orci. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Pellentesque habitant morbi tristique senectus et netus et malesuada. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Porttitor eget dolor morbi non arcu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.","Morbi non arcu risus quis varius quam. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Elementum nibh tellus molestie nunc non blandit massa enim. Felis eget velit aliquet sagittis id consectetur purus ut. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Tincidunt vitae semper quis lectus nulla at volutpat. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Commodo sed egestas egestas fringilla. Arcu ac tortor dignissim convallis aenean et tortor. Nisl purus in mollis nunc sed id semper risus. Duis ultricies lacus sed turpis. Cursus mattis molestie a iaculis. Viverra suspendisse potenti nullam ac tortor vitae. Eget nunc scelerisque viverra mauris in aliquam sem. Non arcu risus quis varius. Pulvinar neque laoreet suspendisse interdum consectetur libero. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Scelerisque felis imperdiet proin fermentum leo vel.","Vestibulum rhoncus est pellentesque elit. Tortor at risus viverra adipiscing at in tellus. Viverra ipsum nunc aliquet bibendum enim. Cras tincidunt lobortis feugiat vivamus. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Adipiscing elit pellentesque habitant morbi tristique senectus. Tortor at risus viverra adipiscing at in tellus integer. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Quam viverra orci sagittis eu volutpat odio. Mattis molestie a iaculis at. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.","Urna nunc id cursus metus aliquam. Dui id ornare arcu odio. Lacinia at quis risus sed vulputate. Sapien pellentesque habitant morbi tristique senectus. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Commodo odio aenean sed adipiscing. Semper viverra nam libero justo laoreet. Ornare quam viverra orci sagittis eu. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Viverra suspendisse potenti nullam ac tortor. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Gravida cum sociis natoque penatibus et magnis dis parturient. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Augue interdum velit euismod in pellentesque massa placerat duis. Risus viverra adipiscing at in tellus.","Cras semper auctor neque vitae tempus quam. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Odio euismod lacinia at quis risus sed vulputate odio. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Mauris rhoncus aenean vel elit scelerisque. Fringilla est ullamcorper eget nulla facilisi. Elit at imperdiet dui accumsan sit. Curabitur vitae nunc sed velit dignissim sodales ut. Placerat duis ultricies lacus sed.","Neque aliquam vestibulum morbi blandit. Orci nulla pellentesque dignissim enim sit amet. Gravida neque convallis a cras semper auctor neque vitae. Tellus mauris a diam maecenas. Id neque aliquam vestibulum morbi blandit cursus. Sit amet est placerat in egestas erat imperdiet. Venenatis tellus in metus vulputate eu scelerisque. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Lectus arcu bibendum at varius. Eu mi bibendum neque egestas congue quisque egestas diam. Diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Pellentesque dignissim enim sit amet venenatis urna. Malesuada fames ac turpis egestas integer.","Enim sed faucibus turpis in eu mi bibendum neque. Blandit turpis cursus in hac habitasse. Dignissim cras tincidunt lobortis feugiat. Vitae congue mauris rhoncus aenean. Duis ut diam quam nulla porttitor massa id neque. Dui sapien eget mi proin sed libero. Mauris vitae ultricies leo integer malesuada nunc. Ullamcorper a lacus vestibulum sed arcu non. Pretium viverra suspendisse potenti nullam ac tortor vitae. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Condimentum vitae sapien pellentesque habitant morbi. Pretium lectus quam id leo in. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Et tortor at risus viverra adipiscing at in tellus. Sit amet est placerat in egestas erat imperdiet sed. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Leo integer malesuada nunc vel risus commodo viverra maecenas. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Dui faucibus in ornare quam.","Integer enim neque volutpat ac tincidunt vitae semper quis. Nunc id cursus metus aliquam eleifend mi. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Tempus imperdiet nulla malesuada pellentesque elit. Massa tempor nec feugiat nisl pretium fusce. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Blandit volutpat maecenas volutpat blandit. Et molestie ac feugiat sed.","Enim facilisis gravida neque convallis a cras semper. Neque viverra justo nec ultrices. Nullam vehicula ipsum a arcu cursus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Nibh tellus molestie nunc non. Consequat mauris nunc congue nisi vitae suscipit tellus. Condimentum lacinia quis vel eros donec ac odio tempor orci. Nibh sit amet commodo nulla. Arcu vitae elementum curabitur vitae. At erat pellentesque adipiscing commodo elit at imperdiet. Magna fringilla urna porttitor rhoncus dolor purus non. Nisl rhoncus mattis rhoncus urna. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi."]
let style = ["italic","normal"]
let weight = ["bold","normal"]
let ready;
let specW;
let specH;
ready = false;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

$(document).ready(function(){
ready = true;
specH = $("#specimen").height();
specW = $("#specimen").width();
let hovering = false;
$("code").toggle();

$(".editBtns").hide();

generate();

function generate(){
    $(".text").show();
    mode = "generate";
    $(".text").removeClass("editable");
    $(".text").removeClass("hoverTxt");
    $("button").removeClass("selected");
    $(".text").not(".ipsum").not(".big").each(function(){
        let blurb = randomInt(0,(blurbs.length-1));
        console.log(blurbs[blurb])
        $(this).text(blurbs[blurb])
        $(this).css("font-style", style[randomInt(0,1)])
        $(this).css("font-weight", weight[randomInt(0,1)])
        ;
    })
    

    $(".big").each(function(){
        let blurb = randomInt(0,(shortWords.length-1));
        $(this).text(shortWords[blurb]);
        $(this).css("font-style", style[randomInt(0,1)])
        $(this).css("font-weight", weight[randomInt(0,1)])
    })

    $(".ipsum").each(function(){
        let lorumIpsum = "";
        randomParagraphs(randomInt(1, paragraphs.length));
        function randomParagraphs(paragraphAmount){
            if(paragraphAmount > 0){
                let paragraph = randomInt(0, paragraphs.length);
                lorumIpsum = lorumIpsum + paragraphs[paragraph];
                lorumIpsum = lorumIpsum + "\n\n";
                randomParagraphs((paragraphAmount - 1))
            }
        }
        $(this).text(lorumIpsum);
        $(this).css("width",(randomInt(5,95)+"vw"))
        $(this).css("font-style", style[randomInt(0,1)])
        $(this).css("font-weight", weight[randomInt(0,1)])
    })

    $(".text").each(function(){
        let h = $(this).height();
        let w = $(this).width();
        $(this).css("top",(randomInt(0,(specH-h))+"px"));
        $(this).css("left",(randomInt(0,(specW-w))+"px"));
    })
};



$("button").mousedown(function(){

    $(".p5Canvas").removeClass("onTop");
    if($(this).hasClass("mode")){
        mode = $(this).attr("id");
        $(".mode").removeClass("selected");
        $(this).addClass("selected");
    } 
    if($(this).hasClass("css")){
        $(this).toggleClass("selected");
        $("code").toggle();
    }
    if((!$(this).hasClass("css"))&&(!$(this).hasClass("mode"))){
        $(this).addClass("selected");
            $(this).mouseup(function(){
            $(this).removeClass("selected")});
    }
    if($(this).hasClass("textEdit")){
        $(".text").removeClass("others");
    };
    if(this.hasClass("draw")){
        mode = "draw";
        $(".text").removeClass("editable");
        $(".text").attr('contenteditable','false');
        $(".p5Canvas").addClass("onTop");
    }
})

$(".text").not(".others").click(function(){
    if(mode == "textEdit"){
        $(".text").attr('contenteditable','false');
        $(".text").removeClass('editable');
        $(".text").removeClass('hoverTxt');
        $(this).css("cursor","text");
        $(this).attr('contenteditable','true');
        $(this).addClass("editable");
        $(this).focus();
        $(".regBtns").hide();
        $(".editBtns").show();
        hovering = true;
        $(this).mouseout(function(){
            hovering = false;  
        })
    }
})

$(".text").hover(function(){
    if(mode == "textEdit"){
        $(this).toggleClass("hoverTxt")
    }
})



$(".editable").hover(function(){
    hovering = true;
    console.log(hovering);
})    


$("#specimen").click(function(){
    if(mode == "textEdit"){
        console.log(hovering);
        if(!hovering){
            $(".text").removeClass('editable');
            $(".text").removeClass('hoverTxt');
            $(".regBtns").show();
            $(".editBtns").hide();
        }
    }
})

$(".text").hover(function(){
    if(mode == "textEdit"){
        if ($(this).hasClass("editable")){
            $(".text").addClass("others");
            $(this).removeClass("others");
            $(this).css("cursor","text");
        } else{
            $(this).css("cursor","pointer");
        }
    }
})

$("#randX").click(function(){
    let h = $(".editable").height();
    let w = $(".editable").width();
    $(".editable").css("top",(randomInt(0,(specH-h))+"px"));
    $(".editable").css("left",(randomInt(0,(specW-w))+"px"));
})

$("#delete").click(function(){
    $(this).removeClass("selected");
    $("#randX").removeClass("selected");
    $(".editable").hide();
    $(".text").removeClass("editable");
    $(".regBtns").show();
    $(".editBtns").hide();
})


// $("#duplicate").click(function(){
//     let h = $(".editable").height();
//     let w = $(".editable").width();
//     let clone = $(".editable").clone();
//     clone.removeClass("editable");
//     clone.removeClass("hoverTxt");
//     clone.addClass("others");
//     $(clone).css("top",(randomInt(0,(specH-h))+"px"));
//     $(clone).css("left",(randomInt(0,(specW-w))+"px"));
//     $(clone).insertBefore('.p5Canvas');
//     $(clone).hover(function(){
//         $(this).toggleClass("hoverTxt");
//         $(".editable").toggleClass("hoverTxt");
//     })
//     $(clone).click(function(){
//         $(".text").removeClass("editable");
//         $(this).addClass("editable");
//     })
// })



$("#generate").click(function(){
    generate();
})


setup();


});

function setup() {
    if(ready){
        let canvas = createCanvas(specW, specH);
        canvas;
        console.log(height);
        canvas.parent("specimen");
	    background(255);
    }

}



function mouseDragged() {
    if(mode == "draw"){
        stroke(0);
        strokeWeight(3);
        noCursor();
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function mouseReleased(){
    if(mode == "draw"){
        cursor(HAND);
    }

}

