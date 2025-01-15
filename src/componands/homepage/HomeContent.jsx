
import React from "react";
import CategorySection from "../herosection/CategorySection";
import HerSection from "../herosection/HerSection";
import EarburdsSection from "../Earburds-Sction/Earburds";
import Recomendsection from "../Recomend-Section/Recomends";
import Sellar from "../SellarSection/Sellar";
import Wateches from "../Wateches/Wateches";
import Bennar from "../Bennar/Bennar";
import Mobiles from "../Mobile-section/Mobiles";
import ShopPrice from "../Shop-Price/Shop";
import ImgModal from "../Modal-section/ImgModal";
import ReviewCards from "../Card-Section/Card";
import BrandSection from "../Brands-Section/Brends";
import ReasonToBuySection from "../ResonTo-Buy/Resones";
import Footer from "../Footer/Footer";
import Trimer from "../Trimer-Section/Trimer";
import InlineImagesSection from "../Last-section/LastSection";






const HomeContent = () => {
  return (
    <React.Fragment>
   <div className="bg-gray-200">
   <CategorySection/>
    <HerSection />
    <EarburdsSection />
    <Recomendsection />
    <Sellar />
    <Wateches />
    <Bennar />
    <Mobiles />
    <ShopPrice />
    <BrandSection />
    <ImgModal />
    <ReviewCards />
    <ReasonToBuySection />
    <Trimer />
    <InlineImagesSection />
    <Footer />
   </div>
    </React.Fragment>
  );
};

export default HomeContent;
