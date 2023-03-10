import Wrapper from "@/components/Wrapper"
import { HeroData } from "@/utlis/data/page-data"
import PrimarayAvatar from "@/assets/images/avatar1.png"
import Image from "next/image"



export const Hero1 = () => {
    return (
        <Wrapper>
            <div className="flex justify-between px-24">
                {HeroData.map((el) => (
                    <div key='el' className="flex flex-col justify-between basis-1/3">
                        <div className="pt-44 text=[18px] font-semibold">
                            {el.call}
                        </div>
                        <div className="text-[64px] font-semibold pt-1">
                            {el.head}
                        </div>
                        <div className="pt-4 text=[18px]">
                            {el.details}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <div className="mx-auto absolute top-0">
                    <Image src={PrimarayAvatar} alt="Hero Image" width={400} height={400} />
                </div>
            </div>
        </Wrapper>
    )
}