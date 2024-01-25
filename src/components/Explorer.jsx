import { Frame } from "@react95/core";
import "./Window.css";

export default function Explorer({ content }) {
  

  return (
    <Frame bg="white" boxShadow="in" className="frame-container">
      <div className="explorer-container">
        {content.map((skill, index) => {
          return (
            <div
              key={index}
              className="explorer-item"
              //onClick={() => handleOpenProject(project)}
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className="explorer-item-icon"
              />
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
