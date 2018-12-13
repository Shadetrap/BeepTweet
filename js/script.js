//https://developers.google.com/web/updates/2018/03/clipboardapi
//https://developers.google.com/web/updates/2016/01/urlsearchparams
//https://www.youtube.com/watch?v=-D5YGTkTBH4

//https://stackoverflow.com/questions/25098021/securityerror-blocked-a-frame-with-origin-from-accessing-a-cross-origin-frame
//https://circletype.labwire.ca/
$('.blank').attr("target","_blank");
$(document).ready(function() {
    iframelr = true;


    $('article').css({
        'display': 'none'
    });
    var isPlaying = false;
    var AOneTimer = 0;
    var playing = 0;
    var synth = new beepbox.Synth();
    return iframelr;
});
var isPlaying = false;


function process(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        location.hash = $(".textput").val().replace(/[^\w\s]/gi, '');
    }
}

var configProfile = {
    "profile": {
        "screenName": 'beepboxco'
    },
    "domId": 'example1',
    "maxTweets": 27,
    "enableLinks": true,
    "showUser": true,
    "showTime": true,
    "showImages": false,
    "lang": 'en',
    "linksInNewWindow": false,
    "showInteraction": false,
    "showRetweet": true,
    "useEmogi": true,
    "showPermalinks": true,
};
var AOneTimer = 0;
var playing = 0;
var synth = new beepbox.Synth();
synth.pause();
synth.volume = 2;
$(".textput").val(location.hash.substr(1));
configProfile.profile.screenName = location.hash.substr(1);
twitterFetcher.fetch(configProfile);
if ($('.textput:text').val().length == 0) {
    $(".textput").val("BeepTweet");
    $('.home').css({
        'display': 'block'
    });
    $('body').css({
        'display': 'block'
    });
    $('body').css({
        'opacity': '1'
    });
}


$(window).bind('hashchange', function() {
    location.reload();
});
$(function() {
    $("html, body, canv, iframe").mousedown(function(e) {
        if (e.target.id == "example1"|| e.target.id == "textput"|| $(e.target).parents("#example1").length) {} else {
            if (isPlaying == false) {
                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").css('background', hue);
                synth.play();
                isPlaying = true;
                if (isPlaying == false) {
                    $(".tester").addClass('removePop');
                    $("body").css('background-color', '#323232');
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css('animation', 'none');
                } else if (isPlaying == true) {
                    $(".tester").removeClass('removePop');
                    $("body").css('background-color', '#111111');
                }
            } else if (isPlaying == true) {
                $("iframe").remove();
                $(".tester").css('background', '#282E32');
                synth.pause();
                isPlaying = false;
                if (isPlaying == false) {
                    $(".tester").addClass('removePop');
                    $("body").css('background-color', '#323232');
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css('animation', 'none');
                } else if (isPlaying == true) {
                    $(".tester").removeClass('removePop');
                    $("body").css('background-color', '#111111');
                }
            }
        }
    });
})

