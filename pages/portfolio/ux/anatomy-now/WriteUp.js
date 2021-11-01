const anatomyNow = {
    section1: {
        title: "Description",
        p1: "This project was based at Duy Tan University in Da Nang, Vietnam where the team at CVS Labs was developing an anatomy software called AnatomyNow for multiple platforms. The software provided users with the capability to closely examine accurate anatomical models of the different systems and organs present within the human body.",
        p2: "We were called in as independent UX experts to examine and potentially redesign the desktop version of AnatomyNow.",
        images1: ["300px", [{url: "/Projects/ux/anatomy-now/oi-1.png", name: "Main menu of AnatomyNow"}], "Main menu of AnatomyNow"],
        images2: ["300px", [{url: "/Projects/ux/anatomy-now/oi-2.png", name: "3D model View of AnatomyNow"}], "3D model view of AnatomyNow"],
        p3: "After being introduced to the software by the dev team and getting to interact with the software on different platforms, we began to work on our task. Our first step was to conduct a thorough research on anatomy software and why they are used. Once we had a clear understanding of the current state of anatomy software, we moved on to the analysis of AnatomyNow."
    },
    section2: {
        title: "Analysis",
        p1: "We began the analysis by getting familiar with AnatomyNow. For this, each member of the group used the app in its current state and identified the what it can and cannot do. As the product was still under development, it was clear that some of the intended features had not been integrated yet or had only been integrated poorly.",
        p2: "Next, using information gained through the research and usage of the app, we created personas for representative users. In the case of AnatomyNow, these personas corresponded to a student, a professor and a medical professional, all of whom would be likely users for such an application.",
        images1: ["400px", [{url: "/Projects/ux/anatomy-now/AN-persona-1.png", name: "persona-1"}, {url: "/Projects/ux/anatomy-now/AN-persona-2.png", name: "persona-2"}, {url: "/Projects/ux/anatomy-now/AN-persona-3.png", name: "persona-3"}], "Personas created to represent the userbase of AnatomyNow "],
        p3: "Finally, we conducted a cognitive walkthrough: a process where a user is asked to perform a few tasks using the interface being tested and any thoughts or difficulties that the user comes across are noted by the researcher.",
        p4: "For AnatomyNow, we selected three users who had not used the app before, and asked them to perform a some tasks while speaking their thoughts out aloud. During these sessions, the users' words and actions were recorded using audio and screen recording. By analyzing these recordings, we compiled a list of the common problems found within the app and organized them by priority.",
    },
    section3: {
        title: "Design",
        p1: "Once we had identified the problems with the original design, we held ideation sessions to consider how these problems could be addressed in a redesign. Each team member created sketches visualizing solutions to the identified problems and team discussions were held where each solution was justified by the member proposing it. Once acceptable solutions were found, the design was finalized.",
        images1: ["300px", [{url: "/Projects/ux/anatomy-now/AN-sketch-1.jpg", name: "sketch-1"}, {url: "/Projects/ux/anatomy-now/AN-sketch-2.jpg", name: "sketch-2"}], "Rough sketches made for the redesign"],
    },
    section4: {
        title: "Prototype",
        p1: "To conduct user testing, we had planned to compare the existing interface with the new redesign. However, as the app was still in development, we were not allowed to use it for testing purposes. Therefore, two functional prototypes were created: One for the original interface, and one for the redesign.",
        images1: ["300px", [{url: "/Projects/ux/anatomy-now/old-proto-1.png", name: "Prototype of old interface"}, {url: "/Projects/ux/anatomy-now/old-proto-2.png", name: "Prototype of old interface"}], "Prototype of the original interface"],
        images2: ["300px", [{url: "/Projects/ux/anatomy-now/new-proto-1.png", name: "Prototype of new interface"}, {url: "/Projects/ux/anatomy-now/new-proto-2.png", name: "Prototype of new interface"}], "Prototype of the redesigned interface"],
        p2: "Both prototypes were created using Axure RP 8 and contained the same functionality. All of the functions that were considered important within the actual application were made to be functional within the prototypes. As some of the functions did not work as intended within the actual application, these were intentionally left malfunctional within the prototype of the original interface, while they were made to be functional according to the proposed solutions within the redesign."
    },
    section5: {
        title: "Evaluation",
        p1: "User testing was conducted using 13 participants who were randomly assigned to interact with either the original interface or the redesign. Similarly to the cognitive walkthrough, these participants were given a list of tasks to complete using the interface, while speaking their thoughts out loud. ",
        p2: "Additionally, they were also given a questionnaire which recorded their perceived difficulty of each task, perceived usability using the System Usability Scale (SUS) and any other comments.",
        p3: "The results revealed that the redesign may have improved the ease-of-use of the application, as 3 of the 5 main tasks yielded significantly low difficulty ratings, while one was visibly trending towards being lower. The overall perceived usability was significantly higher as indicated by the SUS scores of 67% for the original interface as compared to the 87% for the redesign.",
        images1: ["300px", [{url: "/Projects/ux/anatomy-now/task-difficulty.png", name: "Comparison of task difficulty between the interfaces"}, {url: "/Projects/ux/anatomy-now/anatomynowsus1.png", name: "Comparison of SUS score between the interfaces"}], "Comparison of Task difficulty and SUS score between the interfaces"],
    },
    section6: {
        title: "Reflection",
        p1: "It was an exciting experience to work on a UX project outside of the academic environment. It definitely was not an easy project considering the language barrier and the cultural differences involved. However, the dev team at CVS labs was very welcoming and helped us the best they could.",
        p2: "Our team only consisted of three members, of which one had no prior experience with UX, and it proved to be a challenge. However, myself and the other experienced group member managed to effectively divvy up the workload while providing mentorship for the new member, so that he could gain experience in the field.",
        p3: "I learned a lot about the capabilities of Axure during this project as I attempted to replicate the functionality of a software using just a prototyping tool. This project also gave me an appreciation of the importance of clear labels and icons in simplifying the users' experience."
    }
}

export default anatomyNow