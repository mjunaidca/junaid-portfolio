import Wrapper from "@/components/Wrapper"
import { HeroData } from "@/utlis/data/page-data"
import PrimarayAvatar from "@/assets/images/avatar1.png"
import Image from "next/image"
import HeroDetails from "@/components/Hero"



export const Hero1 = () => {
    return (
        <Wrapper>
            <div className="flex ">
                <div className="basis-6/12 sm:basis-4/12">
                    <HeroDetails call={HeroData[0].call} head={HeroData[0].head} details={HeroData[0].details} />
                </div>
                <div className="basis-6/12 sm:basis-4/12 flex justify-center px-3 py-8">
                    <Image src={PrimarayAvatar} alt="Hero Image" />
                </div>
                <div className="hidden sm:block sm:basis-4/12">
                    <HeroDetails call={HeroData[1].call} head={HeroData[1].head} details={HeroData[1].details} />
                </div>
            </div>
        </Wrapper >
    )
}