import Wrapper from '@/components/Wrapper'
import About from './About'
import Acheivments from './Acheivments'
import Contact from './Contact'
import { Hero1 } from './Hero1'
import Projects from './Projects'

export default function Portfolio() {
    return (
        <div>
            <Hero1 />
            <About />
            <Projects />
            <Acheivments />
            <Contact />
        </div>
    )
}
