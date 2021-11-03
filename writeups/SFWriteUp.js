const stickley = {
    section1: {
        title: "Description",
        p1: "For this project, my research partner Joe and I wanted to tackle a real-world problem as opposed to conducting an academic research. To that end, we decided to analyze a pre-existing website belonging to an established company and see how we could improve their user experience to better meet their goals.",
        p2: "After contacting countless local organizations and requesting permission to run a usability study on their website, we received a favorable response from Stickley Furniture, allowing us to conduct our study on their secondary website, stickleyaudi.com.",
        images1: ["500px", [{url: "/Projects/ux/stickley/stickley.png", name: "Homepage of stickleyaudi.com"}], "Homepage of stickleyaudi.com"],
        p3: "Our analysis consisted of cognitive walkthroughs, questionnaires, web analytics and eye-tracking. As the website was fully developed, we intended to discover subtle usability errors that may contribute to a reduction of website usability, and in turn, may impact the business goals of Stickley Furniture."
    },
    section2: {
        title: "Research",
        p1: "We began by researching the current state of e-commerce websites, the role of usability in e-commerce websites, and how the usability of e-commerce websites are generally assessed.",
        p2: "Studies regarding the use of cognitive walkthroughs, web analytics and eye-tracking in e-commerce usability testing were used to justify our use of those methods and understand how they have been used in the past.",
        p3: "Additionally, our correspondence with Stickley revealed to us that they had two main goals in operating their website:",
        list: {
            l1: "1. Allow users to locate specific pieces of furniture.",
            l2: "2. Allow users to find their nearest store. "
        }
    },
    section3: {
        title: "Analysis",
        p1: "Our analysis began with the implementation of the web analytics tool Hotjar within the stickleyaudi.com website. The tool allowed us to collect information about user behavior using heatmaps, user recordings and conversion funnels.",
        images1: ["300px", [{url: "/Projects/ux/stickley/cm.png", name: "Clickmap of homepage"}, {url: "/Projects/ux/stickley/ur.png", name: "User recording"}], "Example: Clickmap  and User Recording"],
        images2: ["300px", [{url: "/Projects/ux/stickley/cf.png", name: "Conversion funnel from homepage to nearest store locator"}], "Example: Conversion funnel from homepage to nearest store locator"],
        p2: "The next phase of the analysis was in-person user-testing which included a cognitive walkthrough, post-study survey, eye-tracking and screen recording.",
        p3: "Each participant was asked to use the website to complete a task which included locating a piece of furniture and locating their nearest store. While engaged in this activity, their eye-movements and screen activity were recorded.",
        images4: ["300px", [{url: "/Projects/ux/stickley/eyetracker.png", name: "Eyetracker in action"}], "Example: Eyetracker in action"],
        p4: "Afterwards, they were asked to complete a questionnaire containing the Post-Study System Usability Scale (PSSUQ) which measured the overall user satisfaction, system usefulness, information quality and the interface quality of the website.",
    },
    section4: {
        title: "Results",
        p1: "From these analyses, we were able to identify and provide design solutions for eight usability issues present within the website. These include:",
        list: {
            l1: "1. Remove unused features",
            l2: "2. Automatically provide nearest store",
            l3: "3. Implement search assistance",
            l4: "4. Reduce length of homepage",
            l5: "5. Redesign 'Find Nearest Store' button",
            l6: "6. Incorporate dynamic Product Visualization",
            l7: "7. Provide Google street view of store",
            l8: "8. Emphasize the availability of 'chat' feature"
        },
        p2: "Since we did not have authorization to implement these changes ourselves, we drafted a document explaining the reasoning behind each suggestion and delivered it to Stickley."
    },
    section5: {
        title: "Reflection",
        p1: "This project allowed us to work on a highly developed product and utilize more nuanced means of UX research to identify any subtle, remaining usability issues. With the hopes of identifying such issues, we used two uncommon analysis techniques: eye-tracking and web analytics. Getting to use these technologies was educational and interesting. ",
        p2: "Working with Stickley was a great learning experience as we got to help an ongoing business better meet their business goals. At the time of writing, Stickley has incorporated some of our design suggestions to their website, and we are happy to have helped them improve their website's user experience.",
        quote: {
            text: "Joe and Pri did a great job of designing a research methodology to identify areas that could be improved and defined several actionable design recommendations which we implemented on our site. The project ran smoothly during the 3 month engagement. I would definitely work with them again!",
            quotee: "- Nicole, O., Stickley Furniture"
        }
    }
}

export default stickley