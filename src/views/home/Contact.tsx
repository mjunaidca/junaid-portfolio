import Heading2 from "@/components/Heading2";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import MapImage from "../../assets/images/map.png";
import { ContactME } from "@/utlis/data/page-data";
import MyVector from "../../assets/images/Vector.png";
import Quote from "../../assets/images/Quote.png";
import {
  Twitter,
  GitHub,
  FaceBook,
  LinkedIn,
} from "@/assets/icons/socialmedia";
import Link from "next/link";
import IconText from "@/components/IconText";

const Contact = () => {
  return (
    <div>
      <Wrapper>
        <Heading2 text={ContactME.title} />
        <div className="flex justify-center px-4 sm:px-0 ">
          <Image src={MapImage} alt="Maps" />
          <div className="absolute base:w-auto max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl md:w-full mx-8 md:mx-14 mt-10 max-h-112 md:h-full md:max-h-56 lg:max-h-72 bg-gradient-to-br from-lime to-apricoat shadow-md">
            <div className="flex flex-col md:flex-row md:h-full">
              <div className="sm:basis-4/12 basis-1/6  xl:px-12 sm:px-6  py-3 flex items-center justify-center ">
                <Image src={MyVector} alt={"MyVector"} />
              </div>
              <div className="sm:basis-4/12 basis-5/6 flex flex-col py-3 items-start justify-center gap-3 px-6">
                <div className="font-semibold text-lg md:text-xl lg:text-2xl text-grey">
                  {ContactME.name}
                </div>
                <div className="font-semibold text-sm md:text-lg lg:text-xl text-grey-dark">
                  {ContactME.email}
                </div>
                <div className="font-normal lg:text-lg text-grey-light pt-3">
                  {ContactME.number}
                </div>
                <div className="flex flex-row gap-5 py-2 self-center">
                  {ContactME.socialMedia.map((item: any) => (
                    <IconText
                      key={item.label}
                      Icon={item.Icon}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>
              <div className="hidden md:block basis-4/12 flex-col items-baseline my-auto justify-between gap-2">
                <div className="w-6 lg:w-8">
                  <Image src={Quote} alt={"Quote"} />
                </div>
                <div className="px-3 font-semibold text-md lg:text-lg xl:text-xl text-grey-dark">
                  {ContactME.Quotes}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-semibold text-base lg:text-xl text-grey-dark pt-96 mt-24 sm:mt-0 md:pt-16 lg:pt-18 pb-5 md:pb-5 lg:pb-7 ">
          {ContactME.Copyright}
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
