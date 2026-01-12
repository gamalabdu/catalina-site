import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

const AreasOfPractice = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-950/30 to-blue-950"></div>
            <div className="w-2 h-2 rounded-full bg-blue-950"></div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-950/30 to-blue-950"></div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Areas of Practice
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-950 to-blue-800 rounded-full mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-3xl">
            Leff Law Group provides comprehensive immigration legal services with expertise spanning employment-based immigration, family reunification, waivers, naturalization, and humanitarian cases. Our dedicated team is committed to guiding you through every step of your immigration journey.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 lg:p-8">
          <Accordion type="single" collapsible className="w-full">
            {/* Employment-Based Immigration */}
            <AccordionItem value="item-1" className="border-b border-gray-200 first:border-t-0">
              <AccordionTrigger className="text-xl lg:text-2xl font-semibold text-gray-900 py-6 hover:no-underline group transition-colors duration-200 hover:text-blue-950">
                <span className="flex items-center gap-3">
                  <span className="text-blue-950 font-bold text-sm lg:text-base">I.</span>
                  <span>Employment-Based Immigration</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-6 text-gray-700">
                  <p className="text-base lg:text-lg leading-relaxed font-light">
                    Lefflaw is dedicated to aiding businesses of all sizes in achieving their immigration objectives by bringing in foreign workers and talent. Whether your organization seeks to bring employees to the U.S. on a permanent or temporary basis, we are known for efficiently guiding employers through the complexities of business immigration law.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed font-light">
                    Explore your business immigration options below or reach out to us to find out how we can support your organization.
                  </p>
                  
                  <Accordion type="single" collapsible className="mt-6">
                    <AccordionItem value="item-1a" className="border border-gray-200 rounded-lg mb-4 hover:border-blue-950/30 transition-colors duration-200 shadow-sm hover:shadow-md">
                      <AccordionTrigger className="text-lg font-semibold text-gray-800 px-4 py-3 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                        <span className="flex items-center gap-2">
                          <span className="text-blue-950 font-bold">A.</span>
                          <span>Permanent Residency Through Employment, Self-Petition or Investment</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-2">
                        <div className="space-y-4 text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">EB-1:</p>
                            <p className="mb-2 font-light">Provides permanent residency to foreign nationals who:</p>
                            <ul className="space-y-2 ml-4 text-base font-light">
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Possess extraordinary abilities</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Are distinguished professors or researchers</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Are executives and managers of foreign companies being transferred to the U.S.</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">EB-2:</p>
                            <p className="mb-2 font-light">Offers permanent residency to foreign nationals who are:</p>
                            <ul className="space-y-2 ml-4 text-base font-light">
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Workers holding advanced degrees</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Demonstrate exceptional ability in the sciences, arts, or business</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Self-petition through the National Interest Waiver</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">EB-3:</p>
                            <p className="font-light">Grants permanent residency to foreign nationals who are skilled workers and professionals but do not meet the criteria for <span className="font-semibold">EB-1</span> or <span className="font-semibold">EB-2</span>.</p>
                          </div>
                          
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">EB-4:</p>
                            <p className="mb-2 font-light">Provides permanent residency to specific categories of special immigrants:</p>
                            <ul className="space-y-2 ml-4 text-base font-light">
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Religious Workers</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Translators from Iraq and Afghanistan</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Iraqis who have supported the United States</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Employees of International Organizations</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Medical Professionals</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Members of the Armed Forces</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">EB-5:</p>
                            <p className="mb-2 font-light">Offers permanent residency to foreign national investors:</p>
                            <ul className="space-y-2 ml-4 text-base font-light">
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Invest a minimum of $800,000 in "targeted employment areas"</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-blue-950 mt-1.5">•</span>
                                <span>Invest $1,000,050 in other locations</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-1b" className="border border-gray-200 rounded-lg hover:border-blue-950/30 transition-colors duration-200 shadow-sm hover:shadow-md">
                      <AccordionTrigger className="text-lg font-semibold text-gray-800 px-4 py-3 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                        <span className="flex items-center gap-2">
                          <span className="text-blue-950 font-bold">B.</span>
                          <span>Non-Immigrant Options through Employment or Investment</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-2">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="e1-e2" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                              E-1/E-2 Treaty Trader and Investor Visas
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 font-light leading-relaxed pt-2">
                              Individuals engaged in trade or investment, along with their employees, can obtain visas to operate their businesses in the United States, provided that their home country has a commercial treaty with the U.S. that grants visa eligibility.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="e3" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                              E-3
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 font-light leading-relaxed pt-2">
                              Allows employers to hire Australian professional workers in specialty occupations for up to two years.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="h1b" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                              H-1B
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 font-light leading-relaxed pt-2">
                              Professionals holding at least a bachelor's degree or equivalent work experience may qualify for a non-immigrant visa, contingent upon their employers proving that they will receive at least the prevailing wage for their role.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="h2b" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                              H-2B
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 font-light leading-relaxed pt-2">
                              This visa permits employers to recruit foreign workers for temporary non-agricultural services or labor on a one-time, seasonal, intermittent, or peak-load basis in the U.S.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="l1" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                              L-1 Intracompany Transfer Visas
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 font-light leading-relaxed pt-2">
                              These visas are designated for executives, managers, and employees with specialized knowledge who are transferring to a U.S. branch of their employer. L-1 visa holders in executive and managerial roles may qualify for permanent residency without needing labor certification.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="o1" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                              O-1 Extraordinary Ability Worker Visas
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 font-light leading-relaxed pt-2">
                              This category is reserved for foreign nationals who demonstrate extraordinary ability, including entertainers, athletes, scientists, and business professionals.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="tn" className="hover:bg-gray-50/50 transition-colors duration-200">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                              TN Visas
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 font-light leading-relaxed pt-2">
                              Established for citizens of Canada and Mexico, this special category is governed by the North American Free Trade Agreement.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Family Immigration */}
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-xl lg:text-2xl font-semibold text-gray-900 py-6 hover:no-underline group transition-colors duration-200 hover:text-blue-950">
                <span className="flex items-center gap-3">
                  <span className="text-blue-950 font-bold text-sm lg:text-base">II.</span>
                  <span>Family Immigration</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-6 text-gray-700">
                  <p className="text-base lg:text-lg leading-relaxed font-light">
                    At Lefflaw, it is our mission to keep families together and to assist them in obtaining a path to U.S. residency and eventual citizenship. Navigating the intricacies of family-based immigration can be challenging, making it essential for applicants to consult with a skilled and committed attorney at Lefflaw. We prioritize transparency regarding any potential hurdles or complexities in your case and are dedicated to providing thorough representation. In our strive to create family unity we offer the following services.
                  </p>
                  
                  <Accordion type="single" collapsible className="mt-6">
                    <AccordionItem value="item-2a" className="border border-gray-200 rounded-lg mb-4 hover:border-blue-950/30 transition-colors duration-200 shadow-sm hover:shadow-md">
                      <AccordionTrigger className="text-lg font-semibold text-gray-800 px-4 py-3 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                        <span className="flex items-center gap-2">
                          <span className="text-blue-950 font-bold">A.</span>
                          <span>Parole in Place; Fiancé Visas and Certain Spouse Visas</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-2">
                        <ul className="space-y-4 text-gray-700">
                          <li className="font-light leading-relaxed">
                            <span className="font-semibold text-gray-900">Parole in Place for certain Spouses and their minor children of U.S. citizens:</span> This is based on the Biden Administration's June 17, 2024 Executive Order
                          </li>
                          <li className="font-light leading-relaxed">
                            <span className="font-semibold text-gray-900">Military Parole in Place:</span> For certain Family members of Military Servicemen
                          </li>
                          <li className="font-light leading-relaxed">
                            <span className="font-semibold text-gray-900">Fiancé Visas K-1 Fiancé(e) of U.S. Citizen:</span> Available to fiancés of a U.S. citizen who marry within 90 days after arrival to the U.S and have met their fiancé in person at least once within the last two years
                          </li>
                          <li className="font-light leading-relaxed">
                            <span className="font-semibold text-gray-900">Spouse of U.S. Citizen living abroad (K-3 Visa):</span> Available to U.S. citizen wanting to bring their foreign spouse to the United States while their Petition is pending.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2b" className="border border-gray-200 rounded-lg hover:border-blue-950/30 transition-colors duration-200 shadow-sm hover:shadow-md">
                      <AccordionTrigger className="text-lg font-semibold text-gray-800 px-4 py-3 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                        <span className="flex items-center gap-2">
                          <span className="text-blue-950 font-bold">B.</span>
                          <span>Legal Permanent Residency through Adjustment of Status or Consulate Processing</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-2">
                        <p className="font-semibold text-gray-900 mb-4">Available for certain qualified family relations either as immediate relatives or family preference:</p>
                       
                        <Accordion type="single" collapsible>
                          <AccordionItem value="ir-visas" className="border border-gray-200 rounded-lg mb-4 hover:border-blue-950/30 transition-colors duration-200 shadow-sm hover:shadow-md">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 px-4 py-3 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                              Immediate Relative (IR) Immigrant Visas
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                              <p className="font-light mb-4 leading-relaxed text-gray-700">
                                Are not subject to numerical limitations, allowing an unlimited number of immigrants in this category to legally enter the United States each fiscal year. These visas are classified into five distinct categories based on the specific relationship between the immigrant and the U.S. citizen. The categories for Immediate Relative Immigrant visas include:
                              </p>
                             
                              <ul className="space-y-2 ml-4">
                                <li className="font-light text-gray-700"><span className="font-semibold text-gray-900">IR-1:</span> Spouses of U.S. citizens</li>
                                <li className="font-light text-gray-700"><span className="font-semibold text-gray-900">IR-2:</span> Unmarried children under 21 years of age of U.S. citizens</li>
                                <li className="font-light text-gray-700"><span className="font-semibold text-gray-900">IR-3:</span> Orphans adopted internationally by U.S. citizens</li>
                                <li className="font-light text-gray-700"><span className="font-semibold text-gray-900">IR-4:</span> Orphans who are in the process of being adopted in the U.S. by U.S. citizens</li>
                                <li className="font-light text-gray-700"><span className="font-semibold text-gray-900">IR-5:</span> Parents of U.S. citizens who are at least 21 years old</li>
                              </ul>

                              <p className="text-gray-600 mt-4 text-sm italic font-light">Note that some individuals may require waivers depending on the individual circumstances</p>
                            </AccordionContent>
                          </AccordionItem>
      
                          <AccordionItem value="family-preference-visas" className="border border-gray-200 rounded-lg hover:border-blue-950/30 transition-colors duration-200 shadow-sm hover:shadow-md">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 px-4 py-3 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                              Family Preference Immigrant Visas
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                              <p className="font-light mb-4 leading-relaxed text-gray-700">
                                Are designated for more distant relatives of U.S. citizens, as well as for individuals in specific relationships with Lawful Permanent Residents (LPRs). In contrast to IR immigrant visas, family preference visas are subject to numerical limitations, which often results in a significantly longer processing time.
                              </p>
                              <p className="mb-3 font-light text-gray-700">There are four categories of family preference immigrant visas:</p>
                              <ul className="space-y-2 ml-4 mb-4">
                                <li className="font-light text-gray-700"><span className="font-semibold text-gray-900">F1:</span> For adult (unmarried) children of U.S. citizens and their minor children</li>
                                <li className="font-light text-gray-700"><span className="font-semibold text-gray-900">F2:</span> For spouses, minor children, and unmarried adult children of LPRs</li>
                                <li className="font-light text-gray-700"><span className="font-semibold text-gray-900">F3:</span> For married children of U.S. citizens, along with their spouses and minor children</li>
                                <li className="font-light text-gray-700"><span className="font-semibold text-gray-900">F4:</span> For siblings of U.S. citizens who are at least 21 years old, including their minor children</li>
                              </ul>
                              <p className="text-gray-600 text-sm italic font-light leading-relaxed">
                                Although it might appear random, relatives like grandparents, aunts, uncles, in-laws, and cousins cannot sponsor family members for immigration purposes. Additionally, many of these categories may necessitate extra waivers and could face considerable backlogs based on various factors, including the applicant's country of origin. Certain immediate family member applicants might also require a waiver if they arrived in the U.S. without being granted parole. At Lefflaw, we are here to assist you in determining the most suitable and lawful strategy tailored to your unique circumstances.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Waivers */}
            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-xl lg:text-2xl font-semibold text-gray-900 py-6 hover:no-underline group transition-colors duration-200 hover:text-blue-950">
                <span className="flex items-center gap-3">
                  <span className="text-blue-950 font-bold text-sm lg:text-base">III.</span>
                  <span>Waivers</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="text-gray-700">
                  <p className="text-base lg:text-lg leading-relaxed font-light mb-4">
                    Immigration waivers serve as a vital tool for individuals facing barriers to entry into the United States, enabling them to secure essential immigration benefits. Their primary function is to offer relief to those classified as inadmissible due to issues like unlawful presence, criminal records, or health concerns.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed font-light mb-4">
                    We specialize in preparing and filing I-601 Waivers or I-601A Provisional Waivers tailored to your specific circumstances. If granted, these waivers empower U.S. immigration officials to disregard the reasons for inadmissibility and approve your immigration benefits.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed font-light">
                    At Leff Law, we are dedicated to guiding you through this intricate and often unpredictable process. We also provide assistance with deportation waivers on an individual basis.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Naturalization and Citizenship */}
            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-xl lg:text-2xl font-semibold text-gray-900 py-6 hover:no-underline group transition-colors duration-200 hover:text-blue-950">
                <span className="flex items-center gap-3">
                  <span className="text-blue-950 font-bold text-sm lg:text-base">IV.</span>
                  <span>Naturalization and Citizenship</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="text-gray-700 space-y-4">
                  <p className="text-base lg:text-lg leading-relaxed font-light">
                    At Lefflaw, we are dedicated to guiding you on your journey to citizenship. If you fulfill specific criteria, you could gain U.S. citizenship either at birth or afterwards if you have lived in the U.S. for a certain period of time as a Legal Permanent Resident.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed font-light">
                    There are three primary routes to achieve this: through Acquired or Derivative citizenship, or via Naturalization. Naturalization is the process for individuals born outside the United States to become U.S. citizens.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed font-light">
                    While acquired citizenship are certain rights vested at birth, the concept of Derivative citizenship is rooted in immigration law, allowing a child to gain U.S. citizenship through a parent who has undergone the naturalization process. The Child Citizenship Act of 2000 specifies the required proof and documentation for a child to obtain U.S. citizenship.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed font-light">
                    Contact our office for more information for a full assessment and assistance in navigating this often intricate process.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Federal and Ninth Circuit Appellate Work */}
            <AccordionItem value="item-5" className="border-b border-gray-200">
              <AccordionTrigger className="text-xl lg:text-2xl font-semibold text-gray-900 py-6 hover:no-underline group transition-colors duration-200 hover:text-blue-950">
                <span className="flex items-center gap-3">
                  <span className="text-blue-950 font-bold text-sm lg:text-base">V.</span>
                  <span>Federal and Ninth Circuit Appellate Work Litigation</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <Accordion type="single" collapsible>
                  <AccordionItem value="habeus-corpus" className="border border-gray-200 rounded-lg mb-4 hover:border-blue-950/30 transition-colors duration-200 shadow-sm hover:shadow-md">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800 px-4 py-3 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                      Habeas Corpus and Circuit Court Appellate Briefs
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2">
                      <p className="text-gray-700 font-light leading-relaxed">
                        We are strong advocates for the rights of individuals who are detained and facing removal, especially those enduring lengthy detention periods while their cases are under appeal. Our commitment is to secure the release of these individuals during the appeal process or after a final decision, and we also prepare appellate briefs to support their cases.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="writ-of-mandamus" className="border border-gray-200 rounded-lg hover:border-blue-950/30 transition-colors duration-200 shadow-sm hover:shadow-md">
                    <AccordionTrigger className="text-lg font-semibold text-gray-800 px-4 py-3 hover:no-underline hover:text-blue-950 transition-colors duration-200">
                      Writ of Mandamus
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2">
                      <div className="space-y-4 text-gray-700">
                        <p className="font-light leading-relaxed">
                          In situations where applications are taking an unusually long time to resolve, we file writ of mandamus to expedite the process. While waiting is expected, there are cases where delays stretch well beyond normal processing times. If your immigration application has been delayed for an unreasonable amount of time, we are here to help you. By working with an experienced immigration attorney, you might have the option to take legal action against the federal government through a writ of mandamus.
                        </p>
                        <p className="font-light leading-relaxed">
                          Please reach out to our office for a free consultation regarding appeals, writs, and extended detention to discover how we can assist you.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* Humanitarian Visas */}
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl lg:text-2xl font-semibold text-gray-900 py-6 hover:no-underline group transition-colors duration-200 hover:text-blue-950">
                <span className="flex items-center gap-3">
                  <span className="text-blue-950 font-bold text-sm lg:text-base">VI.</span>
                  <span>Humanitarian Visas</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="text-base lg:text-lg leading-relaxed font-light">
                    At present, we assist with the preparation of T visas, VAWA, and U visas, and occasionally take on these cases pro bono. Reach out to us to discover how you might qualify for one of these visas if you've experienced crime, human trafficking, or domestic violence.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-50/50 border-l-4 border-blue-950 rounded-r p-5 mt-6 shadow-sm">
                    <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                      We're here to help you with kindness and compassion.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AreasOfPractice;
