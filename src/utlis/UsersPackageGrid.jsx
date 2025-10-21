import React from "react";

const UsersPackagesGrid = () => {
  const packages = [
    {
      title: "Opix Algo Lite",
      return: "Projected Monthly Return: 6% – 11%",
      description:
        "Fully automated algorithmic trading that uses advanced order flow strategy, money management and probabilistic analysis. Most effective in the price consolidation stages that occupy the bulk of the market time.",
    },
    {
      title: "Opix Algo Pro",
      return: "Projected Monthly Return: 8% – 13%",
      description:
        "Fine-tuned automated algorithmic trading that improves as it learns through its unique self-optimization. Strict rule-based approach to trading that fits most of the market time. Equity protection, order flow strategy, money management and probabilistic analysis.",
    },
    {
      title: "Opix Algo Expert",
      return: "Projected Monthly Return: 10% – 16%",
      description:
        "Next generation algorithmic trading providing an edge of trading opportunity with exceptional analysis and data finding to anticipate future price movements. Includes order flow system, transaction cost analysis, equity strategy, money management & probabilistic analysis.",
    },
  ];

  return (
    <div className=" rounded-xl p-2 dark:bg-neutral-800 dark:text-white  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="flex bg-white dark:bg-neutral-800 dark:text-white  flex-col justify-between border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg dark:bg-neutral-800 dark:text-white  font-semibold text-gray-900 mb-3">
                {pkg.title}
              </h3>

              <div className="inline-block bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-white  text-sm px-3 py-1 rounded-full mb-4">
                {pkg.return}
              </div>

              <hr className="my-3 border-gray-200" />

              <p className="text-sm dark:bg-neutral-800 dark:text-white  text-gray-600 leading-relaxed">
                {pkg.description}
              </p>
            </div>

            {/* Subscribe Button */}
            <button className="bg-[#F8983B] text-white font-medium text-sm py-3 w-full hover:bg-[#e1862f] transition-colors">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPackagesGrid;
