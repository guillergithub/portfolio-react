const Projects = ({ handleBgProjects, bg }) => {
  let styles = {
    backgroundImage: `url(${bg}) !important`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "all 5s",
    zIndex: 9999
    // minWidth: '100%'
  };

  return (
    <>
     <div className="bg-container" style={styles}></div>
      <div className="projects-container">        
        <ul className="projects-list">
          <li className="d-flex">
            <span>01</span>
            <button value="1" onMouseEnter={handleBgProjects}>
              <a href="https://quiz-it-app.netlify.app/">Quiz it!</a>
            </button>
          </li>
          <li className="d-flex">
            <span>02</span>
            <button value="2" onMouseEnter={handleBgProjects}>
              <a href="https://quiz-it-app.netlify.app/">Pocket-dex</a>
            </button>
          </li>
          <li className="d-flex">
            <span>03</span>
            <button value="3" onMouseEnter={handleBgProjects}>
              <a href="https://quiz-it-app.netlify.app/">My Portfolio</a>
            </button>
          </li>
        </ul>
      </div>
     
    </>
  );
};

export default Projects;
