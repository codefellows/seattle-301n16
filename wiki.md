# Reading 1
## How to make internet sites responsive to mobile devises
https://learn.shayhowe.com/advanced-html-css/responsive-web-design/

### Responsive vs Adaptive vs Mobile
    Responsive- quickly reacts to changes on the site: currently the most commonly used practice 
    Adaptive- easily modified to fit a new purpose: often works the same as responsive
    Mobile- a separate website for the mobile devices.  

### Flexible Layouts 
  Building a layout to a website that is flexible and adjusts with the needed width of the browser / devise displaying the page
    vw viewports width   vh viewports height
    vmin minimum of the w or h of the viewport
    vmax maximum of the w or h of hte viewport
  
  
## Float
  https://css-tricks.com/all-about-floats/
  Floats aren't used regularly, but have their place. Floats can be used to help text reflow to a photo, rather than getting covered by the photo. 

  clear - can be used to make sure other blocks don't float into vacant space left after a block above is floating. 

## Don't Overthink it Grids
  https://css-tricks.com/dont-overthink-it-grids/

## CSS floats explained by riding an escalator 
  https://www.freecodecamp.org/news/css-floats-explained-by-riding-an-escalator-57fa55232333/

## SMACSS online CSS book
  http://smacss.com/book/





# Read 3: Flexbox and Templating 

## Handlebars in JS
https://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes

### 0 - Adding Handlebars to your project
  http://handlebarsjs.com/ Download the copy here and add it to the HTML header with a script tag or add a link with the script tag. 

### 1 - Templates
  Script tags are used with HTML syntax blended with extra {} from Handlebar. 

### 2 - Expresions 
  {{Use of double curly brackets signifies Handlebars}}
  {{{Tripple handlebars allows us to create HTML markup as text}}}

### 3- Context
  There are modifiers, like 'each' and 'with' and 'if' that allow the user to access specific information within an object 

### 4- Helpers
  Helper methods can be called within double curly brackets i.e. {{this.name}}

### 5- Block Helpers
  This one is confusing to me and I need to spend more time on it. 

## Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

display: flex - allows for flex flow
order: <interger> - displays blocks by integer rather than HTML order 
flex-direction: row | row-reverse | colum | colum-reverse
flex-wrap: nowrap | wrap | wrap-reverse
flex-grow: allows flex items to grow to take up space in a parent container 
flex-shrink: allows flex items to shrink to fit
justify-content: flex-start | flex-end | center | space-between: | space around | space evenly
align-self: auto | flex-start | flex-end | center | baseline | stretch 
align-items: flex-start | flex-end | center | stretch | baseline 
align-content: flex-start | flex-end | center | stretch | space-between | space-around
=======



# Reading 2

## 6 Reasons for Paired Programing
  https://www.codefellows.org/blog/6-reasons-for-pair-programming/

  1: Greater efficiency
  2: Engaged collaboration
  3: Learning from fellow students
  4: Social skills
  5: Job interview readiness
  6: Work environment readiness 

## JS and jQuery - Duckett

  $(li.hot) <- find all the <li> elements with the class of hot
  $(li.hot).addClass('complete'); $(homing beacon).method(parameter)

  ### But Why JQuery?
    1: Simple Selectors
    2: Common Tasks in Less Code
    3: Cross-browser Compatibility
    4: It is adorably little

  ### Random bits and bobs
    If a method is used to get information and the jQ object holds reference to multiple elements, only the first element will be referenced. 

    If a method is used to update information to a jQ object and that object holds reference to more than one element, all the elements will be updated. 

    Chaining: adding multiple methods, using dot notation, to one jQ object in one line of code.

    $(object).ready(function(){
      // code goes here
    }); 
    ^ ready to work function. Not super clear on this one but the code block that is inside the curly brackets can be used on other pages so thats rad. 

  .html() gives every element in the same new content
  .text() same new text content
  .replaceWith() replaces old content for new content
  .remove() removes all elements in the matched set
  .before() inserts contents before selected elements 
  .after() inserts contents after selected elements 
  .prepend() inserts contents inside the selected elements after the opening tag
  .append() inside the selected elements before the closing tag
  .attr() sets an attribute 
  .removeAttr() turns the element into a hippo
  .addClass() adds a class of spottedElephant
  .removeClass() removes a class if the class is purpleDog
  .css({ code }) allows for the CSS properties to be changed
  .each() allows for code to be ran on each item in a selector set, much like a loop 
  .on() creates an event listener
  .stopPropagation() stops the event from bubbling up to ancestors 
  



### Reading 4 Grids
grid-column-start: 
grid-column-end:
grid-column: gcs / gce
grid-row-start:
grid-row-end:
grid-row: grs / gre
grid-area: grs / gcs / gre / gce
order: 
grid-template-columns: % (can use px, ems, %, fr(fractions))
grid-template-rows: % until it = 100 or repeat(#,%);


### CheatSheet
https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285

#### Anchors
^The - matches any string that starts with The
end$ - matches a string that ends with end
^The - end$ exact string match
roar - matches any string that has the text roar in it 

#### Quantifiers: 
abc* matches a string that has ab followed by zero or more c
abc+ matches a string that has ab followed by one or more c
abc? matches a string that has ab followed by zero or one c
abc{2} maches a string that has ab followed by 2 c
abc{2, } two or more c
abc {2, 5} two to five c
a(bc)* a followed by zero or more bc
a(b|c) || a[bc] a followed by b or c 





https://regexr.com/ cheatsheet:






## Reading 4 Heroku

Heroku is a hosting service, allowing the user to build their own unique websites and deploy for free, including with a unique domain name.  

Heroku can be deployed locally while developing the site. 

Dynos are used to deploy the site and unless account holder has upgraded, the dyno will time out after 30 minutes of inactivity on the site. The user will have to wait for it to reload if they have kept the page open and have not been active for more than 30 minutes. 


## Read 5 Node JS
Resources: https://www.sitepoint.com/an-introduction-to-node-js/

Node is great for building applications that require collaboration: chat sites, live joint editing... Or for building APIs that handle a lot of requests and O/I situations.

Node works wonderfully with JSON files and is a JS language so developers can easily and quickly move between the languages and data bases. 






### Read 7: 

APIs: As far as I can tell, working with APIs is like training a donkey to fetch things for you and return them to the folks who asked for them. 

Suddenly, we can build these deeply dynamic webpages. I am so excited. 