function addAnimation() {
    clearInterval(listen1);
    clearInterval(listen2);
    clearInterval(listen3);
    clearInterval(listen4);
    clearInterval(listen5);
    clearInterval(listen6);
    clearInterval(listen7);
    clearInterval(listen8);

    function listen1() {
        var listen1 = setInterval(function() {
            if (synth.beat == 0) {
                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").css('background', hue);
                
                if ($(".tester").closest("li").find("img[data-scribe='element:avatar']").css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(-1, 0, 0, 1, 0, 0)'
                    });
                    console.log("trueh");
                } else {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(1, 0, 0, 1, 0, 0)'
                    });
                    console.log("falseh");
                }

                clearInterval(listen1);
                clearInterval(listen3);
                clearInterval(listen4);
                clearInterval(listen5);
                clearInterval(listen6);
                clearInterval(listen7);
                clearInterval(listen8);
                listen2();
            }
        }, 15);
    }

    function listen2() {
        var listen2 = setInterval(function() {
            if (synth.beat == 2) {
                
                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").css('background', hue);

                
                if ($(".tester").closest("li").find("img[data-scribe='element:avatar']").css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(-1, 0, 0, 1, 0, 0)'
                    });
                    console.log("trueh");
                } else {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(1, 0, 0, 1, 0, 0)'
                    });
                    console.log("falseh");
                }


                clearInterval(listen2);
                listen1();
                listen3();
            }
        }, 15);
    }

    function listen3() {
        var listen3 = setInterval(function() {
            if (synth.beat == 4) {

                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").css('background', hue);

                if ($(".tester").closest("li").find("img[data-scribe='element:avatar']").css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(-1, 0, 0, 1, 0, 0)'
                    });
                    console.log("trueh");
                } else {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(1, 0, 0, 1, 0, 0)'
                    });
                    console.log("falseh");
                }

                clearInterval(listen2);
                clearInterval(listen3);
                listen4();
            }
        }, 15);
    }

    function listen4() {
        var listen4 = setInterval(function() {
            if (synth.beat == 6) {

                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").css('background', hue);

                if ($(".tester").closest("li").find("img[data-scribe='element:avatar']").css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(-1, 0, 0, 1, 0, 0)'
                    });
                    console.log("trueh");
                } else {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(1, 0, 0, 1, 0, 0)'
                    });
                    console.log("falseh");
                }

                clearInterval(listen2);
                clearInterval(listen3);
                clearInterval(listen4);
                listen5();
            }
        }, 15);
    }

    function listen5() {
        var listen5 = setInterval(function() {
            if (synth.beat == 8) {
                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").css('background', hue);

                if ($(".tester").closest("li").find("img[data-scribe='element:avatar']").css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(-1, 0, 0, 1, 0, 0)'
                    });
                    console.log("trueh");
                } else {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(1, 0, 0, 1, 0, 0)'
                    });
                    console.log("falseh");
                }

                clearInterval(listen2);
                clearInterval(listen3);
                clearInterval(listen4);
                clearInterval(listen5);
                listen6();
            }
        }, 15);
    }
    function listen6() {
        var listen6 = setInterval(function() {
            if (synth.beat == 10) {
                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").css('background', hue);

                if ($(".tester").closest("li").find("img[data-scribe='element:avatar']").css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(-1, 0, 0, 1, 0, 0)'
                    });
                    console.log("trueh");
                } else {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(1, 0, 0, 1, 0, 0)'
                    });
                    console.log("falseh");
                }

                clearInterval(listen2);
                clearInterval(listen3);
                clearInterval(listen4);
                clearInterval(listen5);
                clearInterval(listen6);
                listen7();
            }
        }, 15);
    }
    function listen7() {
        var listen7 = setInterval(function() {
            if (synth.beat == 12) {

                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").css('background', hue);

                if ($(".tester").closest("li").find("img[data-scribe='element:avatar']").css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(-1, 0, 0, 1, 0, 0)'
                    });
                    console.log("trueh");
                } else {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(1, 0, 0, 1, 0, 0)'
                    });
                    console.log("falseh");
                }

                clearInterval(listen2);
                clearInterval(listen3);
                clearInterval(listen4);
                clearInterval(listen5);
                clearInterval(listen6);
                clearInterval(listen7);
                listen8();

            }
        }, 15);
    }
    function listen8() {
        var listen8 = setInterval(function() {
            if (synth.beat == 14) {

                if ($(".tester").closest("li").find("img[data-scribe='element:avatar']").css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(-1, 0, 0, 1, 0, 0)'
                    });
                    console.log("trueh");
                } else {
                    $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                        'transform': 'matrix(1, 0, 0, 1, 0, 0)'
                    });
                    console.log("falseh");
                }

                clearInterval(listen2);
                clearInterval(listen3);
                clearInterval(listen4);
                clearInterval(listen5);
                clearInterval(listen6);
                clearInterval(listen7);
                clearInterval(listen8);

            }
        }, 15);
    }
    listen1();
}
addAnimation();

