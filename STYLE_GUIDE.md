### Overview

Styles are located in the /src/styles folder and can generally be created with a corresponding React components (see the README on how to use the auto-generator CLI tools)

There are several stylesheets containing mixins and variables that optimize reusability and readability

- mixins.less
Use these mixins or create your own to be able to re-use multiple CSS rules with 1 command. Pass in parameters to customize the values of your styles

- colors.less
All colors used throughout the app should be stored as variables in this file. Avoid using hard-coded HEX or RGB values in any of the component stylesheets. This allows for a quick and streamlined UI polish process if colors need to be changed or tweaked in the future

- fonts.less
Import custom fonts in this file and make use of the font sizing mixins where applicable (smallFont, mediumFont, largeFont, etc). Use sizing factors in the variables.less file to standardize your sizings.

- variables.less
Store all custom px or rem values to standardize the size of reusable elements like buttons, pages, panels, tiles, etc.

- flex.less
A custom SetFlex layer with flexbox style mixins to optimize shorthand classnames for flex rows and columns. The basic mixins are .row, .column, .flex, and alignments and justifications classes

### SetFlex Approach

- Look for rows and columns within a design mock and lay out the HTML elements without styling
- Add .column or .row if elements aren't flowing in the right direction
- To center horizontally, .flex-center should help
- Prefer padding and margins over setting fixed heights and widths. This generally leads to fewer CSS rules
- .flex, .flex-self, and .flex-shrink are usually only necessary when there are repeated elements that need to align properly across multiple flex containers (like a list of customers)