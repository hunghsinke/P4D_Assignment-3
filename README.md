# P4D_Assignment 3
 Programming for Design Assignment 3 One-page site

## Design concepts
In my quest to design a website inspired by Aboriginal culture in the ACT, I embarked on a thoughtful research journey. I delved into Pinterest and explored various websites dedicated to this cultural heritage. Through this exploration, a recurring color scheme of green and brown emerged as a prevalent and culturally resonant choice. To ensure the authenticity of my design, I sourced numerous projects and eventually stumbled upon a project on GitHub that brilliantly utilised this same color palette. Leveraging Figma, I meticulously sought out the exact hex codes that matched the colors from this project, aiming to infuse my website with a genuine and respectful representation of Aboriginal culture in the ACT. This meticulous approach underscored my commitment to a thoughtful and culturally sensitive design process.

I use Figma to create and refine the color theme of my website. I start by selecting a color palette that complements my website's branding and style. Figma's color picker and swatch system make it easy to experiment with different color combinations. I also use Figma to apply these colors consistently across various design elements, ensuring a cohesive and visually appealing look. 

Additionally, Figma allows me to crop or mask images, which I use to remove any unwanted white side bars from images I include in my website. This helps maintain a clean and uniform appearance in my web design, all within the same tool.

- Pinterest colour suggestion:
![alt text](https://github.com/hunghsinke/P4D_Assignment-3/blob/main/assets/img/pinterest.png)

- Website source [here](https://phillip-chen.netlify.app/case-study-assets/ui-prototype-projects/map-prototype/)

![alt text](https://github.com/hunghsinke/P4D_Assignment-3/blob/main/assets/img/colour-theme.png)

## Library:
Mosonary- https://masonry.desandro.com/layout
This is used for the Montage layout. 

I have tried to use Glide JS library, but it did not provide me with enough value to keep working on it. This was originally used to do a scrolling image collage. Here is my thoughts on the experience using this library: 

> I initially attempted to implement a side-scrolling image feature on my website using Glide.JS, a popular JavaScript library. However, I ultimately opted not to use it due to the complexity and learning curve associated with the library. It presented a challenge that I found too time-consuming to overcome. Instead, I turned to CSS, which provided a more straightforward and familiar solution for achieving the same effect. This choice allowed me to streamline the development process and maintain greater control over the design, effectively addressing one of the obstacles I encountered in the project.

## Connect with Us page:
If you hover over the "Connect now" button, you will find the button will change to light green. When you click on the button, you will see it changed to a darker green. I chose three different green for this button. 


## Image use:
The image for the welcome message and about this website is from the Australian Institute of Aboriginal and Torres Strait islander Studies (AIATSIS). 

Most of the images for the burial section is from this [website](https://www.ngunnawal.org/gallery).

## Burial section
The burial section has been designed using flexbox. The container div holds all the content inside it. Inside the container div there are two divs.

I also tried to us JavaScript Masonry library to do **montage** layout. However, after completing the layout using Masonry library, I find that it's very difficult to adjust each photo. Therefore, I took my professor's advice and use **Adaptive Photo Layout with Flexbox**. I successfully developed the montage layout using Flexbox and you can see the beautiful layout in my program.  

## Git pull and merge request
Through the process I also learn to use Git pull, push and merge request. To perform actions like pulling, pushing, and creating a merge request on GitHub, you need to be familiar with Git, a distributed version control system. Here's a brief explanation of each:
- **Pull (Pull Request)**: A "pull request" is a way to propose changes to a repository. To create one, follow these steps:

> - Fork the repository you want to contribute to on GitHub.
> - Clone your forked repository to your local machine using **'git clone'**.
> - Create a new branch with git checkout **'-b branch-name'**.
> - Make your changes, commit them using **'git commit'**, and push the branch with **'git push'** origin **'branch-name'**.
> - Go to the original repository on GitHub and create a pull request, specifying the base and compare branches.

- **Push**: To push your changes to a remote repository (like on GitHub), follow these steps:

> - Commit your changes locally using git commit.
> - Push the changes to the remote repository using git push origin branch-name.
> - If you're pushing to the main branch, you might not need to specify the branch name (e.g., git push origin main).

- **Merge Request (or Pull Request)**: Once you've pushed your changes and created a pull request, someone with write access to the repository can review and merge your changes. They will:

> - Review your code and discuss any necessary changes.
> - Once satisfied, they will merge the pull request.
> - The changes are now incorporated into the original repository.

## Navigation Bar
The navigation bar was meticulously crafted to encompass five distinct elements, each serving as a direct portal to the corresponding sections of the webpage. These navigation elements have been designed to remain affixed to the top of the page and follow the user as they scroll downward, thus ensuring seamless accessibility. In an additional layer of user-centric functionality, the navigation bar is intelligently configured to automatically disappear when the user scrolls down, enhancing the visual focus on the webpage's content. Specifically, the **"Sacred Tree"** element was designed to seamlessly guide the user to the Tree section, **"Stone Implements"** functions as a navigational link to the Stone section, and **"Aboriginal Burials"** offers direct access to the 'burial' section of the webpage. This intentional design structure, which includes the dynamic behavior of the navigation bar, ensures a user-friendly and coherent browsing experience while optimizing the visibility of essential content.

## Sources

## Improvements
As I reflect on the ongoing development of the website, I recognise that the next phase is to dedicated focus on enhancing its responsiveness. While I did make an initial attempt to address this aspect, I've come to appreciate the intricacies and challenges involved in achieving optimal responsiveness. Consequently, I've chosen to defer this task for the time being, recognising the importance of careful consideration and planning in order to effectively optimise the website's performance on various devices and screen sizes. This decision underscores my commitment to a thoughtful and deliberate approach to web development.


## Assignment task explained

## Task 
For this assignment, we want you to conduct research around a set topic and create a one page web siteLinks to an external site. that provides the user with an interactive and engaging understanding of the topic. The topic and resources about the topic are here. You must use these resources at a minimum to inform your understanding of the topic. You are encouraged to do additional research of your own to augment your understanding and get a better mark.

You should use a range of programming techniques covered in this unit as you build this site; don't get so carried away in your design that you forget this is actually an assignment on programming! :)  You are able to use additional libraries like jQuery in your production, but you are strongly discouraged from using libraries that take care of a lot of the programming work for you.  For example, there are some great scroller libraries out there that let you do fun effects without using any code; these should be avoided because they rob you of the chance of demonstrating your own skills.  If you were developing the site for normal circumstances you'd definitely look at using a library, but remember, this is an assignment about programming, so the more you can do yourself, the better!

## Submission
Upload your code to GitHub and share a working link on Canvas. 

You need to include (at a minimum):

- index.html - the HTML markup for your one page site
- index.css - the CSS stylesheet for your one page site
- index.js - all javascript code used on your one page site
- readme.md - a markdown file that contains your producer notes
- lib/  (optional) - a folder containing any additional libraries or APIs you have used (eg: jQuery) - note the restriction above though!
- assets/ (optional) - a folder containing any assets your site needs such as images
- The optional elements really are optional.  You won't get or lose any marks by not having them or having them included; they're just there for people who might want to include images or other assets in their site.

## Assessment criteria
Minimum requirements to pass
In order to pass this assignment, you must:

- Submit a complete working web site that uses HTML, CSS and Javascript components in the files and folders specified above - it is your responsibility to ensure that the site is complete and working prior to submission.  Sites that do not work will be required to resubmit and will be penalised with a mark reduction of 10%.
- Demonstrate the ability to use Javascript as a design tool consistent with the material we have covered throughout the unit (basic programming constructs like variables, functions, conditionals and loops, use of the Web API to access and modify the DOM and respond to events such as mouse clicks)
submit developer notes in markdown format that highlights key issues and features of the submitted assignment
- Present information about the topic consistent with the supplied materials

## Additional marks
Additional marks will count towards higher grades (credit, distinction, high distinction) and will be granted to assignments that demonstrate achievement beyond the requirements. Additional marks will be awarded for:

- creativity and presentation - how creatively you respond to the topic and how innovative you are in the ways that you use the technology to support your design; also includes the overall presentation of the site and how favourably it compares with industry standards
- technical achievement - demonstrating techniques that exceed the level discussed in classes - this normally involves doing additional study and learning from resources from unit notes and that you discover from your own research.  Avoid just copying online tutorials though, as this just shows you can cut and paste and leads you dangerously close to plagiarism.  Use online tutorials to learn how to do something, but write your own original code to demonstrate that you understand the concepts.
- attention to detail - making sure your work has no typos or errors that affect the presentation of the web site; maintaining good separation between content, presentation and behaviour; commenting and documenting your code efficiently so that it's easy to understand the code you write and demonstrates that you understand what the code does.
- engagement with topic - demonstrating additional research around the topic that gives your site additional depth and interest
self-reflection - how much insight your readme.md file and code comments provide into your production processes, understanding and approach to the assignment.  What we're looking for here is your ability to look at your own work critically; to recognise the things you did well and the things that you could have possibly improved.