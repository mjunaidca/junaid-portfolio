import Heading2 from "@/components/Heading2"
import Wrapper from "@/components/Wrapper"
import { AboutMe } from "@/utlis/data/page-data"

const About = () => {
    return (
        <Wrapper>
            <Heading2 text={'ABOUT -'} />
            {AboutMe.map((el) => (
                <div key={el.focusText} className='flex flex-col sm:flex-row justify-between text-base md:text-lg text-grey px-4 sm:px-0 '>

                    <div className="sm:basis-6/12 space-y-4 pr-0 sm:pr-3">
                        <div className="font-bold">
                            {el.focusText}
                        </div>
                        <div>
                            {el.details}
                        </div>
                    </div>

                    <div className="sm:basis-6/12 space-y-4 pl-0 sm:pl-3 pt-4 sm:pt-0">
                        <div className="font-bold">
                            {el.Random}
                        </div>
                        <div>
                            {el.RandomDetails}
                        </div>
                    </div>

                </div>
            ))}
        </Wrapper>
    )
}

export default About       