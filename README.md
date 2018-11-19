# GA-WDI-Project2
The second major project for the GA Wed Development Immersive. To make a React App with an API

# Project2 Idea 1
![Spider-VerseAPI](https://github.com/C-Abdulio/GA-WDI-Project2/blob/master/Wireframes/SpiderVerseAPI_Wireframe1.png)

A Data list documenting a summary of the popular Marvel comic book event, *SPIDER-VERSE*. Also lists all the characters involved in the event (mostly variations of the character Spider-Man). Finally, for post MVP, there could be a feature that allows users to input 3 parameters (Name, Gender, and Number) to create their own Spider-Person .

EDIT: In leau of any possible contention against sending data to a foreign API, I could change the final component to become a tribute to Stan Lee.

## API ~~*Attempting*~~ FAILED to use: https://comicvine.gamespot.com/api/
##~~This API was chosen for their robust list of various super hero characters, location and concepts from across all publishing houses. Need to sign in to an account to use. Currently in discussions with team to gain permissions.~~
EDIT: This organization behind this API has yet to come back with an answer in regards to signing up to use their API. So for the sake of time, this API is trashed.

## second API ~~*Attempting*~~ FAILED to use: http://spiderman.wikia.com/api.php?
##~~currently learning about how to parse this data into JSON in order to cull specific points. Wiki is not particular consistent but more dependable.~~
EDIT: Couldn't make this work

##CURRENT API: http://gateway.marvel.com:80/v1/public/characters?
EDIT: Not consistent, very cumbersome and did not compile all the necessary data. But it was the only one that worked.

# Minimum Viable Project:

- API NEEDS TO WORK, MAKE CALLS AND SEND DATA **check**
- NAV BAR CAN CHANGE VIEWS TO DIFFERENT COMPONENTS ON CLICK **check**
- LIST NEEDS TO RENDER **check**
- MAIN LIST NEEDS TO RENDER IN SPECIFIC ORDER **check**
- COMPONENTS CAN SCROLL DOWNWARD **check**
- CSS WORKS **check**

### Extra Goodies:
- Able to post data to the API (if permitted)
- Able to render the list data posted by the input( if permitted)
- Able to render the inputed data in a custimizable fashion depending on your gender(If permitted)
- Able to get any data or information from the API in regards to the life of Stan Lee (if available)
- Music plays in the background
- Various data is tied to dynamic sized divs
- Heroes Component can open up to show a large bio with several media


## Specs
 - Board is 100vw wide & 100vh long, with the chance of being bigger.
 - First component is a Nav Bar that has several OnClick events that changes the view of the APP to 5 different components.
 - Component is made out of 4 regular buttons and one image with an OnClick, in the shape of a stylized Spider.

![Component2](https://github.com/C-Abdulio/GA-WDI-Project2/blob/master/Wireframes/SpiderVerseAPI_ComponenGuide1.png)

 **Component 2 - Welcome Screen**
 - Just a regular Welcome screen. Made out of texts and an image

 ![Component3](https://github.com/C-Abdulio/GA-WDI-Project2/blob/master/Wireframes/SpiderVerseAPI_ComponenGuide2.png)

 **Component 3  - Intro Screen**
 - A brief summary of the events of the *Spider-Man* event, *SPIDER-VERSE*, featuring media such as images and perhaps a video or two, as well as hinting towards the current Spider-Event, *SPIDER-GEDDON*.

 ![Component4](https://github.com/C-Abdulio/GA-WDI-Project2/blob/master/Wireframes/SpiderVerseAPI_ComponenGuide3.png)

 **Component 4 - Character List**
 - A list of specific character data culled from the API, listing the core characters of the various Spider-Crossovers. Each Data will be contained in a div that has 4 elements: A profile image, their hero name, their real name & the Earth number they came from. Each div will be dynamically styled to fit their specific hero. May or may not include a more comprehensive bio. The list will go as follows:
  - Peter Parker/Spider-Man
  - Miles Morales/(Also) Spider-Man
  - Gwen Stacy/Spider-Gwen
  - Kaine Parker/Scarlet Spider(II)
  - Otto Octavius/Superior Spider-Man/Octopus
  ~~*- Cindy Moon/Silk*~~
  - Aña Corazon/Araña
  ~~*- Spider-Uk*~~
  - Peter Porker/Spider-Ham
  ~~*- Morlun
  - The Inheritors*~~

  EDIT: Not all characters where available from the API listing. Description and Appearance data was cut off from use during construction.

  ![Component5](https://github.com/C-Abdulio/GA-WDI-Project2/blob/master/Wireframes/SpiderVerseAPI_ComponenGuide4.png)

  **Component 5 - Vault of Spiders(Large API List)**
  - A list of character data regarding various characters in the Spider-Man universe, mostly including many alternate variations of the *Spider-Man* character of many races, genders and composition. Current plan is to have each list item placed in a div according to the following key values:
  - Hero name
  - Secret Identity
  - First Appearance: Name of comic, issue number, vol number and year of publication
  - An image (if available)
  Can and WILL be scaled down if necessary.

![Component6](https://github.com/C-Abdulio/GA-WDI-Project2/blob/master/Wireframes/SpiderVerseAPI_ComponenGuide5.png)
  ~~* **Component 6 - Post Screen**
  - 2 input fields and One Select Field that the user can interact with by inputting text.
  - Each input field corresponds to the following paramters:
   - Name of user
   - Gender(Boy/Girl/Alternative)
   - Number
  - When text is inputed, will render a div containing a customizable Spider-Avatar.
    - The Div will be rendered according to following parameters:
     - If Gender === "Boy", it will render a div featuring their name, the number of their Earth (e.g Earth - 1234) and a blue/red colored div featuring a shadowy Spider-Man figure.
     - If Gender === "Girl", it will render a div featuring their name, the number of their Earth (e.g Earth - 1234) and a teal/pink colored div featuring a shadowy Spider-Woman figure.
     - If Gender === "Alternative", the same will happen as the other two, but rendered with a black or white color and have a more gender neutral Spider-Avatar.*~~

 ![Component5](https://github.com/C-Abdulio/GA-WDI-Project2/blob/master/Wireframes/SpiderVerseAPI_ComponenGuide5After.png)

## ~~*This Will and MAY get cut if the API does not permit to insert user elements on to the list or if the feature cannot be properly implemented*~~

#EDIT: Could not fully comprehend inner working in time to to meet MVP. Had to be scrapped. Nobody gets to be a Spider-Man/Woman/Person. :(

**Component 6 Alt - A Tribute to Stan Lee**
- For another idea for a 6th component, and perhaps a far more reasonable *and appropriate* feature, is to create a component that renders API data to create a bio page about the late great legendary Marvel co-creator, Stan Lee. It will include a full bio, quotes, pictures and some video of interviews. Plus a heartfelt ode to the man from myself.

##~~Possible~~ LIKELY Problem scenarios
- API DOESN'T GET OR PUSH DATA!
- NO API IS AVAILABLE! PROJECT MUST BE CONSIDERABLY ALTERED TO MOVE FORWARD
- LIST DATA IS NOT BEING RENDERED CORRECTLY...OR AT ALL.
- ON CLICK EVENTS ARE NOT CHANGING VIEW STATES.
- ON CLICK EVENTS AND/OR FUNCTIONS CRASHES THE APP.
- COMPONENT STRUCTURE IS NOT RENDERED CORRECTLY! EVERYTHING IS ALL WONKY!!
- **PROPS AND STATE REFUSES TO PASS!! REEEEEEEEEEE!!!!**
- **NOT BEING ABLE TO REACH MVP BY FRIDAY....AGAIN!**

# FINAL REVIEW:
This was more of a struggle than it should have been...but then again, the app was a last minute passion project  that had no real purpose but to exists at my whimsy. I learned a lot about how other features and media interact with the various components. I learned that you need to think about the user when you are planning your components and figure out quickly how they can interact with your app in a productive way. A lot of time was unfortunately spent on trying to access the API and seeking to understand how to properly use the information given to me. In the end, I don't even think that I managed to get this  to work properly.

I heavily regret that I couldn't make the items more user-interactive, nor that I could implement the create-a-Spider feature. That would have added a lot more user replayability and would make the app a bit more than just an overrated list app.

But on the bright side, I managed to make it to MVP this time (if you can call it that) and all stylization more or less works. I was actually very happy that i learned how to reformat the list to call in a specific order. I hope post MVP, I can add the missing features

I would like to thank the following people who helped me with this project:
- Drake Talley
- Jason Karlin
- Tara Fenton
- John Masters
- Leo
- Seth
- Gabriel
- Anna
- Yang
- Marvel Comics and their busted and dated API
- Stan Lee. Excelsior!!!
- And my family, who's love, and infinite patience carried me forward when I kept stumbling in the dark.

Now with Youtube Link : https://youtu.be/PojVNDiNx-E
