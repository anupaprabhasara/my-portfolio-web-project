import { Helmet } from 'react-helmet';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';
import AboutImg from '../assets/about.png';

export default function About() {  
  return (
    <PageLayout>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Learn more about Anupa Prabhasara, a dedicated Software Engineering student passionate about web development and software solutions. Discover my journey, skills, and how I strive to turn ideas into functional and user-friendly digital experiences." />
        <link rel="canonical" href="https://www.anupa.lk/about" />
      </Helmet>

      <AnimatedSection>
        <h2 className="cursor-default text-4xl font-bold gradient-text pb-1">About Me</h2>
      </AnimatedSection>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection delay={0.2}>
          <div className="prose dark:prose-invert">
            <p className="cursor-default text-gray-600 dark:text-gray-400">
              Hi, I’m Anupa Prabhasara, a Software Engineering undergraduate with a passion for web development and software engineering. I love turning ideas into functional and user-friendly digital solutions.<br /><br />Through my studies and projects, I explore how technology can solve real-world challenges and improve everyday experiences. From designing websites to developing software, I enjoy every step of the process—learning, experimenting, and creating.<br /><br />This website is a space to share my journey, projects, and the knowledge I’ve gained along the way. Let’s connect and create something amazing together!
            </p>
            <h3 className="cursor-default text-xl font-semibold text-gray-900 dark:text-white mt-6">Education</h3>
            <ul className="cursor-default mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-400 space-y-2">
                <p className="font-bold">BSc (Hons) in Information Technology</p>
                <p>Specialization: Software Engineering</p>
                <p>Institution: Sri Lanka Institute of Information Technology (SLIIT)</p>
                <p>Time Period: December 2023 – Present</p>
                <p>Passes/Grade: Current CGPA 3.75</p>
              </li>
            </ul>
            <h3 className="cursor-default text-xl font-semibold text-gray-900 dark:text-white mt-6">Skills</h3>
            <ul className="cursor-default mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                Frontend: HTML, CSS, Vanilla JS, React JS, TypeScript, Tailwind CSS
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Backend: Node.js, Express.js, GraphQL, MongoDB, MySQL, PHP
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Languages: C, C++, Java, Kotlin
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Cloud: AWS, DigitalOcean, Ubuntu Server
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Tools: Git, GitHub, VS Code, Android Studio
              </li>
            </ul>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <img
            src={AboutImg}
            alt="About"
            className="rounded-lg shadow-lg"
          />
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}