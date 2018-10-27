
var input = document.getElementById("keyword");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btnSearch").click();
    }
});

// tao bien request
 document.getElementById('btnSearch').onclick = function() {
 	var keyword = document.getElementById('keyword').value;
 	var YOUTUBE_API = 'https://content.googleapis.com/youtube/v3/search?q=' + keyword + '&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc';
var xhttp = new XMLHttpRequest();
//dung event onreadystatechange (ham xml http request xu ly)
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // tao bien chuyen doi du lieu tu jSon sang jsObject
        var jsObject = JSON.parse(xhttp.responseText);
        //console.log(xhttp.responseText);
        //tao 1 bien content de dung cuoi vong for
        var content = '';
        //su dung vong lap de hien thi
        for (var i = 0; i < jsObject.items.length; i++) {
            var videoItem = '<div class="tube-item">';
            videoItem += '<iframe width="660" height="355" '+
                'src="https://www.youtube.com/embed/'+ jsObject.items[i].id.videoId + '"'+
                'frameborder="0" allow="autoplay; encrypted-media" '+
                'allowfullscreen></iframe>';
            videoItem += '<h3>' + jsObject.items[i].snippet.title+ '</h3>';
            videoItem += '</div>';
            content += videoItem;
        }
        //sau khi dung vong lap thi in ra
        document.getElementById("myTubes").innerHTML = content;
    }
};
//unknown
xhttp.open("GET", YOUTUBE_API, true);
xhttp.send();
}

// var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=JUSTATEE THANG DIEN&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
//
// var xHttp = new XMLHttpRequest();
// xHttp.onreadystatechange = function(){
//     var jsObject = JSON.parse(xHttp.responseText);
//     var con = '';
//     for (var i = 0; i <jsObject.items.length ; i++) {
//         var videoItems = '';
//     }
// }
// xhttp.open("get", YOUTUBE_API, true);
// xhttp.send();