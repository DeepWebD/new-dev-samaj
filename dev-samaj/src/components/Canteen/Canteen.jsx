import React from "react";

const canteenFeatures = [
  {
    id: 1,
    title: "Healthy Meals",
    description:
      "Our canteen offers a variety of healthy meal options, including vegetarian and vegan choices, ensuring that everyone can find something nutritious and delicious to eat.",
  },
  {
    id: 2,
    title: "Affordable Prices",
    description:
      "We provide meals at affordable prices, making it easy for students and staff to enjoy a good meal without breaking the bank.",
  },
  {
    id: 3,
    title: "Hygienic Environment",
    description:
      "The canteen maintains high standards of cleanliness and hygiene, ensuring that all food is prepared and served in a safe and sanitary environment.",
  },
  {
    id: 4,
    title: "Convenient Location",
    description:
      "Located centrally on campus, the canteen is easily accessible to all, providing a convenient place to grab a meal or snack between classes or work.",
  },
];

const Canteen = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-secondary">
          Canteen
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* can help image */}
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
          <img
            className="w-1/2 md:w-full mx-auto"
            src="https://placeholder.pics/svg/400"
            alt="can_help_banner"
          />
        </div>
        {/* end can help image */}
        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          {canteenFeatures.map((feature) => {
            return (
              <div key={feature.id} className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-primary border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Canteen;
