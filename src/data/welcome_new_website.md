# Welcome to my new website.

I have built a new personal website from scratch. The previous website was
built with [HUGO](https://gohugo.io/),  Although it was fast and simple. I wanted to have something
more robust,  developed using the latest technology, so I created this website.
I plan to add a newsletter and comment functionality to this website, which
wouldn't be possible on the old website without using a third-party solution.

## Features of the new Website

* One of the changes on this website is the addition of
  [*serverless*](https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless).
  The Front-end is developed with [SvelteKit](https://kit.svelte.dev/) and connected to an open-source CRM
  called [strapi](https://strapi.io/). This setup will make it easy for me to update the site without
  messing with the backend or update the backend without messing with the
  Front-end. They are many advantages that come with separating your backend
  from the Front-end. I will let you find that on your own, but on the other
  side, hosting becomes challenging. You have to host the backed and Front-end
  separately. Luckily the is a free tie you can use for a small site like this
  one. The CRM is hosted on [Heroku](https://www.heroku.com/), and the Front-end is hosted on [Netlify](https://www.heroku.com/).

* Dark theme. Honestly, it should be the default of all websites on the internet

* Good Typography, It should be easy reading content now

* Code snippets support.

## Challenges
 The setup of the website is not perfect. I had challenges deploying SvelteKit
 to Netlify.  I have also run into some redirecting issues with SvelteKit. I
 had to spend more time learning all types of HTTP redirecting, and still, I
 used a hack to fix that issue. 

Another step back was trying to get the environment variable to work on
Netlify, but lucky enough I managed to fix the issue with enough googling. As
you could tell by now most of the issues I had were because of my lack of
understating of SvelteKit.

## Conclusion
I love SvelteKit, expect more projects from me developed using SvelteKit. I
have enjoyed creating this website. I hope you have a good time visiting it.

