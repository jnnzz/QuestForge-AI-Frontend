import { Code, Database, Smartphone, Shield, Cloud, Cpu } from 'lucide-react';

export const fields = [
  {
    id: 'web-dev',
    name: 'Web Development',
    icon: Code,
    description: 'Frontend, Backend, and Full-Stack development',
    color: 'from-cyan-500 to-blue-500',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases'],
    duration: '6-8 months',
  },
  {
    id: 'data-science',
    name: 'Data Science & AI',
    icon: Database,
    description: 'Machine Learning, Data Analysis, and AI',
    color: 'from-purple-500 to-pink-500',
    topics: ['Python', 'Statistics', 'ML Algorithms', 'Deep Learning', 'Data Viz'],
    duration: '8-10 months',
  },
  {
    id: 'mobile-dev',
    name: 'Mobile Development',
    icon: Smartphone,
    description: 'iOS and Android app development',
    color: 'from-green-500 to-emerald-500',
    topics: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'App Design'],
    duration: '5-7 months',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Network security, ethical hacking, and defense',
    color: 'from-red-500 to-orange-500',
    topics: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Penetration Testing'],
    duration: '7-9 months',
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Cloud infrastructure and automation',
    color: 'from-blue-500 to-indigo-500',
    topics: ['AWS/Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'],
    duration: '6-8 months',
  },
  {
    id: 'game-dev',
    name: 'Game Development',
    icon: Cpu,
    description: 'Create immersive gaming experiences',
    color: 'from-yellow-500 to-red-500',
    topics: ['Unity', 'Unreal Engine', 'C#', 'Game Design', '3D Graphics'],
    duration: '8-12 months',
  },
];

export const getFieldById = (fieldId) => {
  return fields.find(f => f.id === fieldId);
};
