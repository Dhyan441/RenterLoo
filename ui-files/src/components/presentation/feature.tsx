import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="/public/dhyan.jpg" />
    ),
    title: "Dhyan Patel",
    description:
      "This template comes packed with designer files based on Figma.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="/public/hamza.jpg" />
    ),
    title: "Hamza Mostafa",
    description:
      "Save months of work when you use our fully coded components and pages.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="/public/kieran.jpg" />
    ),
    title: "Kieran Hulsman",
    description:
      "Save time and money by helping your team focus on customization and features.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="/public/saaniya.jpg" />
    ),
    title: "Saaniya Saraf",
    description:
      "Front End Developer",
  }
];

export function FeatureLanding() {
  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-20 text-center">
        <div className="flex justify-center align-center relative z-5">
          
        </div>
      </div>
      <div className="text-center lg:text-centre">
        <Typography variant="h2" color="blue-gray" className="font-grey">
          Meet The Team
        </Typography>
          Four Software Engineering students, with a mission.
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
