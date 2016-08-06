function loadDoc6() {
      $.get("lake-tahoe-nv.html", function(data) {
  $("#carousel").html(data);
});  

    var title = "<div class='jumbotron'><h1>Lake Tahoe: The Nevada Edition</h1></div>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Story</h1>";
    paragraph +="<p>As I left Carson City, I headed up into the mountains and made my way to Lake Tahoe.  I knew Lake Tahoe had a high elevation, but I didn't know it was as high as 7,000 feet above sea level.  I was amazed by the elevation.  After about half an hour of going up and down the mountains, I reached my first viewpoint of Lake Tahoe, Logan Shoals Vista Point.  It was an amazing view.  The water is just so damn blue, and the mountains surrounding it were just so damn perfect with just the right amount of snow for summer.  Similar to Crater Lake, but more of an actual lake instead of a caldera lake like Crater Lake.  The mountains in the background were also magnificent, and it made the viewpoint all the more impressive, especially on a nice and clear day.  To say the least, I was in for a treat.</p>";
    paragraph +="<p>I continued my way down the highway and found a beach to stop at.  A nice beach with plenty of people playing and relaxing.  A different feeling from the high up viewpoints, something that Crater Lake doesn't have.  I didn't spend too much time at the beach but I still enjoyed the experience of watching those in the Lake having fun.  A few miles down the road was California, but I had another stop to make in between.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Facts</h1>";
    paragraph +="<p>Lake Tahoe has a surface elevation of 6,225 feet.</p>";
    paragraph +="<p>Lake Tahoe is the largest alpine lake in North America and the second deepest lake in North America behind Crater Lake.</p>";
    paragraph +="<p>Lake Tahoe is the largest lake by volume in the United States outside the Great Lakes.</p>";
    paragraph +="<p>Tahoe gets its name from a Native Washo tribe word \"dá'aw,\" meaning \"The Lake.\"</p><img src='../img/reno-tahoe-map.jpg' class='img-responsive'/></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}
