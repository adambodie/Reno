function loadDoc12() {
      $.get("lava-beds.html", function(data) {
  $("#carousel").html(data);
}); 

    var title = "<div class='jumbotron'><h1>Part 12: Flowing Up to the Lava Beds</h1></div>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Story</h1>";
    paragraph +="<p>I left Reno, filling up on gas as I left to make sure I had enough gas to get through the forests.  I'm glad I did that, but more on that later.  I drove through Nevada, quickly reaching California before heading in and out the Modoc Forest.  Another national forest with nothing but trees, a great place to get away from civilization but not that pleasant to drive through.  I reached the town of Adin and saw Mt. Shasta in the distance, a nice surprise.  I then continued my way, through construction stops before reaching the exit for the Lava Beds National Monument.  It took longer than I wanted (thanks to multiple construction stops) but I finally made it to the Lava Beds National Monument around 10:45 am.  I didn't exactly know what I was in for, but I'm glad I visited.</p>";
    paragraph +="<p>The first thing that stood out to me at Lava Beds was the butte that stood out, Schonchin Butte.  Not the park's main feature, but still impressive nonetheless, it made the views better.  I found a viewpoint up the road and loved what I saw.  As I drove around Schonchin Butte, I began noticing the lava beds and reached Devil's Homestead, a large collection of Lava Beds that reminded me of Lava Butte near Bend, Oregon.  I always like places with the name Devil in it, and Devil's Homestead was no exception, a flat bed of black molten lava.  It diversified the area and brought back memories of Lava Butte, but different.</p>";
    paragraph +="<p>I wasn't done with the park, oddly just outside the northern entrance, and its name was Captain Jack's Stronghold, where I spent my only walk, leaving really impressed with the whole damn area.  So what is Captain Jack's Stronghold?  It was a fortress made of lava used by the Native Modoc Tribe during the Modoc War from 1892-1893.  I was really impressed with the trail as I was walking through it.  I could feel the significance of the fortress and how it was used.  It reminded me of my trip to Pipestone National Monument in Minnesota, where I peacefully walked through areas held strong by the Native Americans.  At the highlight of the trail was a viewpoint of the area, with Medicine Lake Volcano and Mt. Shasta commanding the view.</p>";
    paragraph +="<p>Another thing I noticed was all the white butterflies flying in the area.  When I got home, I was told that someone I once knew who recently passed away appearantly being reincarnated as white butterflies.  I don't know if that story is right, but it seemed fitting to say here.  Please correct me.  When I was done at Captain Jack's Stronghold, I was reach to leave and get to Klamath Falls, passing through Tule Lake.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Facts</h1>";
    paragraph +="<p>Medicine Lake Volcano, though not the tallest mountain of the Cascades (7,921 feet), has the largest total area of any mountain in Cascades.</p>";
    paragraph +="<p>Captain Jack's Stronghold is named after the chief of the Modoc tribe, Kintpuash, whose nickname was Captain Jack.</p>";
    paragraph +="<p>The Lava Beds National Monument was the site of the Modoc War from 1872-1873, where the Modoc tribe used the lava beds, particularly the lava fortress now known as Captain Jack's Stronghold to hold off US forces.</p>";
    paragraph +="<p>It was the only major Native American war in California and the only one to have a Major General killed.  Kintpuash became the only Native American charged with a war crime for killing a Major General and was executed for his crimes.</p>";
    paragraph +="<p>Schonchin Butte is named for another Modoc chief, Old Schonchin, who was their Chief in the late 19th Century.</p>";
    paragraph +="<p>Other prominent members of the Modoc War include Scarface Charley and Shaknasty Jim.</p>";
    paragraph +="<p>After the Modoc War, the tribe was banished to Indian Territory (now Oklahoma).  Today, there are about 800 members of the Modoc Tribe, with about 600 living in Oregon and about 200 living in Oklahoma.</p>";    
    paragraph +="<style type='text/css'>.easyhtml5video .eh5v_script{display:none}</style><div class='easyhtml5video' style='position:relative;max-width:1280px;'><video controls='controls' poster='videos/captain-jack-video.jpg' style='width:100%' title='captain-jack-video'>";
    paragraph +="<source src='videos/captain-jack-video.m4v' type='video/mp4' />";
    paragraph +="<source src='videos/captain-jack-video.webm' type='video/webm' />";
    paragraph +="<source src='videos/captain-jack-video.ogv' type='video/ogg' />";
    paragraph +="</video><script src='videos/html5ext.js' type='text/javascript'></script></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}
