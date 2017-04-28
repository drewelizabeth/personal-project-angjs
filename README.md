# Angular Boilerplate with ui-router, Gulp, and SCSS

This repository is a set up for an Angular single page site. There is already a file structure setup in the development folder that gulp will use to compile and compress your code and move to and create a distribution folder. The node server is set up ready to connect to an SQL database using massive.

## Installing

After cloning the repo run the following command to install all needed packages.

`NPM install`

If you need to install Node.js and NPM it can be downloaded here: [Node offical site](https://nodejs.org/en/download/).

## Making this your own

Chances are you don't want your project to be called Angular-boilerplate and you want to push this to a new repo that is named more appropriately for you project.

Easy way is to create a new repo on your github. Then on the command line while inside of your respository run the following command git:

`git remote remove origin`

 This will remove your connection to the forked repo without deleting your code or the repo. Now you can push it to a new repo with an appropriate name, run the commands under 'push an existing repository from the command line' when making a new repository. The commands are:

`git remote add origin https://github.com/Rasbandit/______.git`

`git push -u origin master`

Then rename your local folder and you have a basic app ready to go.

## Gulp

Gulp is set up to compile and compress your HTML, SCSS, and JS. It will move all your work from the development folder into another folder called dist(short for distribution folder) that it will create and manage. One major advantage of Gulp is that you don't have to keep adding files to be referenced in your index.html file since you are concatenating it all into one file.

I keep my index.html file in the development folder. Gulp will make a copy and moves it to the dist folder as well. This makes it so all needed files are in the dist folder, and our index.html can reference the CSS and JS files in the same folder.

To run gulp, just type `gulp` in the root directory of the repo after you run NPM install. Gulp will run all the tasks found in the gulpfile.js and keep recompiling every time a change to any of the files it's watching has been made. If you create a new file you will need to stop gulp by pressing ctrl-c and then rerun gulp.

Gulp is also set up to compile your ES6 javascript to ES5, so feel free to use all the ES6 you want.

## SCSS

SCSS is a CSS pre-processed language, meaning gulp will go through and convert SCSS to CSS, because the browser does not understand SCSS. SCSS understands all CSS and some extra goodies, like variable creation and minor logic. If you want to learn more about SCSS you can visit there official site here: [SASS offical site](http://sass-lang.com/). (SASS and SCSS are very similar so don't be confused that the site says SASS. Going to the learn page will teach you how to use both).

The File structure of SCSS is under the styles folder in development. There are 4 files outside the views folders, these are the files you can use to set up a lot of cool features, like mixins and variables. The most important one is the reference.scss file. you have to include the file path to every file you create and want to use. If you don't gulp will not add it to the bundle.css file.

All but the reference.scss file start their name with an _ character. This is a special setup SCSS uses, it is needed if you want to use the variables and mixins from the other documents. You don't need to include the _ when adding the file to the reference document.
