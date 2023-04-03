import Heading2 from "@/components/Heading2";
import ProjectCard from "@/components/ProjectCard";
import Wrapper from "@/components/Wrapper";
// import { MyProjects } from "@/utlis/data/page-data";

interface Projects {
  title: string;
  brief: string;
  points: string[];
  remark?: string;
  gradient: string;
  GithubRepo: string;
}

async function getProjects() {
  const projects = await fetch(
    // `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_API}&content_type=mjsProjects`
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_API}&content_type=mjsProjects`
  );

  if (!projects.ok) {
    throw new Error("Something went wrong");
  }

  return projects.json();
}

const Projects = async () => {
  const PortfolioProjects = await getProjects();
  console.log(PortfolioProjects);

  return (
    <div>
      <Wrapper>
        <Heading2 text={"MY PROJECTS -"} />
        <div className="flex md:flex-row flex-col gap-y-8 sm:gap-x-8 lg:gap-x-16 px-4 sm:px-16 md:px-0 ">
          {PortfolioProjects.items.map((data: any) => (
            <div key="data.fields" className="basis-4/12">
              <ProjectCard
                title={data.fields.title}
                brief={data.fields.brief}
                points={data.fields.points}
                remark={data.fields.remark}
                gradient={data.fields.gradient}
                GithubRepo={data.fields.githubRepo}
              />
            </div>
          ))}

          {/* {PortfolioProjects.items.map((items: any) => (
            <div key={items.fields}>
              {PortfolioProjects.includes.Entry.map((el: any) => (
                <div key={items.fields}>
                  {items.fields.myProjects.sys &&
                  items.fields.myProjects.sys.id === el.fields.id ? (
                    <div>
                      <ProjectCard
                        title={el.fields.title}
                        brief={el.fields.brief}
                        points={el.fields.points}
                        remark={el.fields?.remark}
                        gradient={el.fields.gradient}
                        GithubRepo={el.fields.githubRepo}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          ))} */}

          {/* {MyProjects.map((el: any) => (
            <div key="el.title" className="basis-4/12">
              <ProjectCard
                title={el.title}
                brief={el.brief}
                points={el.points}
                remark={el.remark}
                gradient={el.gradient}
                GithubRepo={el.GithubRepo}
              />
            </div>
          ))} */}
        </div>
      </Wrapper>
    </div>
  );
};

export default Projects;
