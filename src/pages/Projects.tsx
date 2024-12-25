import { useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';
import BloodDonation from '../assets/blood-donation.png';
import GPACalculator from '../assets/gpa-calculator.png';
import HTMLPortfolio from '../assets/html-portfolio.png';
import NewsBlog from '../assets/news-blog.png';

const projects = [
  {
    title: 'Blood Donation Website',
    description: 'A full-stack blood donation solution built with PHP and MySQL',
    image: BloodDonation,
    technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    github: 'https://github.com/anupaprabhasara/SLIIT-IWT-Project-2024',
    live: 'https://iwtproject.anupa.lk',
  },
  {
    title: 'SLIIT GPA Calculator',
    description: 'Developed a GPA calculator web application for SLIIT students',
    image: GPACalculator,
    technologies: ['HTML', 'React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/anupaprabhasara/SLIIT-GPA-Calculator',
    live: 'https://sliitcalc.anupa.lk',
  },
  {
    title: 'Simple Portfolio Website',
    description: 'A front-end portfolio website with modern looking user interface',
    image: HTMLPortfolio,
    technologies: ['HTML', 'CSS', 'JS', 'Sitemap', 'Forms'],
    github: 'https://github.com/anupaprabhasara/Simple-Personal-Portfolio',
    live: 'https://www.anupa.lk',
  },
  {
    title: 'News and Blogging Platform',
    description: 'Created a customized news and blogging website with Blogger',
    image: NewsBlog,
    technologies: ['HTML', 'CSS', 'JS', 'XML', 'Blogger'],
    github: 'https://github.com/anupaprabhasara/Responsive-Blogger-Theme',
    live: 'https://blogs.anupa.lk',
  },
];

export default function Projects() {
  useEffect(() => {
    document.title = "Projects";
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = "https://www.anupa.lk/projects";
    document.head.appendChild(canonical);
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);
  return (
    <PageLayout>
      <AnimatedSection>
        <h2 className="text-4xl font-bold gradient-text pb-1">Projects</h2>
      </AnimatedSection>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 0.2}>
            <div className="card-gradient rounded-lg shadow-lg overflow-hidden border border-white/10">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}