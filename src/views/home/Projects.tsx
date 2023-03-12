import Heading2 from '@/components/Heading2'
import ProjectCard from '@/components/ProjectCard'
import Wrapper from '@/components/Wrapper'
import { MyProjects } from '@/utlis/data/page-data'
import React from 'react'

const Projects = () => {
    return (
        <div>
            <Wrapper>
                <Heading2 text={'MY PROJECTS -'} />
                <div className='flex md:flex-row flex-col gap-y-8 sm:gap-x-8 lg:gap-x-16 px-4 sm:px-16 md:px-0 '>
                    {MyProjects.map((el) => (
                        <div key='el.title' className='basis-4/12' >
                            <ProjectCard title={el.title} brief={el.brief} points={el.points} remark={el.remark} gradient={el.gradient} GithubRepo={el.GithubRepo} />
                        </div>
                    ))}
                </div>

            </Wrapper>
        </div>
    )
}

export default Projects;
