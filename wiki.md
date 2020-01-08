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


