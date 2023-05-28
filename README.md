[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/EF97x2Z3)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10974924&assignment_repo_type=AssignmentRepo)
# FED Exam - Vanilla Front-end Website

This bootstrap template is intended to help you deliever a amazing website which delights your end-users. Feel free to change, remove or start your own project from scratch. Please replace any text which starts with an `_`.

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

<!-- You must replace these links -->

- [Brief](https://fed-vocational-astro-course.vercel.app/en/exam-1/brief)
- [Design](https://www.figma.com/file/gn2IGaPWu3X6J1Qt0JWPqL/FED-1-exam-Espen-Henriksen-Snerten?type=design&node-id=0%3A1&t=0kpkEfjXVrWKJBnq-1)
- [Production deploy](https://insight-wave.netlify.app/)
- [Deployment CI](https://app.netlify.com/sites/insight-wave/deploys)
- [API Docs](https://airtable.com/appcDjjskefLIyJVY/api/docs#javascript/introduction)
- [API Endpoint](https://api.airtable.com/v0/appcDjjskefLIyJVY/const%20airtableTableName%20=%20%22tbl8r1smekKGfpewz%22;)

## Report

FED1-exam-Espen Henriksen Snerten 

Intro 

This document will serve as my semester exam
Rapport & Rationale, throughout the document I will detail my design  choices and the work process, ass well as the coding choices I went with.

This project was the toughest one to date, this one really put my problem solving skills to the test, the aim was to get almost all of the marks checked, at least the ones I felt were necessary for the site, I will go further in explaining why I opted to not include some features, to conclude the intro I will say that I am proud of how the site turned out, although I could have implemented a lot more features and animations had I worked a bit smarter.

The research phase

The research for the page was pretty straight forward, I had a look at different blog sites and article sites the get the general idea for how the site is constructed, then I made the first big mistake, I completely ignored looking up airtable ahead of the coding process, and in no small terms was that a big no no, but I will elaborate on that later. 

As in earlier projects this is a one man operation, so resource management is not really in the picture, everything is done by me, so once I felt confident enough in the design that was in my head I started working with figma.


The design phase

I will put it in writing for the world to see, I do not enjoy wire-framing, I absolutely can not stand working with gray, white and black blocks and have all the copy be prominently lorem ipsum, so I chose to work on the high fidelity design straight away. And that was the one I went with.

I began with creating the profile of the company I was designing the site for,you can find the profile in my figma file, I also created a couple of logos and consulted with a 
neutral third party on what was the best choice, and that was the one I went with.

The design and idea that was in my head was almost a super minimalist site, a lot of negative space to calm the viewer and at all times have the focus on the content the site was presenting to you, at first I contemplated using a high contrast colour like yellow or green, but settled on working with shades of blue as my injection of colour on my blank canvas, in my final build that is my deployed site you will see I broke some rules when it comes to what is conventional colour feedback, I chose a blue colour when you pass validation on the contact form instead of the regular green colour we all know, this was done to preserve the overall ascetics of the site, also keeping minimalism in mind.

The fonts I went with are nothing crazy, I worked with just four fonts for the site, and one of those was a one off on a signature I have in the about section, speaking of the signature, I really liked the idea of this fictional ceo putting pen to paper and lending etos to the message that this supposed tech company is presenting you. 

After the high fidelity was done I created a wireframe just to tick the box in the readme, I will once again state that I do not like to wireframe.


The coding phase

I began as I have always done, and created the framework for the site with html, there really is nothing to it, the only new thing I did this time is that I used anchor tags for the index site as that contained the about and contact section as well.

I styled all static elements, worked and tinkered around a few design choices that ended up being different from my figma design, I really stand behind the different choices I went with compared to the high fidelity.

Now came the hard part, the dynamic elements of my page, the biggest mistake I made was that I completely blew off how hard I felt the introduction to airtable was gonna be, I struggled for some time setting up a base and understanding the how the fields worked and how I could write a fetch request to display the content on my site, here is where the bulk of my time on this project was spent, once I got it, new bugs and problems occurred, but thanks to AI technology what I once could spend a day on solving I now only spent hours, even minutes.

One really cool thing I worked out is that I can write code in airtable, as in the blogpost it self, wrapping each paragraph in a p tag and using a h tag where appropriate was the key for me to solving how the layout of the text content was going to be rendered, I also managed to include a like button that post to airtable, and that is pretty cool, you can also filter the blogs in the list by the number of likes, with that in place the post it self was done and I could move on to the carousel and the blog archive/list.

I choose to load in 12 and 12 posts at a time on the list so as to have an even number for my grid layout on desktop and mobile, I really struggled trying to style the load more button, as on ios it always came out wonky, the solution to this was a rework of the button and the loader animation, where the button instead of a + sign there now is an icon, and the loader kind of looks like the icon deconstructed and rotating, this was really a blessing in disguise as the final result looks way cooler.

The carousel is really the one thing where I'm not as sure of myself, it work's but I chose to not have an animation on it as it uses a horizontal scroll on mobile devices and that just ended up confusing me personally and the people I showed the project to as I made it, it looks ok, but I feel there is room for improvement or even a complete rework.

The contact section is a functioning form that posts to airtable, and even displays a success modal, had I had more time I would have implemented a loading animation on the button with a timeout on the form submit in the js code to match the success modal, but unfortunately that was cut, I opted to forgo a captcha and instead focused my time on getting search and filter functionality for my list to work, I will include a captcha on my portfolio site as that is actually going to be a site with real world use.

The final thing I will point out in the coding phase is just how last minute the comment functionality was implemented, I feel that it looks good, but the code is a bit of a mess, will work on this in the future, I really wanted to include filters and even the ability to delete your own comment, but that opens the site to user authentication and I had not the knowledge or time to get that in place, also something I will look into.

Bug fixing went as usual, I let friends and family test the site out, and adjusted the design according to feedback and bug fixes along the way, I mostly spoke to and gathered user insight from my partner, and the feedback I got was really useful in realtime.


 
Conclusion 

to conclude my rapport, I designed and coded a site that caters to the target group in my profile, the site has a neat structure and a minimalist design, the functionality of the site is good enough, you can filter the list, search for authors or post title, and the ability to leave a comment and a like on the post is actually crucial to the idea behind the blog that we got in the repo, that being that this is a site to gather information for a crm for your fictitious future product.     

This was a tough one, I ticked most of the delivery requirements for this project,
I always feel I could have done more, but time ran out yet again, as always this was a huge learning experience.

Espen Henriksen Snerten

References

Icons: 
https://icons.getbootstrap.com/

Fonts:
https://www.1001fonts.com/adam-cg-pro-font.html 
https://www.1001fonts.com/lovtony-font.html
https://www.1001fonts.com/reitam-font.html 
https://fonts.google.com/specimen/Roboto

Media: 

https://unsplash.com/photos/N7FtpkC_P7o 
https://unsplash.com/photos/0w-uTa0Xz7w 
https://unsplash.com/photos/2n1SciGY5dI 
https://unsplash.com/photos/wumr9tBxDSE 
https://unsplash.com/photos/F_EooJ3-uTs 
https://unsplash.com/photos/5UQoVk8_d-4 
https://unsplash.com/photos/30D7430ywf4 
https://unsplash.com/photos/qZ1KmFjfQq8 
https://unsplash.com/photos/0GbrjL3vZF4 
https://unsplash.com/photos/yDgk902WAdY 
https://unsplash.com/photos/ZZ3qxWFZNRg 
https://unsplash.com/photos/0aRycsfH57A 
https://unsplash.com/photos/ckfXPMb2_BI 
https://unsplash.com/photos/TamMbr4okv4 
https://unsplash.com/photos/Mis5fyJi7Q0 
https://unsplash.com/photos/3fPXt37X6UQ 
https://unsplash.com/photos/6anudmpILw4 
https://unsplash.com/photos/dp9Jrww_BRs 
https://unsplash.com/photos/HG3Zy9sCCUg 
https://unsplash.com/photos/nNj65l7MdBY 
https://unsplash.com/photos/Fh3Dtg6QX4Q 
https://unsplash.com/photos/Q1p7bh3SHj8 
https://unsplash.com/photos/gapYVvUg1M8 
https://unsplash.com/photos/GGPp4rCpbUM 
https://unsplash.com/photos/io7dX_1EFCg 
https://www.sunreef-yachts.com/images/3de2c750a33ca438a4ef1213700bca03b3b431b0/src/488,-sunreef-power-eco-electric-catamarans.jpg?3.8.0.8393.213?3.8.0.8393.213 


## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://0.0.0.0:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [x] A error message is present when the End-user encounters a error while viewing the index page.
- [x] A error message is present when the End-user encounters a error while viewing the details page.
- [x] As a customer I can view the title of the item on the browser tab for a details page.
- [x] As a customer I can view validation message when they input an incorrect name.
- [x] As a customer I can view validation message when they input an incorrect subject that is less than 15 characters.
- [x] As a customer I can view validation message when they input an incorrect Email address.
- [x] As a customer I want to be able to view the latest blog posts on the home page.
- [x] As a customer, I want to see a list of the first 10 blog posts on the blog section, so that I can quickly scan through the content and decide which posts I want to read.
- [x] As a customer I want to be able to view a list of all blog posts on the blog section.
- [x] As a customer I want A responsive website that can be As a customer, I want to ensure that the website is responsive and accessible so that I can access it on any device and easily navigate through it using any accessibility tools I need.
- [x] As a customer, I want to see a clear and visually appealing design on the website, so that I can easily read the content and engage with the website.
- [x] As a customer, I want to see a carousel/slider on the home page to display the latest blog posts, so that I can quickly access and view the latest content.
- [x] As a customer, I want to be able to click on a blog post and be taken to a page with specific details about that post, so that I can get more in-depth information about the topic.
- [x] As a customer, I want to be able to click on images in a blog post and see a larger version in a modal, so that I can view images in greater detail.
- [x] As a customer, I want to be able to easily contact the website owners through a contact form, so that I can reach out with any questions or feedback.
- [x] As a customer, I want to see error messages when I fill out the contact form incorrectly, so that I can correct my mistakes and successfully submit my message.

## End-user success criteria (Optional - 100%)

- [x] End-user can search for a specific item.
- [x] End-user can filter the list.
- [ ] End-user can sort list by;
  - [ ] Name ascending order
  - [ ] Name descending order
- [x] Confirmation modal after custumer submits a successful contact form.
- [x] End-user can auto-fill the contact form using the browser auto-fill.
- [x] End-user can auto-fill the contact form using a password manager.
- [x] Validation still works when End-user uses copy and pastes into input fields.
- [x] End-user can see a postive feedback when they input correct info and pass validation.
- [x] End-user can experience pleasant animations.
- [ ] End-user needs to prove there are human using a captcha feature on the contact form.
  - [ ] Each item in the list has a staggered animation.
  - [x] Contact form success modal fades in.
- [x] End-user can view a custom favicon.
- [x] CSS uses variables
- [x] Code is dry - There are no repeating functions, variables.
- [ ] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [x] As a stakeholder, I want to view the website analytics.
- [x] As a stakeholder, I want to show my customers a disclamer on the website, so that they are aware of the terms and conditions of using the website.
- [ ] As a customer, I want to ensure that my personal information submitted through the contact form is kept secure and not shared with any third-party entities.
- [x] As a customer, I want to be able to sort, filter, or search the blog posts, so that I can quickly find the content that is most relevant to me.
- [x] As a customer, I want to be able to submit comments on a blog post, so that I can engage with other readers and share my thoughts on the topic.

- [ ] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [x] Is user-friendly
  - [x] Effective use of the pillars of design
    - [x] Typography
    - [x] Colour
    - [x] Composition
    - [x] Art Direction
    - [x] Motion
  - [x] Adhered to principles of design
    - [x] Contrast
    - [x] Balance and alignment
    - [x] Emphasis
    - [x] Proportion
    - [x] Hiearchy
    - [x] Repetition
    - [x] Ryhthem
    - [x] Pattern
    - [x] Negative space
    - [x] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [x] All pages have a meta description.
- [x] All pages have a valid title.
- [x] All pages import the correct css files.
- [x] All pages import the correct JS file.
- [x] Details page URL includes a query param.
- [x] My website makes a GET request to an API to get a list of results.
- [x] My website makes a GET request to an API to get details of one result.
- [x] Input fields have the following attributes;
- [x] All images have an alt tag;
  - [x] A name,
  - [x] A placeholder,
  - [x] A aria-describedby,
  - [x] Required
- [x] I have not copied Javascript code.
- [x] I have not used a Javascript library.
- [x] Removed all unused files.
- [x] Named all images properly.
- [x] Committed all my code to github.
- [x] My repo is publically viewable.
- [ ] I've submitted/ written a report.
- [x] I've removed all todo notes in code.
- [x] I've removed all console logs in code.
- [x] Code is formatted correctly.
- [x] There are no red underlines in VSCode.
- [x] There are no error messages in the terminal when I run the project.
- [x] My code is indented correctly.
- [ ] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Espen Henriksen Snerten (@EspenSnerten)
- Monde Sineke (@S3ak)
