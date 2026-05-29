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
            <a href="#scenarios" className="hover:text-gray-900 transition-colors">场景</a>
            <a href="#safety" className="hover:text-gray-900 transition-colors">安全认证</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">常见问题</a>
          </div>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            立即购买
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                随形而安，<br />
                <span className="text-blue-600">零压自在</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                NazzleNest 侧睡抱枕，以微米粒子流动科技+分段稳托结构，<br className="hidden md:block" />
                为您打造「会流动的拥抱」零压体验
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  探索产品
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                  观看视频
                </button>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">GB18401</p>
                  <p className="text-sm text-gray-600">国家A类认证</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">FDA</p>
                  <p className="text-sm text-gray-600">食品级认证</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">PCM</p>
                  <p className="text-sm text-gray-600">恒温控温</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🛏️</div>
                  <p className="text-blue-300 text-lg font-medium">NazzleNest 侧睡抱枕</p>
                  <p className="text-blue-200 text-sm mt-2">产品实拍图位置</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              明星产品
            </h2>
            <p className="text-xl text-gray-600">动态支撑 · 全域适配 · 母婴安全 · 全家共享</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                NazzleNest 侧睡抱枕
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                以微米粒子流动科技为核心，实现零压贴合、稳托不塌、可调软硬。
                分段式隔断结构锁定粒子于颈、腰、腹、腿四大支撑带，解决侧睡酸痛、
                孕期不适、支撑不足、易塌陷等痛点，覆盖睡眠、孕期、居家全场景。
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">微米粒子流动系统</h4>
                    <p className="text-gray-600">0.5mm食品级EPS粒子，秒级流动填充身体空隙，均匀分散压力</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">分段式隔断稳托结构</h4>
                    <p className="text-gray-600">锁定粒子于四大支撑带，不侧堆、不塌陷，整夜饱满回弹</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">可调长度 + 可调硬度</h4>
                    <p className="text-gray-600">三种长度可选，侧面调节带一拉调整软硬度，一枕全家适用</p>
                  </div>
                </div>
              </div>

              {/* 规格参数 */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-gray-900 mb-4">产品规格</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">长度规格</span>
                    <p className="font-semibold text-gray-900">105cm / 120cm / 140cm</p>
                  </div>
                  <div>
                    <span className="text-gray-500">填充材质</span>
                    <p className="font-semibold text-gray-900">食品级EPS粒子（0.5mm）</p>
                  </div>
                  <div>
                    <span className="text-gray-500">面料</span>
                    <p className="font-semibold text-gray-900">母婴A类砂洗棉+PCM控温</p>
                  </div>
                  <div>
                    <span className="text-gray-500">安全标准</span>
                    <p className="font-semibold text-gray-900">GB18401 A类 + FDA</p>
                  </div>
                </div>
              </div>

              <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                查看详情 →
              </button>
            </div>
            <div className="order-1 md:order-2 relative aspect-square bg-gradient-to-br from-blue-50 to-gray-100 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4">🛌</div>
                  <p className="text-gray-400 text-lg">产品展示图</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              核心科技
            </h2>
            <p className="text-xl text-gray-600">五大科技，重新定义抱枕体验</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💧",
                title: "微米粒子流动系统",
                description: "0.5mm食品级EPS粒子，FDA认证，与婴儿奶瓶同级材质。秒级流动自动填充身体空隙，均匀分散颈/腰/腹/腿压力，告别僵硬、硌压、压迫神经。",
                features: ["FDA 21CFR177.1640认证", "无毒无味、安全贴肤", "「会流动的拥抱」零压体验"]
              },
              {
                icon: "🏗️",
                title: "分段式隔断稳托结构",
                description: "内胆「分段式隔断」锁定粒子于颈、腰、腹、腿四大支撑带，不侧堆、不塌陷。侧睡/仰卧/半躺均稳定承托，解决普通抱枕支撑差、易变形通病。",
                features: ["四大支撑带设计", "整夜饱满回弹", "稳托不塌"]
              },
              {
                icon: "🌡️",
                title: "NASA同款PCM恒温控温",
                description: "PCM控温絮片自动吸收多余热量，维持恒温微气候，柔软透气、久抱不闷汗。触感接近婴儿打底衫面料，四季舒适，告别闷热黏腻。",
                features: ["恒温微气候", "柔软透气", "四季舒适"]
              },
              {
                icon: "⚙️",
                title: "可调长度 + 可调硬度",
                description: "三种长度：105cm标准 / 120cm进阶 / 140cm尊享。侧面「调节带」一拉调整饱满度与软硬度，高个子强支撑、娇小者更柔软，一枕全家适用。",
                features: ["三种长度可选", "侧面调节带", "一枕全家适用"]
              },
              {
                icon: "👶",
                title: "母婴级安全认证",
                description: "通过GB18401-2010国家A类（婴幼儿用品最高标准），孕妈、宝宝可直接贴肤裸睡，无需枕套隔离。填充粒子经FDA安全检测，苯乙烯单体残余未检出。",
                features: ["国家A类标准", "可直接贴肤裸睡", "苯乙烯残余未检出"]
              },
              {
                icon: "♻️",
                title: "人体工学设计",
                description: "团队曾参与打造Ubras、内外、亚朵星球等品牌，将成熟品控与人体工学融入细节。不追求标新立异，专注做好一件可靠的承托好物。",
                features: ["成熟品控", "人体工学", "专注可靠"]
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-6">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section id="scenarios" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              适用场景
            </h2>
            <p className="text-xl text-gray-600">从睡眠到居家，全方位舒适体验</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "😴",
                title: "侧睡星人·云端睡窝",
                description: "填充肩、腰、膝盖空隙，承托肩颈与关节，缓解手臂麻木、肩颈酸痛，实现深度睡眠，醒后不累。",
                features: ["缓解肩颈酸痛", "改善手臂麻木", "深度睡眠"]
              },
              {
                icon: "🤰",
                title: "孕期妈妈·托腹天使",
                description: "垫于腹部下方与双腿之间，温柔托腹，减轻腰背坠感，缓解翻身难、睡眠差，守护妈妈与宝宝。",
                features: ["温柔托腹", "减轻腰背压力", "守护母婴"]
              },
              {
                icon: "🛋️",
                title: "居家全能·舒适搭子",
                description: "沙发、地毯、办公椅皆可用，可折叠作腰靠、垫高作腿凳、俯卧作睡枕，解决「怎么躺都不对」。",
                features: ["多元使用场景", "可折叠设计", "解决姿势困扰"]
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "全家共享·一枕多用",
                description: "成人、青少年、老人均可调节适配，高空间利用率、高性价比，一次投入全家舒适。",
                features: ["全家适用", "高性价比", "空间利用率高"]
              }
            ].map((scenario, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors">
                <div className="text-6xl mb-6 text-center">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{scenario.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{scenario.description}</p>
                <ul className="space-y-2">
                  {scenario.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Certification */}
      <section id="safety" className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              安全认证
            </h2>
            <p className="text-xl text-gray-600">母婴级安全标准，放心贴肤使用</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                badge: "A类",
                title: "GB18401-2010 国家A类",
                description: "中国婴幼儿用品最高安全标准，孕妈、宝宝可直接贴肤裸睡，无需枕套隔离。",
                details: ["婴幼儿用品最高标准", "可直接贴肤使用", "无毒无味"]
              },
              {
                badge: "FDA",
                title: "FDA 21CFR177.1640",
                description: "美国食品药品监督管理局认证，食品级EPS粒子与婴儿奶瓶同级材质，安全贴肤。",
                details: ["食品级材质", "苯乙烯单体残余未检出", "与婴儿奶瓶同级"]
              },
              {
                badge: "PCM",
                title: "NASA同款PCM恒温",
                description: "相变材料恒温控温技术，自动吸收/释放热量，维持舒适微气候，久抱不闷汗。",
                details: ["恒温控温", "透气不闷热", "四季舒适"]
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {cert.badge}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{cert.description}</p>
                <ul className="space-y-2 text-left">
                  {cert.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 清洗保养说明 */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">清洗与保养说明</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  可拆洗枕套（推荐）
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 水温≤30℃，中性洗涤剂，轻柔模式</li>
                  <li>• 不可漂白、可低温烘干、可熨烫</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  枕芯/内胆（不可水洗）
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 严禁水洗、浸泡、烘干</li>
                  <li>• 表面灰尘：轻拍/吸尘器低档位清洁</li>
                  <li>• 局部污渍：微湿软布+中性清洁剂轻擦</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-yellow-50 rounded-xl">
              <p className="text-sm text-yellow-800 font-medium">⚠️ 禁忌清单：不可机洗/水洗枕芯 · 不可尖锐物划伤 · 避免粒子泄漏</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              常见问题
            </h2>
            <p className="text-xl text-gray-600">您关心的问题，这里都有答案</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "粒子会不会漏出来？",
                a: "采用高密面料+精密车缝+分段隔断结构，正常使用不漏粒；避免尖锐物划伤即可。"
              },
              {
                q: "孕妇和宝宝真能直接贴肤吗？",
                a: "可以。通过国家A类+FDA食品级双重认证，无毒无味，孕妈与婴幼儿可安心裸睡。"
              },
              {
                q: "调节带怎么用？",
                a: "拉动侧面调节带收紧→更饱满、支撑更强；放松→更柔软、贴合度更高，按需微调。"
              },
              {
                q: "能用多久？会越睡越瘪吗？",
                a: "正常使用2–3年保持良好支撑；分段结构防止粒子堆积，不易塌陷、不越睡越瘪。"
              },
              {
                q: "夏天会热吗？",
                a: "搭载PCM恒温控温，自动散热控温，保持舒适区间，不闷汗、不黏身。"
              },
              {
                q: "有哪些尺寸可选？",
                a: "三种长度：105cm标准版（适合大多数人）、120cm进阶版（更充裕）、140cm尊享版（全家共享）。"
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Q：{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">A：{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            准备好体验<br />「会流动的拥抱」了吗？
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            从日间小憩到深夜安睡，无论姿势、无论场景，<br className="hidden md:block" />
            都能给你「随形而安、零压自在」的高品质休憩
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              立即选购
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              查看所有规格
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>国家A类认证</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>FDA食品级</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>PCM恒温</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                NazzleNest<span className="text-blue-600">纳乐适</span>
              </h3>
              <p className="text-gray-600 text-sm">
                秉持「舒适而居，自在而息」的理念，打破休憩场景与睡姿束缚，提供随形而安、温柔承托的睡眠与居家体验。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#products" className="hover:text-gray-900">侧睡抱枕 105cm</a></li>
                <li><a href="#products" className="hover:text-gray-900">侧睡抱枕 120cm</a></li>
                <li><a href="#products" className="hover:text-gray-900">侧睡抱枕 140cm</a></li>
                <li><a href="#technology" className="hover:text-gray-900">核心技术</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">支持</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#faq" className="hover:text-gray-900">常见问题</a></li>
                <li><a href="#safety" className="hover:text-gray-900">安全认证</a></li>
                <li><a href="#" className="hover:text-gray-900">清洗保养</a></li>
                <li><a href="#" className="hover:text-gray-900">退换政策</a></li>
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
            <p className="mt-2 text-xs">GB18401-2010 A类 · FDA 21CFR177.1640 · PCM恒温控温技术</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
