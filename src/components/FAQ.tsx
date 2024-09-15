import { faq } from "@/constants";
import { FC } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";

interface FAQProps {}

const FAQ: FC<FAQProps> = ({}) => {
  return (
    <section className="pt-[40px] pb-[86px] bg-primary">
      <div className="container max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center gap-[64px]">
          <h3 className="text-[40px] leading-[39.2px] text-center font-blacknorthdemo uppercase">FAQ</h3>

          {/* <div className="flex flex-col gap-4"> */}
          <Accordion type="single" collapsible className="w-full max-w-[693px] flex flex-col gap-4">
            {faq.map(({ id, title, content }, index) => (
              <AccordionItem key={id} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <span className="text-[18px] leading-[17.6px] font-blacknorthdemo text-white">{title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <span className="text-[14px] leading-[19px] text-black">{content}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
