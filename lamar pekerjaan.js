<script type='text/javascript'>
//<![CDATA[
var blog = document.location.hostname;
var slug = document.location.pathname;
var ctld = blog.substr(blog.lastIndexOf("."));
var currentURL=location.href;
var str = currentURL;
  var res = str.replace("https://lokerbumn.my.id/lamar-pekerjaan/?url=", "");
$(".Visit_Link").hide();
function changeLink(){
    var decodedString = Base64.decode(res);
    window.open(decodedString,'_self')
}

function generate() {
    var linkDL = document.getElementById("download"),
        linkAL = document.getElementById("download2"),
        btn = document.getElementById("btn"),
        notif = document.getElementById("daplong"),
        direklink = document.getElementById("download").href,
        waktu = 4;
    var teks_waktu = document.createElement("span");
    linkDL.parentNode.replaceChild(teks_waktu, linkDL);
    var id;
    id = setInterval(function () {
        waktu--;
        if (waktu < 0) {
            teks_waktu.parentNode.replaceChild(linkDL, teks_waktu);
            clearInterval(id);
            notif.style.display = "none";
            linkDL.style.display = "inline";
            linkAL.style.display = "inline";
        } else {
            teks_waktu.innerHTML = "<h3 class='text-danger'>Link will appear in " + waktu.toString() + " Second</h3>";
            btn.style.display = "none";
        }
    }, 2000);
}

cookieOptions = {
    msg: "This site uses cookies to help deliver services. By using this site, you agree to the use of cookies.",
    link: "https://www.blogger.com/go/blogspot-cookies",
    close: "Got it!",
    learn: "Learn More" };
//]]>
</script>
