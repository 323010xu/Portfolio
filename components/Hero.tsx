import React from 'react';
import Section from './Section';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <Section id="home" className="bg-white relative">
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl text-gray-500 font-medium tracking-wide">
            你好，我是
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
            张伟
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            专注于创造卓越用户体验的前端工程师 &amp; UI 设计师。
            <br />
            致力于用代码构建简洁、高效的数字产品。
          </p>
        </div>
        
        <div className="pt-12">
          <a
            href="#projects"
            className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded-full"
          >
            查看我的作品
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <ArrowDown size={32} />
      </div>
    </Section>
  );
};

export default Hero;