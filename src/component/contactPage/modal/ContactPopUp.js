import img from '../../../assets/image/ChurchZoneIMg.png'

export const ContactPopUp = () => {
  return (
    <div className="ContactPopUp__Container">
      <div className='Contact'>
        <img src={img}/>
        <div>
          <img />
          <div>
            <h2>Church Name</h2>
            <div>
              <a>A/235A, Kulakachi Road, Nandhankadu, Marthandam.</a>
              <a href="tel:+919568569859">95685 69859</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
