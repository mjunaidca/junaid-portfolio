import Heading2 from "@/components/Heading2";
import Wrapper from "@/components/Wrapper";
// import { AboutMe } from "@/utlis/data/page-data";

const getAboutMe = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_API}&content_type=mjsAbout`
  );

  if (!res.ok) {
    throw new Error("Unable to get About Me data from contentful");
  }

  return res.json();
};

const About = async () => {
  const About = await getAboutMe();

  return (
    <Wrapper>
      {About.items.map((data: any) => (
        <div key={data.fields.title}>
          <Heading2 text={data.fields.title} />
          <div className="flex flex-col sm:flex-row justify-between text-base md:text-lg text-grey px-4 sm:px-0 ">
            <div className="sm:basis-6/12 space-y-4 pr-0 sm:pr-3">
              <div className="font-bold">{data.fields.focusText}</div>
              <div>{data.fields.details}</div>
            </div>

            <div className="sm:basis-6/12 space-y-4 pl-0 sm:pl-3 pt-4 sm:pt-0">
              <div className="font-bold">{data.fields.random}</div>
              <div>{data.fields.randomDetails}</div>
            </div>
          </div>
        </div>
      ))}

      {/* {AboutMe.map((el) => (
        <div key={el.focusText}>
          <Heading2 text={"ABOUT -"} />
          <div className="flex flex-col sm:flex-row justify-between text-base md:text-lg text-grey px-4 sm:px-0 ">
            <div className="sm:basis-6/12 space-y-4 pr-0 sm:pr-3">
              <div className="font-bold">{el.focusText}</div>
              <div>{el.details}</div>
            </div>

            <div className="sm:basis-6/12 space-y-4 pl-0 sm:pl-3 pt-4 sm:pt-0">
              <div className="font-bold">{el.Random}</div>
              <div>{el.RandomDetails}</div>
            </div>
          </div>
        </div>
      ))} */}
    </Wrapper>
  );
};

export default About;
