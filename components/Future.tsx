import React from 'react';
import Section from './Section';
import { Send } from 'lucide-react';

const Future: React.FC = () => {
  return (
    <Section id="future" className="bg-gray-100">
      <div className="flex flex-col h-full justify-center max-w-4xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">未来设想</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">下一步计划</h3>
            <p className="text-gray-600 leading-relaxed">
              在未来的 1-3 年内，我计划深入探索 <strong>生成式 AI 在前端交互中的应用</strong>。
              我相信，通过 AI 辅助，我们可以创造出更加智能、个性化的 Web 体验，打破传统 GUI 的限制。
            </p>
            <p className="text-gray-600 leading-relaxed">
              同时，我也致力于为开源社区做出更多贡献，分享我在高性能渲染和复杂状态管理方面的经验。
            </p>
            
            <div className="pt-4">
              <h4 className="font-semibold text-gray-900 mb-3">关注领域：</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>WebAssembly & WebGPU</li>
                <li>AI Agent 交互模式</li>
                <li>Serverless 架构优化</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">与我联系</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">留言</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all"
                  placeholder="期待与您的交流..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>发送消息</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Future;