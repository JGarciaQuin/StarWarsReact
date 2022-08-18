import NavbarApp from '../components/navbar/NavbarApp';
import SliderApp from '../components/slider/SliderApp';
import TextApp from '../components/text/TextApp';
import FooterApp from '../components/footer/FooterApp';
import Datos from '../components/Dinamicas/Datos'


function HomeApp() {
  return (
    <div className="HomeApp">
      <NavbarApp/>
      <SliderApp/>
      <TextApp/>
      <Datos/>
      <FooterApp/>
    </div>
  );
}

export default HomeApp;
