import './edu_journey.css'
import IMAGES from '../../images/img';
import $ from 'jquery';
import jQuery from 'jquery'
import React, { Component } from 'react';


export default class EduJourney extends Component{
    jQueryCode = () => {
        (function ($) {
            $.fn.timeline = function () {
                var selectors = {
                    id: $(this),
                    item: $(this).find(".timeline-item"),
                    activeClass: "timeline-item--active",
                    img: ".timeline__img"
                };
                selectors.item.eq(0).addClass(selectors.activeClass);
                selectors.id.css(
                    "background-image",
                    "url(" +
                    selectors.item
                        .first()
                        .find(selectors.img)
                        .attr("src") +
                    ")"
                );
                var itemLength = selectors.item.length;
                $(window).scroll(function () {
                    var max, min;
                    var pos = $(this).scrollTop();
                    selectors.item.each(function (i) {
                        min = $(this).offset().top;
                        max = $(this).height() + $(this).offset().top;
                        //   var that = $(this);
                        if (i === itemLength - 2 && pos > min + $(this).height() / 2) {
                            selectors.item.removeClass(selectors.activeClass);
                            selectors.id.css(
                                "background-image",
                                "url(" +
                                selectors.item
                                    .last()
                                    .find(selectors.img)
                                    .attr("src") +
                                ")"
                            );
                            selectors.item.last().addClass(selectors.activeClass);
                        } else if (pos <= max - 40 && pos >= min) {
                            selectors.id.css(
                                "background-image",
                                "url(" +
                                $(this)
                                    .find(selectors.img)
                                    .attr("src") +
                                ")"
                            );
                            selectors.item.removeClass(selectors.activeClass);
                            $(this).addClass(selectors.activeClass);
                        }
                    });
                });
            };
        })(jQuery);

        $("#timeline-1").timeline();
    }
    componentDidMount() {
        this.jQueryCode()
    }
    render() {
    return (
        <>
        <div id="ej">
            <div class="timeline-container" id="timeline-1">
                <div class="timeline-header">
                    <h2 class="timeline-header__title">EDUCATION</h2>
                    <h3 class="timeline-header__subtitle">My Educational Journey</h3>
                </div>
                <div class="timeline">
                    <div class="timeline-item" data-text="HIGH SCHOOL (10CGPA)">
                        <div class="timeline__content"><img class="timeline__img" src={IMAGES.ej2017} alt="2017" />
                            <h2 class="timeline__content-title">2017</h2>
                            <p class="timeline__content-desc">Despite of having a high grade of 10 CGPA on my report card I was in a pickle about what subjects to choose for secondary education.</p>
                        </div>
                    </div>
                    <div class="timeline-item" data-text="DIVING INTO PROGRAMMING WORLD">
                        <div class="timeline__content"><img class="timeline__img" src={IMAGES.ej2018} alt="2018" />
                            <h2 class="timeline__content-title">2018</h2>
                            <p class="timeline__content-desc">After choosing to study <b>PCM (with Computer Science)</b>, I began my journey into the programming world and learned my first programming language <b>C++.</b></p>
                        </div>
                    </div>
                    <div class="timeline-item" data-text="IT'S A PHENOMENAL YEAR">
                        <div class="timeline__content"><img class="timeline__img" src={IMAGES.ej2019} alt="2019" />
                            <h2 class="timeline__content-title">2019</h2>
                            <p class="timeline__content-desc">In my 12th grade, I achieved 94.6% and a score of 99 in Computer Science, earning me the school's top honor and getting wishes from my elders.</p>
                        </div>
                    </div>
                    <div class="timeline-item" data-text="GETTING TO COLLEGE">
                        <div class="timeline__content"><img class="timeline__img" src={IMAGES.ej2020} alt="2020" />
                            <h2 class="timeline__content-title">2020</h2>
                            <p class="timeline__content-desc">After the COVID-19 pandemic, I enrolled in B.Tech at PSIT, Kanpur with a Computer Science and Engineering concentration.</p>
                        </div>
                    </div>
                    <div class="timeline-item" data-text="AN IN-DEPTH LOOK">
                        <div class="timeline__content"><img class="timeline__img" src={IMAGES.ej2021} alt="2021" />
                            <h2 class="timeline__content-title">2021</h2>
                            <p class="timeline__content-desc">It was a hectic year for me, there were some ups and downs and I took a step closer to my destination.</p>
                        </div>
                    </div>
                    <div class="timeline-item" data-text="I AM FEARLESS">
                        <div class="timeline__content"><img class="timeline__img" src={IMAGES.ej2022} alt="2022" />
                            <h2 class="timeline__content-title">2022</h2>
                            <p class="timeline__content-desc">Despite having a start with failures, it didn't stop me from trying to reach my goals. A lot has been accomplished this year, but more is to come. While I learned a lot and achieved high rankings in the contests, the goal remains. However, I won the Inter-Departmental Basketball Tournament, served as captain of my team, and also represented my college at a zonal-level sports fest with a phenomenal performance.</p>
                        </div>
                    </div>
                    <div class="timeline-item" data-text="CONTINUES">
                        <div class="timeline__content"><img class="timeline__img" src={IMAGES.ej2023} alt="2023" />
                            <h2 class="timeline__content-title">2023</h2>
                            <p class="timeline__content-desc">Continues</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
    );
    }
}