import { useDarkMode } from "@hooks/DarkMode";

import { Header, Footer} from "@layouts/";
import Main from "@components/PricingMain";

const Pricing = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Main/>
      <Footer/>
    </div>
  )
}

export default Pricing
