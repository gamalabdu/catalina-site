import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import areasOfPracticePhoto from '../assets/areasofpractice.jpg'

const Practices = () => {
  return (
    <div className="h-[calc(100vh-60px)] w-full mt-[60px] flex flex-col items-center align-middle">

      <div className="object-contain">

        <img className="h-[300px] w-screen object-cover" src={areasOfPracticePhoto} />

      </div>

      <div className="w-[90%] p-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-lg">Employment-Based Immigration</AccordionTrigger>
            <AccordionContent className="p-2">
            Lefflaw is dedicated to aiding businesses of all sizes in achieving their immigration objectives by bring in
foreign workers and talent. Whether your organization seeks to bring employees to the U.S. on a
permanent or temporary basis, we are known for efficiently guiding employers through the complexities
of business immigration law.

Explore your business immigration options below or reach out to us to find out how we can support your
organization.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg">Permanent Residency Through Employment, Self-Petition or Investment</AccordionTrigger>
            <AccordionContent className="p-2">
            EB-1: Provides permanent residency to foreign nationals who:
Possess extraordinary abilities
Are distinguished professors or researchers; or
Are executives and managers of foreign companies being transferred to the U.S.
EB-2: Offers permanent residency to foreign nationals who are:
Workers holding advanced degrees; or
Demonstrate exceptional ability in the sciences, arts, or business. Through this category there is also the
possibility of self-petition through the National Interest Waiver.
EB-3: Grants permanent residency to foreign nationals who are skilled workers and professionals but do
not meet the criteria for EB-1 or EB-2. The EB-3 requirements are more lenient, though the processing
time may be longer.
EB-4: Provides permanent residency to specific categories of special immigrants, which include:
- Religious Workers
- Translators from Iraq and Afghanistan
- Iraqis who have supported the United States
- Employees of International Organizations
- Medical Professionals
- Members of the Armed Forces
EB-5: Offers permanent residency to foreign national investors who contribute to new commercial
ventures that generate jobs for ten individuals. This program categorizes investors into two groups:
- Those who invest a minimum of $800,000 in "targeted employment areas," which are defined as rural
regions or areas with unemployment rates at least 150% higher than the national average; and
- Those who invest $1,000,050 in other locations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg">Non-Immigrant Options through Employment or Investment</AccordionTrigger>
            <AccordionContent className="p-2">
            E-1/E-2 Treaty Trader and Investor Visas: Individuals engaged in trade or investment, along with their
employees, can obtain visas to operate their businesses in the United States, provided that their home
country has a commercial treaty with the U.S. that grants visa eligibility.
E-3 - Allows employers to hire Australian professional workers in specialty occupations for up to two
years.
H-1B: Professionals holding at least a bachelor’s degree or equivalent work experience may qualify for a
non-immigrant visa, contingent upon their employers proving that they will receive at least the
prevailing wage for their role.
H-2B: This visa permits employers to recruit foreign workers for temporary non-agricultural services or
labor on a one-time, seasonal, intermittent, or peak-load basis in the U.S.
L-1 Intracompany Transfer Visas: These visas are designated for executives, managers, and employees
with specialized knowledge who are transferring to a U.S. branch of their employer. L-1 visa holders in
executive and managerial roles may qualify for permanent residency without needing labor certification.
O-1 Extraordinary Ability Worker Visas: This category is reserved for foreign nationals who demonstrate
extraordinary ability, including entertainers, athletes, scientists, and business professionals.
TN Visas: Established for citizens of Canada and Mexico, this special category is governed by the North
American Free Trade Agreement
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Practices;
