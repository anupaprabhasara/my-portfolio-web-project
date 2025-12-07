import { Helmet } from "react-helmet";
import { PageLayout } from "../components/layout/PageLayout";
import { AnimatedSection } from "../components/AnimatedSection";

const experiences = [
  {
    company: "Ascent Business Solutions",
    position: "Software Engineer Intern",
    period: "Dec 2025 - Present",
    description: "No information available",
    achievements: [
      "No information available",
      "No information available",
      "No information available",
    ],
  },
  {
    company: "No information available",
    position: "Associate Software Engineer",
    period: "No information available",
    description: "No information available",
    achievements: [
      "No information available",
      "No information available",
      "No information available",
    ],
  },
];

export default function Experience() {
  return (
    <PageLayout>
      <Helmet>
        <title>Professional Experience - Software Engineering Intern</title>
        <meta
          name="description"
          content="Anupa Prabhasara's experience as a Software Engineer Intern, focusing on leveraging technical expertise in RPA and full-stack development to deliver practical, innovative systems."
        />
        <link rel="canonical" href="https://www.anupa.lk/experience" />
      </Helmet>

      <AnimatedSection>
        <h2 className="cursor-default text-4xl font-bold gradient-text pb-1">
          Experience
        </h2>
      </AnimatedSection>

      <div className="cursor-default mt-6 space-y-8">
        {experiences.map((exp, index) => (
          <AnimatedSection key={exp.company} delay={index * 0.2}>
            <div className="card-gradient rounded-lg shadow-lg p-6">
              <div className="md:flex md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {exp.description}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-600 dark:text-gray-400"
                  >
                    <span className="mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}
