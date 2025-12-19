import React from 'react';
import Section from './Section';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: 1,
    role: '高级前端工程师',
    company: '科技创新有限公司',
    period: '2021 - 至今',
    description: '负责核心产品架构重构，领导5人前端团队，提升页面性能40%。主导 React + TypeScript 技术栈迁移。',
  },
  {
    id: 2,
    role: '中级 Web 开发',
    company: '未来网络工作室',
    period: '2019 - 2021',
    description: '参与多个电商平台的开发与维护，负责支付模块与用户中心的前端实现。优化移动端响应式体验。',
  },
  {
    id: 3,
    role: '初级设计师 & 开发者',
    company: '创意数字机构',
    period: '2017 - 2019',
    description: '负责企业官网的设计与切图，使用 Vue.js 开发交互式营销页面，协助后端进行 API 对接。',
  },
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-stone-50">
      <div className="flex flex-col h-full justify-center">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">个人经历</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
        </div>

        <div className="relative border-l border-gray-200 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 bg-white border-2 border-gray-800 rounded-full"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{exp.role}</h3>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-lg text-gray-600 mb-3 font-medium">{exp.company}</p>
              <p className="text-gray-500 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;