$('#example1').bind("DOMSubtreeModified", function() {
    $('article').css({
        'display': 'block'
    });
    $('body').css({
        'opacity': '1'
    });

    $('a[data-mentioned-user-id="562349832"').remove();
    $('a[data-scribe="element:hashtag"').remove();
    $("span").filter(function() {
        return $(this).text() === "beepboxco"
    }).remove();


    if (AOneTimer == 0) {
        $("a[data-expanded-url*='http'").each(function() {
            var ext = $(this).attr('data-expanded-url');
            $(this).attr('href', ext);

            setTimeout(function() {
                $("a[data-expanded-url*='https://beepbox.co/#6n10s0kbl00e00t7m0a2g00j0i0r1o3T0w1f1d1c0h0v0bwp110'], a[data-expanded-url*='https://beepbox.co/#6n31s0kbl00e03t7m0a7g0fj7i0r1o3210T0w1f1d1c0h0v0T0w1f1d1c0h0v0T0w1f1d1c0h0v0T2w1d1v0b4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4p16000000'], a[data-expanded-url*='https://www.beepbox.co/#6n31s0kbl00e03t7m0a7g0fj7i0r1o3210T0w1f1d1c0h0v0T0w1f1d1c0h0v0T0w1f1d1c0h0v0T2w1d1v0b4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4p16000000'], a[data-expanded-url*='https://beepbox.co/#5n31s0kbl00e03t7m0a7g0fj7i0r1w1111f0000d1111c0000h0000v0000o3210b4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4p16000000'], a[data-expanded-url='http://beepbox.co'], a[data-expanded-url='https://beepbox.co/#6n10s0kbl00e00tem0a2g00j0i0r1o3T0w1f1d1c0h0v0bwp110'], a[data-expanded-url*='n31sbkbl00e03t7m0a7g0fj7i0r1o3210T0w1f1d1c0h0v0T0w1f1d1c0h0v0T0w1f1d1c0h0v0T2w1d1v0b4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4p16000000']").html("(empty)").removeAttr("href").removeAttr("data-expanded-url").css({
                    'color': 'gray',
                    'pointer-events': 'none',
                    'cursor': 'default'
                });
                $("a[data-expanded-url*='beepbox.co/#'], a[data-expanded-url*='bit.ly/'], a[data-expanded-url*='goo.gl/'], a[data-expanded-url*='modded'], a[data-expanded-url*='sandbox'], a[data-expanded-url*='snip.ml'], a[data-expanded-url*='tinyurl.com']").addClass('beepUrl').html("<b>Play<b/>").removeAttr("href").attr('title', '').css({
                    'color': 'greenyellow'
                });
                $("a[data-expanded-url*='beepbox.co/?']").addClass('beepUrl').html("<b>Bad Link<b/>").removeAttr("href").attr('title', '').css({
                    'color': 'orange',
                    'pointer-events': 'none',
                    'cursor': 'default',
                    'font-weight': 'bold'
                });
                $("a[data-expanded-url*='bit.ly']").html("<b>bit.ly</b>").css({
                    'color': '#8FE2FC'
                });
                $("a[data-expanded-url*='goo.gl']").html("<b>goo.gl</b>").css({
                    'color': '#8FE2FC'
                });
                $("a[data-expanded-url*='tinyurl']").html("<b>TinyURL</b>").css({
                    'color': '#8FE2FC'
                });
                $("a[data-expanded-url*='snip.ml']").html("<b>snip.ml</b>").css({
                    'color': '#8FE2FC'
                });
                $("a[data-expanded-url*='moddedbeepbox']").html("<b>Modded</b>").css({
                    'color': '#c479e2'
                });;
                $("a[data-expanded-url*='sandbox']").html("<b>Sandbox</b>").css({
                    'color': '#c479e2'
                });;
                $(".user div[data-scribe='component:author']").remove();
                $(".user div a[data-scribe='component:author']").remove();
                $('.timePosted a').addClass('blank').attr("target","_blank");


                $(".user").css({
                    'background-color': 'greenyellow',
                    'bottom': '0',
                    'padding-left': '-100',
                    'position': 'static',
                    'width': '75px',
                    'overflow': 'visible',
                    'float': 'left'
                })
                $(".user img").css({
                    'left': '0px',
                    'overflow': 'visible'
                })

                if ($(".user img").length) {
                    $("img[alt*='from tweet']").css({
                        'height': '100%'
                    });
                    $(".tweet").css({
                        'margin-left': '0px',
                        'margin-right': '10px'
                    });
                    $("#example1 p").css({});
                    $("#example1 ul li").css({
                        'min-height': '73px'
                    });


                    var abibu = 'yoyoyo';




                }

            }, 1);
        });

        $("a").dblclick(function() {
            $("iframe").remove();
            var grab2 = $(this).attr('data-expanded-url');
            window.open(grab2, '_blank')
            $(".tester").css('background', '#282E32');
            synth.pause();
            isPlaying = false;
            if (isPlaying == false) {
                $("body").css('background-color', '#323232');
                $(".tester").addClass('removePop');
            } else if (isPlaying == true) {
                $("li").removeClass('removePop');
                $("body").css('background-color', '#111111');
            }
            return;
        });



        $("a[data-expanded-url*='beepbox.co/#").mousedown(function() {
            $("iframe").remove();
            var grab = $(this).attr('data-expanded-url');
            var newstring = grab.substring(grab.indexOf("#") + 1);
            synth.setSong(newstring);
            synth.snapToStart();
            synth.play();
            isPlaying = true;
            if (isPlaying == false) {
                $("body").css('background-color', '#323232');
                $(".tester").addClass('removePop');
            } else if (isPlaying == true) {
                $("li").removeClass('removePop');
                $("body").css('background-color', '#111111');

                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                    'transform': 'matrix(1, 0, 0, 1, 0, 0)'
                });
                $(".tester").closest("li").find("img[data-scribe='element:avatar']").css('animation', 'none');
                $("li").removeClass("tester").css('background-color', '#282E32');
                $("li").removeClass('removePop');
                $(this).closest('li').addClass("tester");
                $(".tester").css('background', hue);
                $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                    'transform': 'scaleX(-1)'
                });
                if ($('.tester').find('.media').find('img').length) {
                    $('body').css({
                        'background-image': 'url(' + $('.tester').find('.media').find('img').attr("src") + ')',
                        'background-color': '#111111'
                    })
                    if ($('.tester').find('.media').find('img').get(0).naturalWidth < 200) {
                        $('body').css('image-rendering', 'pixelated');
                    } else {}

                } else {}
            }
            $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                'transform': 'scaleX(1)'
            });
        });
        $("a[data-expanded-url*='bit.ly'], a[data-expanded-url*='goo.gl'], a[data-expanded-url*='modded'], a[data-expanded-url*='sandbox'], a[data-expanded-url*='snip.ml'], a[data-expanded-url*='tinyurl.com']").mousedown(function(iframelr) {
            var element = document.createElement("iframe");
            var iframe = document.getElementById('body').appendChild(element);

            function beepFramimus() {
                iframe.frameborder = "0";
                iframe.scrolling = "no";
                iframe.style.border = "0";
                iframe.style.border = "none";
                iframe.style.position = "fixed";
                iframe.style.top = "0";
                iframe.style.overflow = "hidden";
                iframe.id = 'idframe';
                // iframe.overflow = "hidden";
                document.body.appendChild(iframe);
            };
            $("iframe").remove();
            iframe.src = $(this).attr('data-expanded-url');
            beepFramimus();
            setTimeout(function(){
                $("iframe").css({'transition':'all 1s ease','transform':'scale(1)', 'background-color':'#000000', 'box-shadow':'0 0 4em rgb(93, 93, 93)'});
            }, 1);


            synth.setSong("");
            synth.snapToStart();
            synth.play();


            isPlaying = true;
            if (isPlaying == false) {
                $("body").css('background-color', '#323232');
                $(".tester").addClass('removePop');
            } else if (isPlaying == true) {
                $("li").removeClass('removePop');
                $("body").css('background-color', '#111111');

                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(".tester").closest("li").find("img[data-scribe='element:avatar']").css({
                    'transform': 'scaleX(1)'
                });
                $(".tester").closest("li").find("img[data-scribe='element:avatar']").css('animation', 'none');
                $("li").removeClass("tester").css('background-color', '#282E32');
                $("li").removeClass('removePop');
                $(this).closest('li').addClass("tester");
                $(".tester").closest("li").find("img[data-scribe='element:avatar']").css('animation', 'rotateAvatar 5s linear infinite');
                $(".tester").css('background', hue);

                if ($('.tester').find('.media').find('img').length) {
                    $('body').css({
                        'background-image': 'url(' + $('.tester').find('.media').find('img').attr("src") + ')',
                        'background-color': '#111111'
                    })
                    if ($('.tester').find('.media').find('img').get(0).naturalWidth < 200) {
                        $('body').css('image-rendering', 'pixelated');
                    } else {}
                } else {}
            } else if (iframelr == true) {
                alert("uh");
                iframe.style.right = '0';
                iframelr = false;

            } else if (iframelr == false) {
                alert("um");
                iframe.style.right = 'inherit';
                iframelr = true;
            }
            return iframelr;
        });

        $("a[href*='https://tw']").mousedown(function() {
            $("iframe").remove();
            $("body").css('background-color', '#323232');
            synth.pause();
            isPlaying = false;
            if (isPlaying == false) {
                $("body").css('background-color', '#323232');
                $(".tester").addClass('removePop');
            } else if (isPlaying == true) {
                $("li").removeClass('removePop');
                $("body").css('background-color', '#111111');
            }
        });


        var timeoutId = 0;
        $("a").on('mousedown', function() {

            timeoutId = setTimeout(function() {
                var copyText = $(this).attr('data-expanded-url');
                copyText.select();
                document.execCommand("copy");
                alert("copy success");
            }, 1000);

        }).on('mouseup mouseleave', function() {
            clearTimeout(timeoutId);
        })
        setTimeout(function(){
            $('body').fadeIn(1000);
        }, 1000);
        AOneTimer = 1
    }
});

