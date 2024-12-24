import { useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';

const experiences = [
  {
    company: 'Will be updated soon',
    position: 'Undergraduate Trainee Software Engineer',
    period: '2025 - 2026',
    description: 'Will be updated soon',
    achievements: [
      'Will be updated soon',
      'Will be updated soon',
      'Will be updated soon',
    ],
  },
  {
    company: 'Will be updated soon',
    position: 'Associate Software Engineer',
    period: '2026 - 2027',
    description: 'Will be updated soon',
    achievements: [
      'Will be updated soon',
      'Will be updated soon',
      'Will be updated soon',
    ],
  },
];

export default function Experience() {
  useEffect(() => {
    document.title = "Experience";
  }, []);
  return (
    <PageLayout>
      <AnimatedSection>
        <h2 className="text-4xl font-bold gradient-text pb-1">Experience</h2>
      </AnimatedSection>
      
      <div className="mt-6 space-y-8">
        {experiences.map((exp, index) => (
          <AnimatedSection key={exp.company} delay={index * 0.2}>
            <div className="card-gradient rounded-lg shadow-lg p-6 border border-white/10">
              <div className="flex justify-between items-start">
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