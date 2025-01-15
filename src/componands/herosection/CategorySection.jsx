import React from "react";
import mobiles from "../../componands/assits/mobiles.svg";
import earbuds from "../..//../src/componands/assits/wireless-earbuds.svg";
import watches from "../..//../src/componands/assits/smart-watches.svg";
import trimmer from "../..//../src/componands/assits/trimmers-shaver.svg";
import powerbanks from "../..//../src/componands/assits/power-banks.svg";
import chargers from "../..//../src/componands/assits/mobile-chargers.svg";
import speakers from "../..//../src/componands/assits/bluetooth-speakers.svg";
import tablets from "../..//../src/componands/assits/tablets.svg"
const CategorySection = () => {
  const categories = [
    { name: "Mobiles", image: mobiles },
    { name: "Wireless Earbuds", image: earbuds },
    { name: "Smart Watches", image: watches },
    { name: "Trimmers Shaver", image: trimmer },
    { name: "Power Banks", image: powerbanks },
    { name: "Wall Chargers", image: chargers },
    { name: "Bluetooth Speakers", image: speakers },
    { name: "Tablets", image: tablets },
  ];

  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex items-center px-4 py-2 bg-white shadow-md flex-wrap justify-center w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 mb-1 group"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-12 h-12 object-contain mb-1"
            />
            <p className="text-center text-sm font-medium">{category.name}</p>
            <div className="w-full mt-1 h-0.5 bg-transparent group-hover:bg-blue-500 transition-all"></div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CategorySection ;
