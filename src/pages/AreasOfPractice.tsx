import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

const AreasOfPractice = () => {
  return (
    <Accordion type="single" collapsible className="text-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>I. Employment-Based Immigration</AccordionTrigger>
        <AccordionContent className="p-2">
          <p>
            Lefflaw is dedicated to aiding businesses of all sizes in achieving their immigration objectives by bringing in foreign workers and talent. Whether your organization seeks to bring employees to the U.S. on a permanent or temporary basis, we are known for efficiently guiding employers through the complexities of business immigration law.
          </p>
          <p className="mt-2">
          Explore your business immigration options below or reach out to us to find out how we can support your
          organization.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1a">
              <AccordionTrigger>A. Permanent Residency Through Employment, Self-Petition or Investment</AccordionTrigger>
              <AccordionContent className="p-2 flex flex-col gap-2">
                <p><b>EB-1:</b> Provides permanent residency to foreign nationals who:</p>
                <ul className="p-2">
                  <li>- Possess extraordinary abilities</li>
                  <li>- Are distinguished professors or researchers</li>
                  <li>- Are executives and managers of foreign companies being transferred to the U.S.</li>
                </ul>
                <p><b>EB-2:</b> Offers permanent residency to foreign nationals who are:</p>
                <ul className="p-2">
                  <li>- Workers holding advanced degrees</li>
                  <li>- Demonstrate exceptional ability in the sciences, arts, or business</li>
                  <li>- Self-petition through the National Interest Waiver</li>
                </ul>
                <p><b>EB-3:</b> Grants permanent residency to foreign nationals who are skilled workers and professionals but do not meet the criteria for <b>EB-1</b> or <b>EB-2</b>.</p>
                <p><b>EB-4:</b> Provides permanent residency to specific categories of special immigrants:</p>
                <ul className="p-2">
                  <li>- Religious Workers</li>
                  <li>- Translators from Iraq and Afghanistan</li>
                  <li>- Iraqis who have supported the United States</li>
                  <li>- Employees of International Organizations</li>
                  <li>- Medical Professionals</li>
                  <li>- Members of the Armed Forces</li>
                </ul>
                <p><b>EB-5:</b> Offers permanent residency to foreign national investors:</p>
                <ul className="p-2">
                  <li>- Invest a minimum of $800,000 in "targeted employment areas"</li>
                  <li>- Invest $1,000,050 in other locations</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1b">
              <AccordionTrigger>B. Non-Immigrant Options through Employment or Investment</AccordionTrigger>
              <AccordionContent className="p-2">

                            <Accordion type="single" collapsible>
                                <AccordionItem value="e1-e2">
                                    <AccordionTrigger>E-1/E-2 Treaty Trader and Investor Visas</AccordionTrigger>
                                    <AccordionContent>
                                    Individuals engaged in trade or investment, along with their employees, can obtain visas to operate their businesses in the United States, provided that their home country has a commercial treaty with the U.S. that grants visa eligibility.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="e3">
                                    <AccordionTrigger>E-3</AccordionTrigger>
                                    <AccordionContent>
                                    Allows employers to hire Australian professional workers in specialty occupations for up to two years.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="h1b">
                                    <AccordionTrigger>H-1B</AccordionTrigger>
                                    <AccordionContent>
                                    Professionals holding at least a bachelor’s degree or equivalent work experience may qualify for a non-immigrant visa, contingent upon their employers proving that they will receive at least the prevailing wage for their role.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="h2b">
                                    <AccordionTrigger>H-2B</AccordionTrigger>
                                    <AccordionContent>
                                    This visa permits employers to recruit foreign workers for temporary non-agricultural services or labor on a one-time, seasonal, intermittent, or peak-load basis in the U.S.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="l1">
                                    <AccordionTrigger>L-1 Intracompany Transfer Visas</AccordionTrigger>
                                    <AccordionContent>
                                    These visas are designated for executives, managers, and employees with specialized knowledge who are transferring to a U.S. branch of their employer. L-1 visa holders in executive and managerial roles may qualify for permanent residency without needing labor certification.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="o1">
                                    <AccordionTrigger>O-1 Extraordinary Ability Worker Visas</AccordionTrigger>
                                    <AccordionContent>
                                    This category is reserved for foreign nationals who demonstrate extraordinary ability, including entertainers, athletes, scientists, and business professionals.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="tn">
                                    <AccordionTrigger>TN Visas</AccordionTrigger>
                                    <AccordionContent>
                                    Established for citizens of Canada and Mexico, this special category is governed by the North American Free Trade Agreement.
                                    </AccordionContent>
                                </AccordionItem>
                                </Accordion>

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>II. Family Immigration</AccordionTrigger>
        <AccordionContent className="p-2">
          <p>At Lefflaw, it is our mission to keep families together and to assist them in obtaining a path to U.S.
residency and eventual citizenship. Navigating the intricacies of family-based immigration can be
challenging, making it essential for applicants to consult with a skilled and committed attorney at
Lefflaw. We prioritize transparency regarding any potential hurdles or complexities in your case and are
dedicated to providing thorough representation. In our strive to to create family unity we offer the
following services.</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2a">
              <AccordionTrigger>A. Parole in Place; Fiancé Visas and Certain Spouse Visas</AccordionTrigger>
              <AccordionContent className="p-2">
                <ul className="flex flex-col gap-4">
                  <li><b>Parole in Place for certain Spouses and their minor children of U.S. citizens:</b> This is based on the
                  Biden Administration's June 17, 2024 Executive Order</li>
                  <li><b>Military Parole in Place: </b> For certain Family members of Military Servicemen</li>
                  <li><b>Fiancé Visas K-1 Fiancé(e) of U.S. Citizen:</b> Available to finances of a U.S. citizen who marry within 90
                  days after arrival to the U.S and have met their fiancé in person at least once within the last two years</li>
                  <li><b>Spouse of U.S. Citizen living abroad(K-3 Visa):</b> Available to U.S. citizen wanting to bring their foreign
                  spouse to the United States while their Petition is pending.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2b">
              <AccordionTrigger>B. Legal Permanent Residency through Adjustment of Status or Consulate Processing</AccordionTrigger>
              <AccordionContent>
                <p className="p-2 font-semibold">Available for certain qualified family relations either as immediate relatives or family preference:</p>
               
                <Accordion type="single" collapsible className="p-2">
      
                    <AccordionItem value="ir-visas">
                        <AccordionTrigger>
                            Immediate Relative (IR) Immigrant Visas 
                        </AccordionTrigger>
                        <AccordionContent className="p-2">
                            <p className="font-normal mb-4">
                            Are not subject to numerical limitations, allowing an
unlimited number of immigrants in this category to legally enter the United States each fiscal
year. These visas are classified into five distinct categories based on the specific relationship
between the immigrant and the U.S. citizen. The categories for Immediate Relative Immigrant
visas include: </p>
                           
                        <ul>
                            <li><b>IR-1:</b> Spouses of U.S. citizens</li>
                            <li><b>IR-2:</b> Unmarried children under 21 years of age of U.S. citizens</li>
                            <li><b>IR-3:</b> Orphans adopted internationally by U.S. citizens</li>
                            <li><b>IR-4:</b> Orphans who are in the process of being adopted in the U.S. by U.S. citizens</li>
                            <li><b>IR-5:</b> Parents of U.S. citizens who are at least 21 years old</li>
                        </ul>

                        <p className="text-neutral-500 mt-2">- Note that some individuals may require waivers depending on the individual circumstances</p>
                        </AccordionContent>
                    </AccordionItem>
      
                    <AccordionItem value="family-preference-visas">
                        <AccordionTrigger>Family Preference Immigrant Visas</AccordionTrigger>
                        <AccordionContent className="p-2">
                        <p className="font-normal mb-4">
                        Are designated for more distant relatives of U.S. citizens, as
well as for individuals in specific relationships with Lawful Permanent Residents (LPRs). In
contrast to IR immigrant visas, family preference visas are subject to numerical limitations, which
often results in a significantly longer processing time. </p>
                         <p className="mb-2"> There are four categories of family preference immigrant visas: </p>
                        <ul>
                            <li><b>F1:</b> For adult (unmarried) children of U.S. citizens and their minor children</li>
                            <li><b>F2:</b> For spouses, minor children, and unmarried adult children of LPRs</li>
                            <li><b>F3:</b> For married children of U.S. citizens, along with their spouses and minor children</li>
                            <li><b>F4:</b> For siblings of U.S. citizens who are at least 21 years old, including their minor children</li>
                        </ul>
                        <p className="text-neutral-500 mt-2">
                        - Although it might appear random, relatives like grandparents, aunts, uncles, in-laws, and cousins cannot
sponsor family members for immigration purposes. Additionally, many of these categories may
necessitate extra waivers and could face considerable backlogs based on various factors, including the
applicant's country of origin. Certain immediate family member applicants might also require a waiver if
they arrived in the U.S. without being granted parole. At Lefflaw, we are here to assist you in determining
the most suitable and lawful strategy tailored to your unique circumstances
                        </p>
                        </AccordionContent>
                    </AccordionItem>
      
                </Accordion>


              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>III. Waivers</AccordionTrigger>
        <AccordionContent>
          
          Immigration waivers serve as a vital tool for individuals facing barriers to entry into the United States,
enabling them to secure essential immigration benefits. Here are some important aspects of waivers:
Their primary function is to offer relief to those classified as inadmissible due to issues like unlawful

presence, criminal records, or health concerns. We specialize in preparing and filing I-601 Waivers or I-
601A Provisional Waivers tailored to your specific circumstances. If granted, these waivers empower U.S.

immigration officials to disregard the reasons for inadmissibility and approve your immigration benefits.
At Leff Law, we are dedicated to guiding you through this intricate and often unpredictable process. We
also provide assistance with deportation waivers on an individual basis. 
          
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>IV. Naturalization and Citizenship</AccordionTrigger>
        <AccordionContent>
        At Lefflaw, we are dedicated to guiding you on your journey to citizenship. If you fulfill specific criteria,
you could gain U.S. citizenship either at birth or afterwards if you have lived in the U.S. for a certain
period of time as a Legal Permanent Resident.
There are three primary routes to achieve this: through Acquired or Derivative citizenship, or via
Naturalization. Naturalization is the process for individuals born outside the United States to become
U.S. citizens.
While acquired citizenship are certain rights vested at birth, the concept of Derivative citizenship is
rooted in immigration law, allowing a child to gain U.S. citizenship through a parent who has undergone
the naturalization process. The Child Citizenship Act of 2000 specifies the required proof and
documentation for a child to obtain U.S. citizenship. Contact our office for more information for a full
assessment and assistance in navigating this often intricate process.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>V. Federal and Ninth Circuit Appellate Work Litigation</AccordionTrigger>
        <AccordionContent>
                        <Accordion type="single" collapsible>
                    
                    <AccordionItem value="habeus-corpus">
                        <AccordionTrigger>Habeus Corpus and Circuit Court Appellate Briefs</AccordionTrigger>
                        <AccordionContent>
                        <p>
                            We are strong advocates for the rights of individuals who are detained and facing removal, especially those enduring lengthy detention periods while their cases are under appeal. Our commitment is to secure the release of these individuals during the appeal process or after a final decision, and we also prepare appellate briefs to support their cases.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="writ-of-mandamus">
                        <AccordionTrigger>Writ of Mandamus</AccordionTrigger>
                        <AccordionContent>
                        <p>
                            In situations where applications are taking an unusually long time to resolve, we file writ of mandamus to expedite the process. While waiting is expected, there are cases where delays stretch well beyond normal processing times. If your immigration application has been delayed for an unreasonable amount of time, we are here to help you. By working with an experienced immigration attorney, you might have the option to take legal action against the federal government through a writ of mandamus.
                        </p>
                        <p>
                            Please reach out to our office for a free consultation regarding appeals, writs, and extended detention to discover how we can assist you.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                    
                        </Accordion>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>VI. Humanitarian Visas</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
        <p>At present, we assist with the preparation of T visas, VAWA, and U visas, and occasionally take on these
cases pro bono. Reach out to us to discover how you might qualify for one of these visas if you've
experienced crime, human trafficking, or domestic violence. </p>

<p className="font-semibold">We're here to help you with kindness and
compassion.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AreasOfPractice;
