import React, { useEffect } from "react";
import "./Skills.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS3",
        "SASS",
        "JavaScript",
        "React",
        "PhP",
        "Symphony",
        "NodeJS",
        "BootStrap",
        "Jquery",
        "Ajax",
        "SQL",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div id="skills">
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export default TextShpere;