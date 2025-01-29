import { AboutusBtn } from "./Btn";

export const AboutusChurch = () => {
  return (
    <div className="HomeSecondary__AboutusContainer">
      <div className="HomeSecondary__AboutusContent">
        <h2 className="HomeSecondary__AboutusContent--h2">About Church</h2>
        <div className="HomeSecondary__AboutusContentContainer">
          <p className="HomeSecondary__AboutusContent--p">
            Lorem ipsum dolor sit amet consectetur. Facilisi non tristique vitae
            nisi. Sollicitudin eget semper sed neque vitae habitant nec mauris
            aliquet. Aliquet molestie at in tellus accumsan nascetur sapien
            pellentesque faucibus. Sed aliquam ornare vulputate etiam ultricies.
            In amet erat augue et ac at massa duis porttitor. Nisi elementum
            dignissim quis tristique euismod eget donec ut cursus. Tempus non
            risus bibendum euismod nisl id velit sapien sagittis. Volutpat est
            maecenas mattis sapien integer tellus cras donec. Sit ultricies
            posuere purus massa urna commodo amet senectus turpis. Mi aliquam
            elementum proin maecenas mi. Ac odio viverra est diam orci.
          </p>
          <p className="HomeSecondary__AboutusContent--p">
            Pellentesque viverra sagittis ac eget risus. Pretium pellentesque
            elementum a leo venenatis adipiscing amet. Pellentesque augue dolor
            ullamcorper non purus in. Sed ac orci nisi congue eu lorem a tellus.
            Tortor morbi tincidunt nunc ac. Aliquam dolor netus amet ultricies.
            In et viverra adipiscing sit bibendum faucibus eleifend eget. Vitae
            aliquet pellentesque aliquet orci mauris vestibulum. Dignissim elit
            est amet sed pretium parturient euismod.
          </p>
          <p className="HomeSecondary__AboutusContent--p">
            Tincidunt ullamcorper sed massa sapien ridiculus sit. Eu viverra
            iaculis ac facilisi euismod mauris at felis. Sit viverra nisi
            tristique varius fermentum luctus sed ipsum commodo. Velit turpis
            massa donec sit. Odio voTincidunt ullamcorper sed massa sapien
            ridiculus sit. Eu viverra iaculis ac facilisi euismod mauris at
            felis. Sit viverra nisi tristique varius fermentum luctus sed ipsum
            commodo. Velit turpis massa donec sit. Odio voTincidunt ullamcorper
            sed massa sapien ridiculus sit. Eu viverra iaculis ac facilisi
            euismod mauris at felis. Sit viverra nisi tristique varius fermentum
            luctus sed ipsum commodo. Velit tu
          </p>
        </div>
      </div>
      <div className="HomeSecondary__AboutusBtnContainer">
        <AboutusBtn BtnName="Learn more about the Church" href="#" />
        <AboutusBtn BtnName="Contact us" href="#" />
      </div>
    </div>
  );
};

export const SmallCard = () => {
  return (
    <div className="ServicesTime__Container">
      <div className="ServicesTime__Content">
        <h2 className="ServicesTime__Heading--h2">Services Time</h2>
        <div className="ServicesTime__ContentContainer">
          <h3 className="ServicesTime__Heading--h3">Sunday</h3>
          <div className="ServicesTime__TimeContainer">
            <div className="ServicesTime__TimeWrapper">
              <h4 className="ServicesTime__Heading--h4">Morning</h4>
              <p className="ServicesTime--p">9.30 AM - 12.30 PM</p>
            </div>
            <div className="ServicesTime__TimeWrapper">
              <h4 className="ServicesTime__Heading--h4">Evening</h4>
              <p className="ServicesTime--p">5.00 PM - 6.30PM </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BigCard = () => {
  return (
    <div className="BibleVerse__Container">
      <div className="BibleVerse__ContentContainer">
        <h2 className="BibleVerse--h2">Bible Verse</h2>
        <div className="BibleVerse__Content">
          <h3 className="BibleVerse--h3">
            <span className="BibleVerse--h3__highlight">ISAIAH 1:1 </span>
            THROUGH 5:30
          </h3>
          <div className="BibleVerse__VerseContent">
            <p className="BibleVerse--p">
              The number of the burnt offerings that the assembly brought was 70
              bulls, 100 rams, and 200 lambs; all these were for a burnt
              offering to the Lord. 
            </p>
            <p className="BibleVerse--p">33 And the consecrated offerings were 600 bulls and 3,000 sheep.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
