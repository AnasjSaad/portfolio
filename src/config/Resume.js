const Resume = {
  title: "Resume",
  id: "resume",
  type: "resume",
  description: "A collection of my resume",
  icon: "./images/notepad-icon.ico",


  content: [
    {
      contentType: "image",
      content: (
        <img
          src="./images/Anas_Resume.png" // Replace with the actual path to your image
          alt="Your Image Alt Text"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      ),
    },
  ],
};

export default Resume;
