import React from "react";
import { Card } from "../ui/card";
import { Clock, Users, Star, Timer } from "lucide-react";

interface TrustIndicatorProps {
  metrics?: {
    years: number;
    clients: number;
    rating: number;
    responseTime: string;
  };
}

const TrustIndicators = ({
  metrics = {
    years: 20,
    clients: 1000,
    rating: 4.9,
    responseTime: "2 hours",
  },
}: TrustIndicatorProps) => {
  return (
    <div className="w-full bg-muted py-12 md:py-20 px-4 flex items-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow bg-card border-border hover:border-primary/50">
          <div className="p-3 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">
              {metrics.years}+
            </p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow bg-card border-border hover:border-primary/50">
          <div className="p-3 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">
              {metrics.clients}+
            </p>
            <p className="text-sm text-muted-foreground">Clients Served</p>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow bg-card border-border hover:border-primary/50">
          <div className="p-3 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">
              {metrics.rating}
            </p>
            <p className="text-sm text-muted-foreground">Customer Rating</p>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow bg-card border-border hover:border-primary/50">
          <div className="p-3 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full">
            <Timer className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">
              {metrics.responseTime}
            </p>
            <p className="text-sm text-muted-foreground">
              Average Response Time & 24/7 Support
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TrustIndicators;
