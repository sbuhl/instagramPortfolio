# Building an Instagram Based Portfolio with Bootstrap
###### Following the tutorial from [Steve Everett](https://webdesign.tutsplus.com/tutorials/building-an-instagram-based-portfolio-with-bootstrap--cms-22243)

##Remarks
The original tutorial was used with Bootstrap V3 and with the Instagram API which is no more working. So I had to adapt the tutoriels.
Find here the adaptations I made.

About the design of the page and the PSD, I didn't made much changes on it.
I followed roughly the process describe in the first part of the tutoriel : [Designing a Simple Instagram Based Portfolio in Photoshop](https://webdesign.tutsplus.com/tutorials/designing-a-simple-instagram-based-portfolio-in-photoshop--cms-21402). You will find my version in the PSD folder.

##1. Tools
I only used two tools :
* [Bootstrap V4](https://getbootstrap.com/)
* [Instageed.js](http://instafeedjs.com)

I didn't used Sass, neither Modernizr. It's only for the exercice and I didn't check the behavior of the website on each browser (only Chrome and Firefox).

Now, the build !

#2. File and Folder Structure.
Quite simple :
*css/
*img/
*index.html
*js/
*node_modules/
*package.json
*package-lock.json
*PSD
*README.md
Few explenations about each folder or file.
1. css/ this folder contains only one file : instagramPortfolioStyle.css. Why such a complicated name and no "style.css". Because, when I use Alfred to find a file or a folder on my laptop, if I write "style.css", I will have ten thousands results. It's quicker with this name :-)
2. img/ this folder contains two files : the background image of a mountain and a placeholder for the instagram account. I could delete this last one but I keep it for the explanation of the process.
3. index.html the core of our website.
4. js/ this folder contains two files : the app file with some personnal javascript and the instafeed.min.js file. The bootstraps files are in the node_modules folder.
5. node_modules this folder arrived when I installed Bootstrap via npm and the command : npm install bootstrap. But first, you have to init npm on your folder.
6. package.json and package-lock.json are linked with the instalaltion of bootstrap using npm
7. PSD folder, for you.
8. Readme.md this file :-)









