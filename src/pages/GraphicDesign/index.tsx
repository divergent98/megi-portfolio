import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import graphicDesign from '../../assets/graphic-design.png';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';
import FourthTab from './FourthTab';
import pen from '../../assets/pen.png'
import ContactForm from '../Components/ContactForm';
import { useTranslation } from 'react-i18next';

const GraphicDesign = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const { t } = useTranslation();
  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <FirstTab />;
      case 'tab2':
        return <SecondTab />;
      case 'tab3':
        return <ThirdTab/>;
      case 'tab4':
        return <FourthTab/>;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className="hero-section"
        style={{
          backgroundColor: "#fff8f0",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="container pt-lg-5">
          <div className="row align-items-center justify-content-center pt-lg-5">
            <div className="col-md-5">
              <h1 className="text-center text-lg-start mt-lg-5 mb-5 pt-lg-5 fw-43 fw-bold">{t("graphic_design.title")}</h1>
              <p className="text-center text-lg-start fs-25 pe-lg-5">
              {t("graphic_design.text")}
    
              </p>
            </div>
            <div className="col-9 mt-5 mt-lg-5 col-md-6 ps-5">
              <img src={graphicDesign} className='img-fluid' alt="Graphic Design" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mt-5">
        <h1 className="my-5 pt-5 fs-64 fw-bold text-center">PORTFOLIO</h1>
        <div className="tabs-container">
          <ul className="custom-tabs">
            <li
              className={`custom-tab ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab1')}
            >
              LOGO
            </li>
            <li
              className={`custom-tab ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab2')}
            >
     {t("graphic_design.business_card")}
            </li>
            <li
              className={`custom-tab ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab3')}
            >
              CV
            </li>
            <li
              className={`custom-tab ${activeTab === 'tab4' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab4')}
            >
              PRINT
            </li>
          </ul>
        </div>

        <div className="tab-content mt-4">{renderTabContent()}</div>
      </div>
      <div className='container-fluid'>
        <div className='row d-flex flex-row align-items-center py-lg-5'>
          <div className='col-6'>
            <img src={pen} className='img-fluid'></img>
          </div>
          <div className='col-5'>
            <p className='fs-28 text-center mt-3'>   {t("graphic_design.text_2")}</p>
          </div>
        </div>
      </div>
      <ContactForm  page="graphic" color="black" button="graphic-btn"/>
    </>
  );
};

export default GraphicDesign;
