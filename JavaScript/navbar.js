function navbar() {
    return `  <div class="navbar">
    <h3><a href=""><img class="logo" src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg" alt=""></a></h3>
<div id="options">
<h3><a style="text-decoration: none;" href="./corecourse.html"><p class="nvtxt">Courses</p> </a></h3>
<h3><a style="text-decoration: none;"href="./learn.html"><p class="nvtxt">Learn</p></a></h3>
<h3><a style="text-decoration: none;"href="./pricing.html"><p class="nvtxt">Pricing</p></a></h3>
<h3><a style="text-decoration: none;"href="./login.html"><p class="nvtxt">Login</p></a></h3>
<h3><a style="text-decoration: none;"href="./pricing.html"><p class="nvtxt btn1">Join Now</p></a></h3>

</div>
</div>

<svg class="diagonal" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 10" preserveaspectratio="none"><defs><linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#c02d28"></stop><stop offset="100%" stop-color="#e66225"></stop></linearGradient></defs><polygon points="0,2 0,0 100,0 100,10" fill="url(#linear)"></polygon></svg>`
    
}
function footer() {
    `<div class="footer" >
    <div class="lst" > 
    <img class="logo2" src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg" alt="">    
   <ul>
       <a href=""><li>Courses</li></a>
       <a href=""><li>Learn</li></a>
       <a href=""><li>Teachers</li></a>
       <a href=""><li>Guides</li></a>
       <a href=""><li>Pricing</li></a>
       <a href=""><li>Login</li></a>
       <a href=""><li>Join Now</li></a>
       <a href=""><li>FAQ</li></a>

   </ul>
    
    </div>
    <img class="download"src="./img/download.png" alt="">
    <div class="lstlogo" >
        <img class="lg" src="./img/tweet.png" alt="">
        <img class="lg" src="./img/linkedin.png" alt="">
        <img class="lg" src="./img/fb.png" alt="">
        <img class="lg" src="./img/instagram.png" alt="">
        <p style="color: rgb(143, 134, 134);font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;padding-left: 56.5%;margin-top: 10px; " >Email : <a style="color: orangered;" href="">support@frontendmasters.com</a>  </p>


    </div>

<img class="lstl" src="./img/lstl.png" alt="">

</div>`
    
}

export {navbar,footer} 
//console.log(navbar);