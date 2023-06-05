import React,{useState} from "react";
import Buttons from "./button";
import Data from "./projects";
import './portfolio.css'

const Card = ({ project }) => {
    return (
      <>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {project.map((Val) => {
              return (
                <div
                  className="col-md-4 py-3 text-center"
                  key={Val.id}
                >
                  <div className="card-img-top text-center">
                    <img src={Val.img} alt={Val.title} className="photo w-75 h-75" />
                  </div>
                  <div className="card-body">
                    <div className="card-title fw-bold fs-4">
                      {Val.title} 
                    </div>
                    <div className="card-text">{Val.desc}</div>
                    <button className="btn btn-outline-danger"><a href={Val.link}>Live Preview</a></button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  
const Portfolio = () => {
    const [project, setItem] = useState(Data);
  
    const btns = [...new Set(Data.map((Val) => Val.category))];
  
    const filterItem = (curcat) => {
      const newItem = Data.filter((newVal) => {
        return newVal.category === curcat;
      });
      setItem(newItem);
    };
    return (
      <>
        <div className="container-fluid glow-text">
          <div className="row">
            <h1 className="text-center glow-text" style={{fontSize:"50px", wordBreak:"break-all"}}>PORTFOLIO</h1>
            <Buttons
              filterItem={filterItem}
              setItem={setItem}
              btns={btns}
            />
            <Card project={project} />
          </div>
        </div>
      </>
    );
  };

export default Portfolio;