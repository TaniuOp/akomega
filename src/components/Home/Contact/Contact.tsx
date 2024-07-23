import './Contact.css';
// import Map from '../Map/Map';
import Logo from '../../../assets/akomegaag_logo.png';

const Contact = () => {
  const MapEmbed = () => {
    return (
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.288673751336!2d8.182062053729705!3d47.250058211471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790193c759ba899%3A0xc74003bf3c43d76a!2sHauptstrasse%2069%2C%205734%20Reinach!5e0!3m2!1ses!2sch!4v1713786685034!5m2!1ses!2sch'
        width='100%'
        height='300'
        style={{ border: 0 }}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    );
  };

  return (
    <>
      <h2> KONTAKTIERE UNS </h2>
      <div className={'contact-sections-container'}>
        <div className={'contact-sections'}>
          <div className={'contact-image-container'}>
            <img src={Logo} alt='logo' className={'contact-image'} />
          </div>
          <div className={'contact-texts'}>
            <p> AK Omega GU AG</p>
            <p> Hauptstrasse 69</p>
            <p> 5734 Reinach</p>
          </div>
          <div className={'contact-texts'}>
            <p> Montag - Freitag</p>
            <p> 08:00 - 12:00 & 13:30 - 17:00</p>
          </div>
          <div className={'contact-texts'}>
            <p> Diana Heger</p>
            <p> E-Mail: dh@omega-gu-ag.ch </p>
            <p> Telefon: 062 771 50 07</p>
          </div>
        </div>
        {/* <Map /> */}
        <MapEmbed />
      </div>
    </>
  );
};
export default Contact;
