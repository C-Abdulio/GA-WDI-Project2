import React from "react";
import headerImage from './spiderverse_dellottobanner.jpg';
import Morlun from './Morlun_fire_001.jpg';
import SpiderVerse from './spiderverse.jpeg';
import SpiderGeddon from './SPIDER-GEDDON.jpg'


export default function Intro(){
  return(
    <div className = "intro">
      <img className = "introImg" src = {headerImage} />
      <div className = "captions" id = "beginning">
        <p>In the beggining...</p>
      </div>

      <article>In 2014-2015, <span>Marvel Comics</span> unleashed a massive Multiversal Crossover for the Spider-Man comic series.
      <div className = "captions">
        <p> it was called..</p>
      </div>
      <h1 id= "titleDrop">SPIDER-VERSE</h1>
<img id = "morlun" src = {Morlun} />
<span>Morlun</span>, the vampiric creature that once <em>infamously killed Peter Parker</em>, is back and he's looking to wipe out anyone that wears a large spider on their chest.
 And that means going on a multiverse roadtrip. As mentioned, last time Pete dealt with this guy, he died.


 And with Morlun gunning for all Spiders, he's gonna need help:
 he's not stopping with the Spiders in the 616 universe -
 <ul>
 <li>Spider-Man</li>
 <li>Spider-Man 2099</li>
 <li>Scarlet Spider</li>
 <li>Spider-Woman</li>
 <li>Spider-Girl</li>
 </ul>

 <p>he's going for everyone, from <em>Miles Morales</em> to <em>May "Mayday" Parker</em> to <b><em>Spider-Ham</em></b> and beyond!</p>
</article>
<img src = {SpiderVerse}/>
 <h3>Can our heroes stop Morlun from succeeding or will their combined egos be enough to drive themselves crazy?</h3>


The list of titles are:
<ul id="comics">
<li>Superior Spider-Man #32-33</li>
<li>Edge of Spider-Verse #1-5: An anthology series where each issue focuses on a different alternate Spider-Man.</li>
<li>Spider-Man 2099 #5 (Edge of Spider-Verse tie-in) 6-8</li>
<li>Amazing Spider-Man #7-8 (Edge of Spider-Verse tie-in), 9-15</li>
<li>Spider-Woman #1-3</li>
<li>Spider-Verse Team-Up miniseries</li>
<li>Scarlet Spiders miniseries starring Ben Reily, Kaine Parker & Ultimate Jessica Drew</li>
</ul>

<iframe width="560" height="315" src="https://www.youtube.com/embed/1kECoOvMYSI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>Season 3 of Ultimate Spider-Man, called <em>Web Warriors</em>, also ties into Spider-Verse, with the cartoon's version of Peter Parker teaming up with Miguel O'Hara, Miles Morales, a version of Spider-Knight, Spider-Ham, and a female version of himself named Petra Parker.
Ultimate has the Green Goblin traveling to different universes to get spider-DNA samples to enhance himself with</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nzyEAOvBluQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>An endless runner mobile game called <em>Spider-Man Unlimited</em> was also released during the lead-up to the event, with the selling point of players being able to collect various alternate-dimension Spider-Men.
Unlimited features an invasion by an interdimensional Sinister Six. Unlimited did hold a more direct tie-in while the comic was running, though, bringing in Inheritors as guest bosses in daily events and specifically adding Spider-Men (and -Women) who were being featured in the comic to the game's roster.</p>

<p>In the aftermath of the comic were two new series, Spider-Gwen, focusing on both the aftermath of Spider-Gwen's romp in the story and picking up where her tale in Edge of Spider-Verse left off and Silk, following the adventures of Cindy Moon.
It was followed up in Secret Wars (2015) with a self-titled series being one of the many tie-ins. This tie-in received a follow-up after the event, <em>Web Warriors</em>.</p>
<div className = "captions">
  <p> NOW...</p>
</div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/tg52up16eq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>An animated film loosely based on this storyline, Spider-Man: Into the Spider-Verse, will be released in December 2018.</p>

<p>In 2018, Marvel announced a sequel event called Spider-Geddon.</p>
<img src={SpiderGeddon} />

</div>
  )
}
