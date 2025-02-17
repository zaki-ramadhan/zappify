/* eslint-disable no-unused-vars */
import { useDarkMode } from "@hooks/DarkMode";
import { useState } from "react";

import { Header, Footer} from "@layouts/";
import entertainmentPicture from "@images/entertainment.jpg";
import lifestylePicture from "@images/lifestyle.jpg";
import businessPicture from "@images/business.jpg";
import foodPicture from "@images/food.jpg";
import writingPicture from "@images/writing.jpg";
import { CategoriesCard as Card } from '@components/Cards/';
import { HeroCategoriesSection as Hero } from '@components/Sections/';

const Categories = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header active={true} toggleDarkMode={toggleDarkMode} duration= {2} participan={5} reviews={20}/>
      <main className="px-20 flex flex-col gap-8">
        <Hero duration= {2} participan={5} reviews={20}/>
        <div className="cards card__wrapper flex justify-start items-center gap-6">
          <Card delay={500} isFirst={true} sourceImage={entertainmentPicture} title={"Entertainment"} description={"Master film production, performing arts, and professional audiovisual techniques."} isHot label1={"Film Making"} label2={"Music Production"} duration= {3} participan={100} reviews={20} isCertified/>
          <Card delay={700} sourceImage={lifestylePicture} title={"Lifestyle"} description={"Enhance personal growth, time management, and positive habit formation."} label1={"Productivity"} label2={"Mental Health"} duration= {1.5} participan={35} reviews={43} isLive/>
          <Card delay={900} sourceImage={businessPicture} title={"Business"} description={"Accelerate your career with business management, digital marketing, and startup strategies."} label1={"Startup 101"} label2={"Digital Marketing"} duration= {2} participan={53} reviews={14} isCertified/>
          <Card delay={1100} sourceImage={foodPicture} title={"Food"} description={"Professional culinary training from basic cooking to advanced kitchen management."} label1={"Culinary Arts"} label2={"Food Photography"} duration= {1.5} participan={40} reviews={26} isLive/>
          <Card delay={1300} sourceImage={writingPicture} title={"Writing"} description={"Develop creative writing, copywriting techniques, and professional editing skills."} label1={"Creative Writing"} label2={"Content Creation"}  duration= {1.25} participan={33} reviews={10}/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Categories