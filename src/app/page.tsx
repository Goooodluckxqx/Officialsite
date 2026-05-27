import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            NazzleNest<span className="text-blue-600">纳乐适</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#products" className="hover:text-gray-900 transition-colors">产品</a>
            <a href="#technology" className="hover:text-gray-900 transition-colors">科技</a>
            <a href="#reviews" className="hover:text-gray-900 transition-colors">评价</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">关于我们</a>
          </div>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            立即购买
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            舒适睡眠，<br />
            <span className="text-blue-600">从NazzleNest开始</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            融合创新科技与人体工学设计，为您打造极致舒适的睡眠体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              探索产品
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              明星产品
            </h2>
            <p className="text-xl text-gray-600">每一件产品，都经过精心设计与严格测试</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-blue-200">
                产品图
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                NazzleNest 舒适系列床垫
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                采用先进的温控技术，自动调节睡眠温度。记忆棉层完美贴合身体曲线，
                有效缓解压力点，让您整夜安睡无忧。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  智能温控技术
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  人体工学设计
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  环保材料制造
                </li>
              </ul>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                查看详情 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            创新科技
          </h2>
          <p className="text-xl text-gray-600 mb-16">我们的核心技术，让睡眠更智能</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "智能温控",
                description: "实时监测并调节睡眠温度，始终保持最佳舒适度",
                icon: "🌡️"
              },
              {
                title: "压力分散",
                description: "多点支撑系统，有效分散身体压力，减少翻身次数",
                icon: "💤"
              },
              {
                title: "透气排湿",
                description: "3D立体透气结构，快速排出湿气，保持干爽舒适",
                icon: "🌬️"
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              用户好评
            </h2>
            <p className="text-xl text-gray-600">真实用户的真实体验</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "张女士",
                rating: 5,
                text: "用了NazzleNest的床垫后，睡眠质量明显提升。以前经常半夜醒来，现在可以一觉到天亮了！",
                product: "舒适系列床垫"
              },
              {
                name: "李先生",
                rating: 5,
                text: "作为一个长期失眠的人，这款产品真的改变了我的生活。温控功能太棒了！",
                product: "智能温控枕"
              },
              {
                name: "王女士",
                rating: 5,
                text: "给爸妈买的，他们说这是近年来最满意的购物。舒适度满分，推荐给所有人！",
                product: "护脊床垫"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.product}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-900">
              平均评分 <span className="text-blue-600">4.9/5.0</span>
            </p>
            <p className="text-gray-600 mt-2">已有超过10,000位用户选择NazzleNest</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            准备好体验更好的睡眠了吗？
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            加入NazzleNest大家庭，让每一个夜晚都成为享受
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            立即选购
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">NazzleNest纳乐适</h3>
              <p className="text-gray-600 text-sm">
                致力于通过创新科技，为每个人提供最舒适的睡眠解决方案。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">床垫系列</a></li>
                <li><a href="#" className="hover:text-gray-900">枕头系列</a></li>
                <li><a href="#" className="hover:text-gray-900">床品套装</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">支持</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">常见问题</a></li>
                <li><a href="#" className="hover:text-gray-900">退换政策</a></li>
                <li><a href="#" className="hover:text-gray-900">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">关注我们</h4>
              <p className="text-sm text-gray-600 mb-4">订阅获取最新产品资讯和优惠</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="输入邮箱" 
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-blue-600"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                  订阅
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 NazzleNest纳乐适. 保留所有权利. | www.nazzlenest.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
