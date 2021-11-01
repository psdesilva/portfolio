const silverLining = {
    section1: {
        title: "Description",
        p1: "We were asked to design an app that allows it's users to screen for symptoms of four common mental health issues: depression, anxiety, post-traumatic stress, and alcohol addiction. Based on the results, the app should provide two suggestions to users if their mental health is deemed to be below-average: direct users to brief mindfulness-based breathing exercises, and connect users to mental health providers near them.",
        p2: "Additionally, the app should also have the ability to enable users to monitor the progress of their mental health over time, complete self-assessments multiple times, and access and share their progress reports.",
        p3: "My group and I proceeded to tackle the project using the standard UX design life cycle: Analyze, Design, Implement, and Evaluate. Due to academic time constraints, only one iteration of the cycle was conducted."
    },
    section2: {
        title: "Analysis",
        p1: "We began the analysis phase with the recruitment of representative users - users who resemble the population of users that may use a mental health app.",
        p2: "Our group aimed to target the app towards college-aged individuals therefore the participants chosen were between the ages of 20-29. These users were interviewed to identify their frustrations with similar apps, needs, wants and goals.",
        p3: "This information was then organized into an affinity diagram. This method allowed us to group the users' thoughts into distinguishable modules so that we could work through each systematically.",
        images1: ["300px", [{url: "/Projects/ux/silver-lining/waad.jpg", name: "Affinity Diagram"}], "Affinity diagram created using organized sticky notes"],
        p4: "Based on the gathered information, we created personas for our representative users. These personas allowed us to imagine our prospective userbase as real people, which enhanced the concept of keeping the user at the heart of the design by enabling us to discuss in terms of our now 'real' users.",
        images2: ["300px", [{url: "/Projects/ux/silver-lining/persona.jpg", name: "Persona"}], "Persona of a user named chad"],
        p5: "We also used the general project description and the information collected from users to create a Hierarchical Task Inventory (HTI), which helped us visualize the structure of the app we were to design.",
        images3: ["300px", [{url: "/Projects/ux/silver-lining/HTI.jpg", name: "Hierarchical Task Inventory"}], "HTI visualizing the structure of the app"],
    },
    section3: {
        title: "Design",
        p1: "We began the design phase with each of the group members sketching some ideas for the app design on paper while keeping the personas and the HTI in mind. At the end of the session, we held a group discussion and combined parts of each design to create a finalized sketch which everyone agreed on.",
        images1: ["300px", [{url: "/Projects/ux/silver-lining/sketch1.jpg", name: "sketch-1"}, {url: "/Projects/ux/silver-lining/sketch2.jpg", name: "sketch-2"}, {url: "/Projects/ux/silver-lining/sketch3.jpg", name: "sketch-3"}], "Rough sketches of the finalized design"],
        p2: "The finalized sketches were converted into an interactive wireframe using Axure RP 8. While the design was still quite low-fidelity, it allowed us the visualize how the app 'flows' according to the HTI.",
        images2: ["400px", [{url: "/Projects/ux/silver-lining/wireframe1.png", name: "wireframe-1"}, {url: "/Projects/ux/silver-lining/wireframe2.png", name: "wireframe-2"}], "Low-fidelity wireframe"],
        p3: "Analysis should be conducted iteratively, even while in the design phase. So, using the interactive wireframe, we conducted a formative evaluation in which other UX students attempted to use the wireframe and provided us with feedback regarding their experience.",
        p4: "Incorporating this information, we proceeded to add some visual elements and created a medium-fidelity prototype.",
        p5: "Additionally, the name of the app was decided after a discussion between group members to be 'Silver Lining, based on the common proverb 'Every cloud has a silver lining'. The name was chosen to symbolize to users that while mental illness may be dark and scary, better days will surely come.",
        images3: ["400px", [{url: "/Projects/ux/silver-lining/medium1.png", name: "medium-1"}, {url: "/Projects/ux/silver-lining/medium2.png", name: "medium-2"}, {url: "/Projects/ux/silver-lining/medium3.png", name: "medium-3"}], "Medium fidelity prototype"]
    },
    section4: {
        title: "Prototype",
        p1: "A high-fidelity, functional prototype was created to conduct the final summative evaluation. Adobe Xd was used to create this prototype due to it's ability to incorporate stunning visuals and animations.",
        p2: "This prototype was able to simulate the main features that were requested to be a part of the app including mental health screening, breathing exercises and mood tracking.",
        p3: "The color palette was chosen based on color theory which indicates that tints of blue and lavender are generally associated with peace, tranquility and calm, which are the values Silver Lining attempts to promote.",
        images1: ["400px", [{url: "/Projects/ux/silver-lining/final1.gif", name: "finalgif-1"}, {url: "/Projects/ux/silver-lining/final2.gif", name: "finalgif-2"}, {url: "/Projects/ux/silver-lining/final3.gif", name: "finalgif-3"}, {url: "/Projects/ux/silver-lining/final4.gif", name: "finalgif-4"}], "Functional high fidelity prototype"]
    },
    section5: {
        title: "Evaluation",
        p1: "The final prototype was evaluated by conducting user-testing on five participants. They were asked to perform a few tasks involving the main features highlighted above while data was collected to calculate the metrics of effectiveness, efficiency and satisfaction provided by the app. Each metric was operationalized as follows:",
        list: {
            l1: "Effectiveness: Task completion rate",
            l2: "Efficiency: Task completion time and Number of taps required to complete task",
            l3: "Satisfaction: Value gained by administering the standardized System Usability Scale (SUS)"
        },
        images1: ["300px", [{url: "/Projects/ux/silver-lining/results1.jpg", name: "results-1"}, {url: "/Projects/ux/silver-lining/results2.jpg", name: "results-2"}, {url: "/Projects/ux/silver-lining/results3.png", name: "results-3"}], "Evaluation results"],
        p2: "The results indicated that the effectiveness of the interface was perfect, as all users were able to successfully complete all tasks without any help.",
        p3: "Efficiency was calculated by comparing the time and tap values gained from users against the average values of the group members involved in designing the interface. These values were on average within the margin of error, with the exception of a few outliers, therefore the efficiency was deemed sufficient.",
        p4: "The SUS score indicated a user satisfaction value of 91%, which was well above the industry average of 68% and above the industry A grade of 80.3%."
    },
    section6: {
        title: "Reflection",
        p1: "This was my first experience using the UX life cycle to design an application from scratch. Starting with just a brief description of what the app should entail, and using that to create a final prototype with my team gave me a great understanding of the various steps involved in the UX process.",
        p2: "Working with a team came with its fair share of experiences, as we learned how to manage our differences of opinion and effectively split the work among ourselves according to our expertise.",
        p3: "This was my first exposure to prototyping and wireframing tools such as Balsamiq, Axure and Adobe Xd. It was interesting to see the differences in capability and functionality between the tools available."
    }
}

export default silverLining