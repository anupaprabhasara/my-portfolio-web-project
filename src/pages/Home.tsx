import { Helmet } from "react-helmet";
import { Github, Linkedin, Mail } from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { AnimatedSection } from "../components/AnimatedSection";
import ProPic from "../assets/hero.jpg";

export default function Home() {
  return (
    <PageLayout>
      <Helmet>
        <title>Anupa Prabhasara - Full-Stack & RPA Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Anupa Prabhasara, a Software Engineer Intern specializing in full-stack development and Robotic Process Automation (RPA). View my technical projects."
        />
        <link rel="canonical" href="https://www.anupa.lk/" />
      </Helmet>

      <div className="text-center">
        <AnimatedSection>
          <div className="relative">
            <img
              src={ProPic}
              alt="Profile"
              className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-black/10 dark:ring-white/10 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-pink-500/20 animate-pulse" />
          </div>

          <h1 className="cursor-default mt-6 text-5xl font-bold gradient-text">
            Anupa Prabhasara
          </h1>
          <p className="cursor-default mt-2 text-xl text-gray-600 dark:text-gray-400">
            Software Engineer Intern
          </p>
          <p className="cursor-default mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Proficient in full-stack development and specializing in Robotic
            Process Automation. This portfolio demonstrates the technical
            ability to build and deploy comprehensive software solutions while
            implementing efficient, automated processes. Focused on leveraging
            technical expertise to enhance business efficiency and deliver
            practical, innovative systems.
          </p>

          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/anupaprabhasara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 backdrop-blur-sm hover:bg-gray-300 text-gray-500 hover:text-gray-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-400 dark:hover:text-white"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=anupaprabhasara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 backdrop-blur-sm hover:bg-gray-300 text-gray-500 hover:text-gray-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-400 dark:hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@anupa.lk"
              className="p-3 rounded-full bg-gray-200 backdrop-blur-sm hover:bg-gray-300 text-gray-500 hover:text-gray-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-400 dark:hover:text-white"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
