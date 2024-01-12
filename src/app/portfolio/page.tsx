"use client"
import React,{useState} from "react";
import Buttons from "./button";
import './style.css'
import Data from './project'

interface CardProps {
    project: {
      id: number;
      img: string;
      title: string;
      desc: string;
      link: string;
    }[];
  }
  
  const Card: React.FC<CardProps> = ({ project }) => {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          {project.map((val) => (
            <div className="col-md-4 py-3 text-center" key={val.id}>
              <div className="card-img-top text-center">
                <img src={val.img} alt={val.title} className="photo w-75 h-75" />
              </div>
              <div className="card-body">
                <div className="card-title fw-bold fs-4">{val.title}</div>
                <div className="card-text">{val.desc}</div>
                <button className="btn btn-outline-danger">
                  <a href={val.link} target="_blank" rel="noopener noreferrer">
                    Live Preview
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
const Portfolio = () => {
    const [project, setItem] = useState(Data);
  
    const btns: string[] = [...new Set(Data.map((val) => val.category))];
  
    const filterItem = (curcat: any) => {
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
        <div className='text-center'><img src={'/signature.png'} className="signature" alt="signature" />
        </div>
      </>
    );
  };

export default Portfolio;