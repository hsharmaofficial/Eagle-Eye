import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

const OurClients = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const clients = [
    {
      name: "Fujikura Kasei",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1740843828/Fujikura_axpu9l.png",
    },
    {
      name: "Hero",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1740844018/Hero_Motors_mmeq8f.png",
    },
    {
      name: "Johnson Matthey",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1740843828/Johnson_Mathey_d7n5ru.png",
    },
    {
      name: "Sona BLW",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1740843827/Sona_u1soff.png",
    },
    {
      name: "Rico Auto Industries",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1740843827/rico_fug8fd.png",
    },
    {
      name: "Nippon Steel",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1740843829/nippon_pbu8zt.png",
    },
    {
      name: "Lumax",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1740843828/Lumax_ww140q.png",
    },
    {
      name: "LG",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1740843828/LG_ucrpul.png",
    },
    // New logos
    {
      name: "Roop Auto",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505330/Roop-Auto_u7bgvj.svg",
    },
    {
      name: "Federal Mogul",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505330/Federal-Mogul_Logo.svg_padn3i.png",
    },
    {
      name: "Komatsu",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505331/Komatsu_company_logos.svg_zw0obg.png",
    },
    {
      name: "JBMA",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505331/JBMA.NS_BIG-0bb22e95_cnbgyh.png",
    },
    {
      name: "Yutaka",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505329/yutaka_tpvh3t.svg",
    },
    {
      name: "PNB Housing Finance",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505331/Pnb-Housing-Finance-Logo_d187us.webp",
    },
    {
      name: "Gabriel",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505330/GABRIEL.NS_BIG-6c4249c9_t5rm5c.png",
    },
    {
      name: "Hi Tech Gears",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505329/Hi_Tech_Gears_Icon_d68ac87c-d18e-473c-974f-0cffc40c7de7_1200x1200_ejuvz7.webp",
    },
    {
      name: "FCC Clutch",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505329/fcc_clutch_smqf75.png",
    },
    {
      name: "Honda",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505329/Honda-Logo.wine_nixeuh.png",
    },
    {
      name: "BorgWarner",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505328/BorgWarner_logo_logotype_btabf7.png",
    },
    {
      name: "Krishna",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505328/Krishna_yweele.png",
    },
    {
      name: "IAC",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505329/IAC_jovxnp.png",
    },
    {
      name: "Donaldson Company",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505328/Donaldson_Company-Logo.wine_uwn5hg.png",
    },
    {
      name: "OSG",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505328/osg_logo_euhypa.png",
    },
    {
      name: "Bharat Seats",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505328/bharat-seats-logo_wz3i8w.png",
    },
    {
      name: "Motherson",
      logo: "https://res.cloudinary.com/dsegbtegv/image/upload/v1743505328/motherson-logo-png_seeklogo-544537_gomxpq.png",
    },
  ];

  return (
    <div className="bg-background py-16 border-y border-border/20">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <p className="max-w-sm mx-auto text-pretty text-center font-medium mb-6 text-foreground md:text-lg">
          Trusted by Industry Leaders
        </p>

        <div className="overflow-hidden">
          <div className="container" ref={emblaRef}>
            <div className="flex">
              {clients.map((brand) => (
                <div
                  key={brand.name}
                  className="flex-[0_0_25%] min-w-0 sm:flex-[0_0_20%] md:flex-[0_0_16.666%] lg:flex-[0_0_12.5%] px-2"
                >
                  <div className="relative h-[80px] w-full bg-white rounded-md p-2 flex items-center justify-center shadow-sm">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="object-contain max-w-full max-h-full w-auto h-auto"
                      width="120"
                      height="60"
                      loading="eager"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
