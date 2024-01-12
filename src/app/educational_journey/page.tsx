"use client"
import React, {useState} from 'react';
import './style.css';


const EduJourney = () => {
    const [bgImage, setBgImage] = useState('/2017.jpg');
    
    const changeBackground = (bgPath: string) => {
        setBgImage(bgPath);
        const d = document.getElementById('timeline-1');
        d.style.background = bgPath;
        const bgImageUrl = d.style.backgroundImage.slice(
            4,
            d.style.backgroundImage.length - 1
          ); // Remove quotes from URL
          console.log(`Current background image: ${bgImageUrl}`);
    }

  return (
    <>
      <div id="ej">
            <div className="timeline-container" id="timeline-1" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="timeline-header">
                    <h2 className="timeline-header__title">EDUCATION</h2>
                    <h3 className="timeline-header__subtitle">My Educational Journey</h3>
                </div>
                <div className="timeline">
                    <div className="timeline-item" data-text="HIGH SCHOOL (10CGPA)" onMouseEnter ={() => changeBackground('/2017.jpg')}>
                        <div className="timeline__content">
                          <img src={'/2017.jpg'} className='timeline__img' alt="2017" />
                            <h2 className="timeline__content-title">2017</h2>
                            <p className="timeline__content-desc">Despite of having a high grade of 10 CGPA on my report card I was in a pickle about what subjects to choose for secondary education.</p>
                        </div>
                    </div>
                    <div className="timeline-item" data-text="DIVING INTO PROGRAMMING WORLD" onMouseEnter={() => changeBackground('/2018.PNG')}>
                        <div className="timeline__content">
                        <img src={'/2018.PNG'} className='timeline__img' alt="2018" />
                            <h2 className="timeline__content-title">2018</h2>
                            <p className="timeline__content-desc">After choosing to study <b>PCM (with Computer Science)</b>, I began my journey into the programming world and learned my first programming language <b>C++.</b></p>
                        </div>
                    </div>
                    <div className="timeline-item" data-text="IT'S A PHENOMENAL YEAR" onMouseEnter={() => changeBackground('/2019.jpg')}>
                        <div className="timeline__content">
                        <img src={'/2019.jpg'} className='timeline__img' alt="2019" />
                            <h2 className="timeline__content-title">2019</h2>
                            <p className="timeline__content-desc">In my 12th grade, I achieved 94.6% and a score of 99 in Computer Science, earning me the school's top honor and getting wishes from my elders.</p>
                        </div>
                    </div>
                    <div className="timeline-item" data-text="GETTING TO COLLEGE" onMouseEnter={() => changeBackground('/2020.jpeg')}>
                        <div className="timeline__content">
                        <img src={'/2020.jpeg'} className='timeline__img' alt="2020" />
                            <h2 className="timeline__content-title">2020</h2>
                            <p className="timeline__content-desc">After the COVID-19 pandemic, I enrolled in B.Tech at PSIT, Kanpur with a Computer Science and Engineering concentration.</p>
                        </div>
                    </div>
                    <div className="timeline-item" data-text="AN IN-DEPTH LOOK" onMouseEnter={() => changeBackground('/2021.jpeg')}>
                        <div className="timeline__content">
                        <img src={'/2021.jpeg'} className='timeline__img' alt="2021" />
                            <h2 className="timeline__content-title">2021</h2>
                            <p className="timeline__content-desc">It was a hectic year for me, there were some ups and downs and I took a step closer to my destination.</p>
                        </div>
                    </div>
                    <div className="timeline-item" data-text="I AM FEARLESS" onMouseEnter={() => changeBackground('/2022.jpg')}>
                        <div className="timeline__content">
                        <img src={'/2022.jpg'} className='timeline__img' alt="2022" />
                            <h2 className="timeline__content-title">2022</h2>
                            <p className="timeline__content-desc">Despite having a start with failures, it didn't stop me from trying to reach my goals. A lot has been accomplished this year, but more is to come. While I learned a lot and achieved high rankings in the contests, the goal remains. However, I won the Inter-Departmental Basketball Tournament, served as captain of my team, and also represented my college at a zonal-level sports fest with a phenomenal performance.</p>
                        </div>
                    </div>
                    <div className="timeline-item" data-text="TRIUMPHING OVER TRIALS: UNSATISFIED, UNSTOPPABLE" onMouseEnter={() => changeBackground('/2023.jpeg')}>
                        <div className="timeline__content">
                        <img src={'/2023.jpeg'} className='timeline__img' alt="2023" />
                            <h2 className="timeline__content-title">2023</h2>
                            <p className="timeline__content-desc">In 2023, I achieved a significant milestone by securing an offer in a MNC. 
                            However, I see this not as the end, but as a stepping stone towards greater heights. My thirst for success is unquenchable, and I’m ready for more challenges. I view my journey as ongoing, fueled by my ambition and dissatisfaction with my current achievements</p>
                        </div>
                    </div>
                    <div className="timeline-item" data-text="CONTINUES" onMouseEnter={() => changeBackground('/Continues.jpg')}>
                        <div className="timeline__content">
                        <img src={'/Continues.jpg'} className='timeline__img' alt="2024"/>
                            <h2 className="timeline__content-title">2024</h2>
                            <p className="timeline__content-desc">Continues</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
  );
// }
};

export default EduJourney;

