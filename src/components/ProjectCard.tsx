import { Figma, NextJs, React, TailWindCss, TypeScript } from "@/assets/icons/coding"
import { GitHub } from "@/assets/icons/socialmedia"
import Link from "next/link";

interface Props {
    title: string,
    brief: string,
    points: string[],
    remark?: string,
    gradient?: string,
    GithubRepo: string
}

const ProjectCard = ({ title, brief, points, remark, gradient, GithubRepo }: Props) => {

    return (
        <div className="transition duration-1000 hover:scale-110 hover:box-shadow-lg cursor-default">

            <div className={`flex px-3 py-2 flex-col ${gradient} shadow-md h-96 justify-evenly`}>

                <div className="flex font-bold text-2xl sm:text-2xl md:text-2xl 2xl:text-3xl justify-between">
                    {title} <div className="hover:animate-pulse"> <Link href={GithubRepo} ><GitHub /></Link></div>
                </div>

                <div className="text-lg md:text-base lg:text-lg text-grey-dark pt-2 ">
                    {brief}
                </div>
                <ul className="list-disc list-inside text-lg md:text-base lg:text-lg text-grey-dark underline pt-2">
                    {
                        points.map((el: string) => (
                            <li key='el'>{el}</li>
                        ))
                    }
                </ul>
                <div className="text-lg md:text-base lg:text-lg text-grey-dark  pt-2 ">
                    {remark}
                </div>
                <div className="pt-2 flex justify-center gap-5  sm:gap-8 md:gap-4">
                    <TypeScript /> <React /> <TailWindCss /> <NextJs /> <Figma />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;