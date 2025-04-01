import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import { FlipCard } from "@/components/ui/flip-card";
import { motion } from "framer-motion";
import Contact from "@/components/sections/Contact";

interface SparePart {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  compatibility: string[];
}

const sparePartsData: SparePart[] = [
  {
    id: "1",
    name: "Blower Fan",
    description:
      "High-performance air circulation component for HVAC systems with optimized airflow design",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916624/9_u6s5bh.png",
    compatibility: ["Commercial AC Systems", "Industrial Cooling Units"],
  },
  {
    id: "2",
    name: "Solonide Valve / Coil",
    description:
      "Electromagnetic flow control device for precise refrigerant regulation in cooling systems",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916615/8_uyy72a.png",
    compatibility: ["Commercial AC Units", "Industrial Cooling Systems"],
  },
  {
    id: "3",
    name: "Panel Lock",
    description:
      "Secure fastening mechanism for access panels on HVAC and industrial equipment",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916602/7_klt9he.png",
    compatibility: ["Commercial AC Systems", "Industrial HVAC Units"],
  },
  {
    id: "4",
    name: "Habor Temperature Controller",
    description:
      "Precision digital temperature regulation device with programmable setpoints for HVAC systems",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916616/6_fegqes.png",
    compatibility: ["Commercial AC Systems", "Industrial Refrigeration"],
  },
  {
    id: "5",
    name: "Axil Blower Fan",
    description:
      "Axial design high-volume air circulation component for enhanced cooling efficiency",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916619/5_ut2kbm.png",
    compatibility: ["Commercial AC Units", "Industrial Ventilation Systems"],
  },
  {
    id: "6",
    name: "Electrical Panel",
    description:
      "Centralized control housing for electrical components with circuit protection and distribution",
    category: "Electronics",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916605/43_ye7vfh.png",
    compatibility: ["Commercial AC Systems", "Industrial Control Systems"],
  },
  {
    id: "7",
    name: "Electrical Panel with Panel AC",
    description:
      "Integrated electrical control housing with built-in cooling system for temperature-sensitive components",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916604/42_qerkd9.png",
    compatibility: ["Commercial AC Units", "Industrial Refrigeration Systems"],
  },
  {
    id: "8",
    name: "Electrical Cabinet",
    description:
      "Heavy-duty enclosure for electrical components with enhanced protection against environmental factors",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916602/41_id3syk.png",
    compatibility: ["Commercial AC Units", "Industrial Pressure Systems"],
  },
  {
    id: "9",
    name: "Electrical Cabinet with AC",
    description:
      "Robust electrical component housing with integrated cooling system for optimal performance in high-temperature environments",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916623/40_u1oqn9.png",
    compatibility: ["Industrial Washers", "Commercial Laundry Equipment"],
  },
  {
    id: "10",
    name: "Overload Relay",
    description:
      "Protective device that prevents equipment damage by monitoring and controlling electrical current flow",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916604/4_u88lhn.png",
    compatibility: ["Commercial AC Units", "Industrial Temperature Control"],
  },
  {
    id: "11",
    name: "Washing Machine",
    description:
      "Complete industrial laundry system designed for high-volume cleaning operations with durability and efficiency",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916640/39_qqptbx.png",
    compatibility: ["Industrial Washers", "Commercial Laundry Systems"],
  },
  {
    id: "12",
    name: "Eco Clean Washing Machine",
    description:
      "Energy-efficient industrial washing system with reduced water consumption and environmentally friendly operation",
    category: "Mechanical Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916627/38_tptfpb.png",
    compatibility: ["Industrial Washers", "AC Fan Motors"],
  },
  {
    id: "13",
    name: "Washing Machine",
    description:
      "Heavy-duty industrial washing system designed for continuous operation in commercial environments",
    category: "Electronics",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916638/37_pfghdu.png",
    compatibility: ["Industrial Washers", "Commercial Laundry Equipment"],
  },
  {
    id: "14",
    name: "Washing Machine Panel",
    description:
      "User interface and control system housing for industrial washing machines with programmable cycle options",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916623/36_bllubm.png",
    compatibility: ["Industrial Washers", "Commercial Water Systems"],
  },
  {
    id: "15",
    name: "Washing Machine Filter",
    description:
      "Specialized filtration component that removes debris and contaminants from washing machine water systems",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916617/35_rpp6dk.png",
    compatibility: ["Industrial Washers", "Commercial Drainage Systems"],
  },
  {
    id: "16",
    name: "Active Washing Machine",
    description:
      "Advanced washing system with dynamic balancing technology for reduced vibration and enhanced cleaning performance",
    category: "Mechanical Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916629/34_sxktal.png",
    compatibility: ["Industrial Washers", "Commercial Drive Systems"],
  },
  {
    id: "17",
    name: "Vacuum Pump Exhaust Filter",
    description:
      "Specialized filtration component for vacuum pump exhaust systems that captures oil mist and particulates",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916609/33_txcq6t.png",
    compatibility: ["Industrial Washers", "Commercial Water Systems"],
  },
  {
    id: "18",
    name: "Axil Fan for Chiller",
    description:
      "Specialized axial cooling fan designed specifically for chiller systems with optimized airflow patterns",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916644/32_r5jdqz.png",
    compatibility: ["Industrial Washers", "Commercial Heating Systems"],
  },
  {
    id: "19",
    name: "Solonide Valve for Chiller",
    description:
      "Electromagnetic control valve specifically designed for refrigerant flow regulation in chiller systems",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916648/31_rluhkq.png",
    compatibility: ["Industrial Washers", "Commercial Laundry Equipment"],
  },
  {
    id: "20",
    name: "DC Blower Motor",
    description:
      "Direct current powered air circulation motor with variable speed capability for precise airflow control",
    category: "Mechanical Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916607/30_mpbuay.png",
    compatibility: ["Industrial Washers", "Commercial Suspension Systems"],
  },
  {
    id: "21",
    name: "compressor Accessory Set",
    description:
      "Comprehensive kit of essential components and fittings for compressor installation and maintenance",
    category: "Electronics",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916612/21_tdjal0.png",
    compatibility: ["Commercial AC Systems", "Industrial Cooling Units"],
  },
  {
    id: "22",
    name: "Waterfall Valve",
    description:
      "Specialized flow control device designed for cascading water distribution in cooling systems",
    category: "Electronics",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916648/22_bjbgv4.png",
    compatibility: ["Commercial AC Units", "Industrial Motor Systems"],
  },
  {
    id: "23",
    name: "Thermostat Sensor",
    description:
      "Precision temperature detection component that provides accurate readings for climate control systems",
    category: "Electronics",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916629/23_iaa8mn.png",
    compatibility: ["Commercial AC Systems", "Industrial Power Control"],
  },
  {
    id: "24",
    name: "Pre Filter for Chiller",
    description:
      "Initial stage filtration component that removes large particulates before air enters chiller systems",
    category: "Electronics",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916646/24_vnn1us.png",
    compatibility: ["Commercial AC Units", "Industrial Power Systems"],
  },
  {
    id: "25",
    name: "Liner seal",
    description:
      "Specialized gasket material designed to create airtight or watertight seals between system components",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916618/25_hd77jt.png",
    compatibility: ["Commercial AC Systems", "Industrial Ventilation"],
  },
  {
    id: "26",
    name: "condenser Coil for Chiller",
    description:
      "Heat exchange component specifically designed for chiller systems to facilitate efficient cooling",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916648/26_uopzmc.png",
    compatibility: ["Commercial AC Units", "Industrial Cooling Systems"],
  },
  {
    id: "27",
    name: "Temperature Controller",
    description:
      "Programmable device that monitors and regulates temperature in HVAC and refrigeration systems",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916635/27_pzbvon.png",
    compatibility: ["Commercial AC Systems", "Industrial Refrigeration"],
  },
  {
    id: "28",
    name: "PCB Control Card",
    description:
      "Printed circuit board that houses electronic components for system control and automation",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916643/28_xhtrkv.png",
    compatibility: ["Commercial AC Units", "Industrial Pressure Systems"],
  },
  {
    id: "29",
    name: "Flow Switch for Chiller",
    description:
      "Monitoring device that detects and regulates fluid movement within chiller systems for optimal operation",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916629/29_b4uwtk.png",
    compatibility: ["Commercial AC Systems", "Industrial Mounting Solutions"],
  },
  {
    id: "30",
    name: "Relay for Compressor",
    description:
      "Electromagnetic switching device that controls power supply to compressor units in cooling systems",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916609/20_sevq1c.png",
    compatibility: ["Industrial Washers", "Commercial Laundry Equipment"],
  },
  {
    id: "31",
    name: "Back Covered Blower Motor",
    description:
      "Protected air circulation motor with rear housing for enhanced durability and safety",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916637/2_tuojeu.png",
    compatibility: ["Industrial Washers", "Commercial Laundry Systems"],
  },
  {
    id: "32",
    name: "Denfoss Temperature Controller",
    description:
      "Danfoss brand precision temperature regulation device with industry-leading reliability",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916623/19_jq0rvg.png",
    compatibility: ["Industrial Washers", "Commercial Drainage Systems"],
  },
  {
    id: "33",
    name: "Thermostat Sensor For Chiller (PT100)",
    description:
      "PT100-type temperature detection probe specifically calibrated for chiller system applications",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916608/18_rlw7xu.png",
    compatibility: ["Industrial Washers", "Commercial Water Systems"],
  },
  {
    id: "34",
    name: "Expansion Valve for Chiller",
    description:
      "Precision metering device that controls refrigerant flow in chiller systems for optimal cooling efficiency",
    category: "Mechanical Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916618/17_fdoajv.png",
    compatibility: ["Industrial Washers", "Commercial Suspension Systems"],
  },
  {
    id: "35",
    name: "Nano Chill Controller for chiller",
    description:
      "Advanced microprocessor-based control system with nano-technology for precise chiller operation",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916618/16_stm2bi.png",
    compatibility: ["Industrial Washers", "Commercial Laundry Equipment"],
  },
  {
    id: "36",
    name: "Pressure Switch for chiller",
    description:
      "Monitoring device that detects pressure changes in chiller systems and triggers appropriate responses",
    category: "Mechanical Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916609/15_gchbh9.png",
    compatibility: ["Industrial Washers", "Commercial Laundry Systems"],
  },
  {
    id: "37",
    name: "DC Blower Motor Inverter",
    description:
      "Power conversion device that enables variable speed control of DC blower motors for energy efficiency",
    category: "Mechanical Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916613/14_gwcaq5.png",
    compatibility: ["Industrial Washers", "Commercial Drive Systems"],
  },
  {
    id: "38",
    name: "Carel Temperature Controler",
    description:
      "Carel brand precision temperature regulation device with advanced programming capabilities",
    category: "Mechanical Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916636/13_l8tqxy.png",
    compatibility: ["Industrial Washers", "Commercial Transmission Systems"],
  },
  {
    id: "39",
    name: "Dryer Filter",
    description:
      "Specialized filtration component that removes moisture and contaminants from refrigerant systems",
    category: "Mechanical Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916630/12_ulg19e.png",
    compatibility: ["Industrial Washers", "Commercial Gear Systems"],
  },
  {
    id: "40",
    name: "6inch Blower Fan (Rittal Panel AC)",
    description:
      "6-inch diameter air circulation component specifically designed for Rittal panel air conditioning units",
    category: "Mechanical Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916646/11_eo8zb3.png",
    compatibility: ["Industrial Washers", "Commercial Drive Systems"],
  },
  {
    id: "41",
    name: "POE Oil for compressor",
    description:
      "Polyolester lubricant specifically formulated for compressor systems to ensure smooth operation",
    category: "Washing Machine Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916631/10_yoi4hs.png",
    compatibility: ["Industrial Washers", "Commercial Drainage Systems"],
  },
  {
    id: "42",
    name: "Denfoss Relay",
    description:
      "Danfoss brand electromagnetic switching device known for reliability in HVAC and refrigeration applications",
    category: "AC Parts",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916606/3_kgv7js.png",
    compatibility: ["Commercial AC Systems", "Industrial Cooling Units"],
  },
  {
    id: "43",
    name: "Blower Motor (Rittal Panel AC)",
    description:
      "Air circulation motor specifically designed for Rittal panel air conditioning units with optimized performance",
    category: "Electronics",
    imageUrl:
      "https://res.cloudinary.com/dsegbtegv/image/upload/v1740916636/1_zkceyn.png",
    compatibility: ["Commercial AC Units", "Industrial Washing Machines"],
  },
];

const SparePartsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#ec4899]/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-md">
              Spare Parts Catalog
            </h1>
            <p className="text-xl text-foreground font-medium max-w-2xl mx-auto drop-shadow-md">
              Browse our collection of high-quality spare parts for AC and
              industrial washing machines
            </p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-8">
          Our Extensive Spare Parts Collection
        </h2>
        <p className="text-lg text-foreground text-center mb-12 max-w-3xl mx-auto">
          We stock a comprehensive range of genuine spare parts for all major
          brands of commercial air conditioning systems and industrial washing
          machines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sparePartsData.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex justify-center"
            >
              <FlipCard
                frontContent={
                  <div className="w-full h-full bg-card rounded-lg shadow-lg p-4 flex flex-col">
                    <div className="relative h-40 mb-4 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
                      <img
                        src={part.imageUrl}
                        alt={part.name}
                        className="w-full h-full object-contain p-4"
                      />
                      <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm">
                        {part.category}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {part.name}
                    </h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2">
                      {part.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Store the part name in localStorage
                        localStorage.setItem("enquiredPartName", part.name);
                        console.log("Stored part name:", part.name);

                        // Force a small delay to ensure storage is set before scrolling
                        setTimeout(() => {
                          const contactSection =
                            document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }, 100);
                      }}
                      className="mt-auto bg-gradient-to-r from-[#2563eb] to-[#ec4899] hover:from-[#0033e4]/90 hover:to-[#FA008A]/90 text-white py-2 px-4 rounded-md font-medium text-sm mt-3"
                    >
                      Enquire Now
                    </button>
                  </div>
                }
                backContent={
                  <div className="w-full h-full bg-card rounded-lg shadow-lg p-6 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Compatibility
                    </h3>
                    <ul className="space-y-2">
                      {part.compatibility.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm text-muted-foreground">
                      {part.description}
                    </p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add Contact section with the quote form */}
      <Contact />
    </div>
  );
};

export default SparePartsPage;
