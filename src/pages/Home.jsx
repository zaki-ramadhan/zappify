import { useDarkMode } from "@hooks/DarkMode";
import {Header, Footer } from '@layouts';
import {SkillsSection, HeroHomeSection, CategoriesSection, CustomersSection}  from '@components/Sections/';
import { FloatingButton } from '@components/Buttons/';
  // from "@components/Sections/";

const Home = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <FloatingButton/>
      <Header toggleDarkMode={toggleDarkMode} />
      <HeroHomeSection />
      <CategoriesSection />
      <SkillsSection />
      <CustomersSection />
      <Footer />
    </div>
  );
};

export default Home;
