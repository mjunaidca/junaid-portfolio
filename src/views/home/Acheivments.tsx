import AcheivmentsCard from "@/components/AcheivmentsCard";
import Heading2 from "@/components/Heading2";
import Wrapper from "@/components/Wrapper";
// import { MyAcheivments } from "@/utlis/data/page-data";

const getAcheivments = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_API}&content_type=mjsAcheivments`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Unable to get Acheivments data from contentful");
  }

  return res.json();
};

const Acheivments = async () => {
  const acheivments = await getAcheivments();
  console.log(acheivments);

  return (
    <div>
      <Wrapper>
        <Heading2 text={"MY ACHEIVMENTS -"} />
        <div>
          <div className="flex md:flex-row flex-col gap-y-8 sm:gap-x-8 lg:gap-x-16  px-4 sm:px-16 md:px-0  ">
            {acheivments.items.map((data: any) => (
              <div key={data.fields.title} className="basis-4/12">
                <AcheivmentsCard
                  title={data.fields.title}
                  brief={data.fields.brief}
                  points={data.fields.points}
                  gradient={data.fields.gradient}
                />
              </div>
            ))}
            {/* {MyAcheivments.map((el) => (
              <div key="el.title" className="basis-4/12">
                <AcheivmentsCard
                  title={el.title}
                  brief={el.brief}
                  points={el.points}
                  gradient={el.gradient}
                />
              </div>
            ))} */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Acheivments;
