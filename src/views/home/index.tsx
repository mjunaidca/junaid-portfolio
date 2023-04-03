import About from "./About";
import Acheivments from "./Acheivments";
import Contact from "./Contact";
import { Hero1 } from "./Hero1";
import Projects from "./Projects";

export default function Portfolio() {
  return (
    <div>
      <Hero1 />
      {/* @ts-expect-error Async Server Component */}
      <About />
      {/* @ts-expect-error Async Server Component */}
      <Projects />
      {/* @ts-expect-error Async Server Component */}
      <Acheivments />
      <Contact />
    </div>
  );
}
