#Fly Side Menu by Pete R.
Recreate an Airbnb iOS7 App Menu Animation using CSS3 and jQuery
Created by [Pete R.](http://www.thepetedesign.com), Founder of [BucketListly](http://www.bucketlistly.com)

[![Fly Side Menu](http://www.thepetedesign.com/images/fly_sidemenu_image.png "Fly Side Menu")](http://www.thepetedesign.com/demos/fly_sidemenu_demo.html)

## Demo
[View demo](http://www.thepetedesign.com/demos/fly_sidemenu_demo.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari on both desktop and smartphones have been tested. I have not tested this on IE.

## Basic Usage

Fly Side Menu is a script that will recreate the impressive animation you see on Airbnb's new iOS7 app using jQuery and CSS3. In additional to that, I've also added a few more options for you guys to play around with.

To add this to your website, make sure you've included the latest jQuery library together with `jquery.fly_sidemenu.js` and `fly_sidemenu.css` into your document's `<head>`, and make sure your HTML markup are as follows:
````html  
<body>
  ..
  <ul class="sidemenu">
    <li><a href="http://www.bucketlistly.com">BucketListly</a></li>
    <li><a href="http://www.mycolorscreen.com">MyColorScreen</a></li>
    <li><a href="http://www.thepetedesign.com">The Pete Design</a></li>
    <li><a href="http://www.thepetedesign.com/#design">Free jQuery Plugins</a></li>
    <li><a href="http://www.blog.bucketlistly.com">My Blog</a></li>
  </ul>
  ..
</body>
````

Note that your content inside this list will be displayed inside the sidebar. This can be placed anywhere you like on the page. Once that is done, simply call the function like this:

````javascript
  $(".sidemenu").fly_sidemenu({
    btnContent: "=", // This option let you define what appears inside the side menu button. You can add your custom icon here. This option accepts all HTML tags. The default value is "=" string.
    position: "left", // This option will let you define where the sidebar will appear on the page. Available options are "top", "left", "right", "bottom". The default value is "left"
    customSelector: "li", // In case you do not want to use lists, simply define your own css selector here. The default value is "li".
    hideButton: false // You can disable the auto creation of toggle button by changing this to true. The default value is false.
  });
````


## Public Method

### $.fn.toggleMenu()

With this plugin, you can toggle the open/close animation programmatically by calling the toggleMenu function like this:

````javascript
$(".sidemenu").toggleMenu();
````

Now you will have a similar kick ass side menu animation like you see on the AirBnb's iOS7 app. Stay tuned for more updates.

If you want to see more of my plugins, visit [The Pete Design](http://www.thepetedesign.com/#design), or follow me on [Twitter](http://www.twitter.com/peachananr) and [Github](http://www.github.com/peachananr).

## Other Resources
- [Tutorial](http://www.onextrapixel.com/2013/12/11/recreating-the-awesome-airbnb-ios7-menu-animation-for-the-web/)
