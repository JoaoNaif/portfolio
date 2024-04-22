import { useAppSelector } from "./redux/hooks/useAppSelector";
import Switch from "./components/Switch";
import { Presentation } from "./components/Presentation";
import { Port } from "./components/Port";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";

const App = () => {
  const theme = useAppSelector((state) => state.theme);

  const handleChange = (newCheckedState: boolean) => {};
  return (
    <div
      className={`min-h-screen transition-all duration-200 ease-in  ${
        theme.status === true
          ? "text-zinc-800 bg-stone-200"
          : "bg-zinc-800 text-stone-200"
      } conatiner mx-auto`}
    >
      <Switch onChange={handleChange} defaultChecked={theme.status} />
      <Presentation />
      <Port />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default App;
