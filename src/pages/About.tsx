import { Helmet } from "react-helmet";
import { PageLayout } from "../components/layout/PageLayout";
import { AnimatedSection } from "../components/AnimatedSection";
import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <PageLayout>
      <Helmet>
        <title>About Anupa Prabhasara - RPA & Full-Stack Development</title>
        <meta
          name="description"
          content="Learn more about Anupa Prabhasara's expertise in building comprehensive software solutions and implementing efficient, innovative Robotic Process Automation systems for business efficiency."
        />
        <link rel="canonical" href="https://www.anupa.lk/about" />
      </Helmet>

      <AnimatedSection>
        <h2 className="cursor-default text-4xl font-bold gradient-text pb-1">
          About Me
        </h2>
      </AnimatedSection>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection delay={0.2}>
          <div className="prose dark:prose-invert">
            <p className="cursor-default text-gray-600 dark:text-gray-400">
              Currently, I am a 3rd-year Undergraduate at the Sri Lanka
              Institute of Information Technology (SLIIT), maintaining a strong
              academic record with a CGPA of 3.56. I have been recognized for
              academic excellence by receiving the Dean's List Award two times.
              Complementing this foundation, I have successfully completed many
              industry-grade web projects, which has provided invaluable
              experience in translating theoretical knowledge into robust,
              real-world applications.
            </p>
            <h3 className="cursor-default text-xl font-semibold text-gray-900 dark:text-white mt-6">
              Skills
            </h3>
            <ul className="cursor-default mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                Core Languages: Java, TypeScript, Python
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Frontend: Next.js, React, HTML, CSS, Tailwind CSS, Zustand
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Backend: Spring Boot, RESTful APIs, Hibernate, Spring Security
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Cloud and Databases: AWS, Azure, GCP, MySQL, S3 Bucket
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Tools: Git, GitHub, Docker, Postman, JWT, Maven
              </li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <img src={AboutImg} alt="About" className="rounded-lg shadow-lg" />
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
