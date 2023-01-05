function sendEmail(){
    Email.send({

    SecureToken : "XXXX-XXXX-XXXX-XXXX-XXXX",
    To : 'kalvitzjames1@gmail.com',
    From : 'kalvitzjames1@jkalv.com',
    ReplyAddress: document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "<br> Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Phone: " + document.getElementById("phone").value
    + "<br> Message: " + document.getElementById("message").value 
    })

    .then(message => alert("Thank you for your Message!"));
}

/*html sanitizer*/
       
var html;
   
   //run with default settings
   html = HtmlSanitizer.SanitizeHtml("<div><script>alert('xss!');</sc" + "ript></div>"); //returns "<div></div>";
   html = HtmlSanitizer.SanitizeHtml("<a onclick=\"alert('xss')\"></a>"); //returns "<a></a>";
   html = HtmlSanitizer.SanitizeHtml("<a href=\"javascript:alert('xss')\"></a>"); //returns "<a></a>";
   
   //permanently allow a tag for all future invocations
   HtmlSanitizer.AllowedTags['FORM'] = true;
   html = HtmlSanitizer.SanitizeHtml("<form></form>"); //returns "<form></form>";
   
   //allow somthing only once by specifying a selector
   html = HtmlSanitizer.SanitizeHtml("<input type=checkbox>", "input[type=checkbox]"); //returns "<input type=\"checkbox\">";

/*Hamburger toggle*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})


/*Tabs*/

//jQuery
$(document).ready(function(){

$(document).ready(function() {    

$('#tabs li a:not(:first)').addClass('inactive');
$('.container').hide();
$('.container:first').show();

$('#tabs li a').click(function(){

var t = $(this).attr('id');

if($(this).hasClass('inactive')){ //this is the start of our condition 

$('#tabs li a').addClass('inactive');           

$(this).removeClass('inactive');

$('.container').hide();

$('#'+ t + 'C').fadeIn('slow');

}
});
});
});

/*tab two toggle button*/
$( function() {
// run the currently selected effect
function runEffect() {
// get effect type from
var selectedEffect = $( "#effectTypes" ).val();

// Most effect types need no options passed by default
var options = {};
// some effects have required parameters
if ( selectedEffect === "scale" ) {
options = { percent: 50 };
} else if ( selectedEffect === "size" ) {
options = { to: { width: 280, height: 185 } };
}

// Run the effect
$( "#effect" ).show( selectedEffect, options, 500, callback );


};

//callback function to bring a hidden box back
function callback() {
setTimeout(function() {
$( "#effect:visible" ).removeAttr( "style" );
}, 1000 );
};

// Set effect from select menu value
$( "#aboutBtn" ).on( "click", function() {
runEffect();
});

$( "#effect" ).hide();


} );
