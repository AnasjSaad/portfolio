const AboutMe = {
  id: "about-me",
  title: "About Me",
  icon: "./images/user-icon.ico",
  type: "notepad",
  menu: [
    
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/saadanas/",
    },
    {
      name: "GitHub",
      link: "https://github.com/AnasjSaad/",
    },
  ],

  content: [
    {
      contentType: "header",
      content: "Whats Up",
    },
    {
      contentType: "image",
      content: (
        <img
          src="./images/Selfie.png" // Replace with the actual path to your image
          alt="Your Image Alt Text"
          style={{display: 'block', marginLeft: 'auto', maxWidth: '50%', height: 'auto', marginRight: 'auto' }}
        />
      ),
    },
    {
      contentType: "paragraph",
      content: [
        "My name is Anas Saad (أنس سعد), I'm a software engineer and I like breaking things.",
        "I do software engineering at BMO. Check out my LinkedIn in the links tab above if you're into that.",
        "I attended Toronto Metropolitan University and graduated in Sep 2021 where i completed my bachelors in aeropspace engineering and later my masters degree focused on reinforcment learning",
        "When I'm not coding, you can find me at the gym, on my desk playing games with the boys or watching shows.",
        "Some cool things I have worked on in the past:",
        <ul key="cool-things-list">
        <li>Lead an NLP FAQ application at BMO</li>
        <li>Published a Paper on Fuzzy Reinforcement Learning for Human decision prediction</li>
        <li>Wrote an Undergrad paper Helping a robot snake Identify a valve using Image Recognition</li>
      </ul>,
      ],
    },
  ],
};

export default AboutMe;