window.addEventListener('keypress', function(e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 32) {
        e.preventDefault();

        function loadIframe() {
            var iframeName = "beepFrame";
            var urlh = "http://google.com/";
            var $iframe = $('#' + iframeName);
            if ($iframe.length) {
                $iframe.attr('src', urlh);
            }
        }
        loadIframe();




        if (isPlaying == false) {
            var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            $(".tester").css('background', hue);
            synth.play();
            isPlaying = true;
            if (isPlaying == false) {
                $(".tester").addClass('removePop');
                $("body").css('background-color', '#323232');

            } else if (isPlaying == true) {
                $("li").removeClass('removePop');
                $("body").css('background-color', '#111111');
            }
        } else if (isPlaying == true) {
            $(".tester").css('background', '#282E32');
            synth.pause();
            isPlaying = false;
            if (isPlaying == false) {
                $(".tester").addClass('removePop');
                $("body").css('background-color', '#323232');
            } else if (isPlaying == true) {
                $("li").removeClass('removePop');
                $("body").css('background-color', '#111111');
            }
        }
    }
});
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 49) {
        console.log("loopStart: " + synth.song.loopStart);
        console.log("bar: " + synth.bar);
        console.log("Playhead: " + synth.playheadInternal);
    };
    if (e.keyCode == 490) {
        e.preventDefault();
        if (synth.song.tempo == -20) {} else {
            synth.song.tempo--;
            console.log("Tempo: " + synth.song.tempo);
        }
    };
    if (e.keyCode == 39) {
        e.preventDefault();
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $(".tester").css('background', hue);
        synth.nextBar();
        synth.snapToBar();
    }
    if (e.keyCode == 37) {
        e.preventDefault();
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $(".tester").css('background', hue);
        synth.prevBar();
        synth.snapToBar();
    }
});