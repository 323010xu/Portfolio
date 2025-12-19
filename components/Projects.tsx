import React from 'react';
import Section from './Section';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: '智能数据大屏',
    description: '基于 D3.js 和 React 的实时数据可视化平台，服务于智慧城市管理中心。',
    tags: ['React', 'D3.js', 'WebSocket'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
  },
  {
    id: 2,
    title: '极简电商 App',
    description: '专注于移动端购物体验的 PWA 应用，拥有流畅的动画和极快的加载速度。',
    tags: ['Next.js', 'Tailwind', 'PWA'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
  },
  {
    id: 3,
    title: '企业协作 SaaS',
    description: '一套用于团队任务管理和文档协作的工具，支持多人实时编辑。',
    tags: ['Vue 3', 'Node.js', 'Socket.io'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-white">
      <div className="flex flex-col h-full justify-center">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">项目成果</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            这里展示了一些我近期主导或参与的核心项目。每一个项目都代表了我对技术细节的追求。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-900">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-900">
                    <Github size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed h-10 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;