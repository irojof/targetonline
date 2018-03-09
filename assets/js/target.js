/* Funcion para deslizar hacia links en la misma pagina */
$(function(){
     $('a[href*=#b]').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 $('html,body').animate({scrollTop: targetOffset}, 1000);
                 return false;
            }
       }
   });
});

/* Funcion para btn_top sea visible o no*/
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn_top").style.display = "block";
    } else {
        document.getElementById("btn_top").style.display = "none";
    }
}
// Cuando haga clic go top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// chat para target
    (function(d, w, c) {
		w.ChatraID = 'a5HQaZLstnJNKXS69';
		var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
        + '//call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
	window.ChatraSetup = {
    colors: {
        buttonText: '#f0f0f0', /* chat button text color */
        buttonBg: '#f44336'    /* chat button background color */
    }
};