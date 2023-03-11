import AcheivmentsCard from '@/components/AcheivmentsCard'
import Heading2 from '@/components/Heading2'
import Wrapper from '@/components/Wrapper'
import { MyAcheivments } from '@/utlis/data/page-data'

const Acheivments = () => {
    return (
        <div>
            <Wrapper>
                <Heading2 text={'MY ACHEIVMENTS -'} />
                <div>
                    <div className='flex md:flex-row flex-col gap-y-8 sm:gap-x-8 lg:gap-x-16 px-4 sm:px-0 '>
                        {MyAcheivments.map((el) => (
                            <div key='el.title' className='basis-4/12' >
                                <AcheivmentsCard title={el.title} brief={el.brief} points={el.points} gradient={el.gradient} />
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div >
    )
}

export default Acheivments

