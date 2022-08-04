import NavbarApp from './navbar/NavbarApp';
import SliderApp from './slider/SliderApp';
import TextApp from './text/TextApp';
import TarjetaApp from './cartas/TarjetaApp';
import FooterApp from './footer/FooterApp';


function HomeApp() {
  return (
    <div className="HomeApp">
      <NavbarApp/>
      <SliderApp/>
      <TextApp/>
      <TarjetaApp/>
      <FooterApp/>
    </div>
  );
}

export default HomeApp;
