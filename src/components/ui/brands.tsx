"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Brand {
  name: string;
  logo: string;
}

interface BrandsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  brands: Brand[];
  imageHeight?: number;
}

export const BrandsGrid = React.forwardRef<HTMLDivElement, BrandsGridProps>(
  (
    {
      className,
      title = "Trusted and loved by fast-growing companies worldwide",
      brands,
      imageHeight = 56, // 14 * 4 = 56px (h-14)
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn("py-24", className)} {...props}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          {title && (
            <p className="max-w-sm mx-auto text-pretty text-center font-medium mb-6 text-foreground md:text-lg">
              {title}
            </p>
          )}

          <div className="max-w-xs mx-auto grid grid-cols-2 items-center gap-8 md:grid-cols-3 md:max-w-lg lg:grid-cols-4 lg:max-w-4xl">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center p-2"
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
    );
  },
);

BrandsGrid.displayName = "BrandsGrid";
