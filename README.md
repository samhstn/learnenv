# A german language learning environment

## Check out the current working app [here](http://shouston3.github.io/learnenv/)

## What?

* Uses an array of 400 verbs, 200 in german, 200 in english
* Has an option to select the direction of translation
* Goes through 5 words at a time, noting where you are out of the 200
* Has an option to show/hide all, next and previous words

## Why?

I would like to learn German and wanted a learning environment to do so

## Current functionality

* The home page has the option of two translation directions, but only de -> en works
* The next and prev buttons work quite well, but the prev button does not go back to the beginning when at the start
* Has a counter which displays where you are in the 200 words
* The array of 400 words is in the correct order and outputs when needed, what more can you want from an array
* All buttons work fine including the option of both translation directions

## Future functionality

* Select where to start from in the input list
* Select how long you want the testing list to be
* A box to check if you got an answer wrong and then a separate test for the answers you got wrong
* When familiar with node.js, be able to use backend to save mistakes log as well as reset mistakes log

## Tasks

* Push everything to master and to gh-pages
* There should be an option below the langdir boxes for selecting the length of the array and the start point
* It should be two sliders one which adjusts the start point of the testing array in batches of 10 (5 words) and the other to adjust the length of the testing array
* It should default to zero and length 10, this should be read by one function which takes these two arguments then adjusts the global variable of input to the specifications.
It should not leave behind distortions of the variable.
* To start we should have just plus and minus buttons to adjust the default start point and length and add the sliding functionality later
* Organize javascript files to be shorter and place functions well with good names
* Lay out css better and refactor it


## Stretch Goals

* Add mistakes log with mistakes test option
* Add more verbs
* Add a separate nouns option
* Add a help page for how the app works
* Add smooth transitions
