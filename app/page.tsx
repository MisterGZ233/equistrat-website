"use client";

import { FormEvent, useState } from "react";

const tracks = [
  {
    id: "ai",
    label: "医疗AI大模型",
    eyebrow: "MEDICAL AI",
    description: "围绕医学影像、辅助诊断与行业大模型，用专业内容打通技术价值与产业认知。",
    people: "12+位核心达人",
    media: "36家重点媒体",
    format: "技术解读 · 企业专访",
  },
  {
    id: "device",
    label: "创新医疗器械",
    eyebrow: "MEDTECH",
    description: "从研发逻辑、临床价值到出海表达，为创新器械打造可信、可传播的专业叙事。",
    people: "10+位垂直达人",
    media: "42家重点媒体",
    format: "临床价值 · 出海传播",
  },
  {
    id: "digital",
    label: "数字疗法",
    eyebrow: "DIGITAL HEALTH",
    description: "连接医院、政策与用户教育场景，帮助数字健康产品建立清晰的品类心智。",
    people: "8+位专业达人",
    media: "28家重点媒体",
    format: "场景科普 · 行业专栏",
  },
  {
    id: "pharma",
    label: "医药商业化",
    eyebrow: "PHARMA",
    description: "面向上市后商业化与品牌建设，构建兼顾医学准确性与市场效率的内容体系。",
    people: "10+位行业达人",
    media: "45家重点媒体",
    format: "品牌科普 · 商业洞察",
  },
  {
    id: "capital",
    label: "医疗创投",
    eyebrow: "HEALTHCARE VC",
    description: "用产业研究语言对接资本市场，让技术、团队与增长故事被决策者高效理解。",
    people: "6+位创投达人",
    media: "29家财经媒体",
    format: "资本故事 · 路演策划",
  },
  {
    id: "policy",
    label: "政策与合规",
    eyebrow: "POLICY & COMPLIANCE",
    description: "把复杂的医疗监管转化为可执行的传播边界，让每一次发布都有据可循。",
    people: "5+位合规专家",
    media: "全链路审核",
    format: "政策解读 · 合规审校",
  },
];

const ecosystem = [
  ["院士专家", "两院院士 · 海外院士 · 三甲院长"],
  ["头部企业", "恒瑞医药 · 联影医疗 · 晶泰科技 · 华为云"],
  ["创投机构", "红杉 · 高瓴 · IDG · 君联 · 深创投"],
  ["国际政企", "20国使领馆 · 新加坡 · 爱尔兰 · 比利时"],
  ["会展产业", "中国会展经济研究会 · 国内头部会展集团"],
];

export default function Home() {
  const [activeTrack, setActiveTrack] = useState(tracks[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  async function copyEmail() {
    await navigator.clipboard.writeText("business@equistrat.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="策衡咨询首页">
          <span className="brand-mark" aria-hidden="true"><i /><b /><i /></span>
          <span><strong>策衡</strong><em>EquiStrat</em></span>
        </a>
        <button
          className="menu-button"
          aria-label="打开导航"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav-open" : ""} onClick={() => setMenuOpen(false)}>
          <a href="#about">关于策衡</a>
          <a href="#services">核心服务</a>
          <a href="#ecosystem">标杆资源</a>
          <a href="#compliance">合规保障</a>
          <a href="#contact" className="nav-cta">预约专家咨询</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker"><span>MEDICAL AI</span> INDUSTRY GROWTH PARTNER</p>
          <h1>为医疗AI产业<br />校准<span>增长</span>的尺度</h1>
          <p className="hero-intro">策衡 EquiStrat，以专业内容连接产业决策者，用合规体系守住增长边界。</p>
          <div className="hero-tags" aria-label="三大服务方向">
            <span>产业达人矩阵</span><span>品牌全案宣发</span><span>资本产业服务</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">获取定制增长方案 <span>↗</span></a>
            <a className="button button-ghost" href="#services">了解核心服务</a>
          </div>
        </div>
        <div className="hero-side" aria-label="策衡核心能力">
          <div className="balance-card">
            <span className="card-index">E / S 01</span>
            <div className="balance-visual" aria-hidden="true">
              <span className="beam" /><span className="pillar" />
              <span className="pan pan-left" /><span className="pan pan-right" />
            </div>
            <div className="balance-labels"><span>声量</span><span>合规</span></div>
            <p>Balanced strategies<br />for medical AI industry.</p>
          </div>
        </div>
        <div className="hero-metrics">
          <div><strong>30–50</strong><span>位医疗垂直达人</span></div>
          <div><strong>180<span>+</span></strong><span>国内外媒体渠道</span></div>
          <div><strong>20<span>+</span></strong><span>国政企资源网络</span></div>
          <div><strong>10W<span>+</span></strong><span>全网产业粉丝</span></div>
        </div>
      </section>

      <section className="section light-section" id="about">
        <div className="section-heading split-heading">
          <div><p className="section-code">01 / WHY EQUISTRAT</p><h2>医疗AI传播，<br />难的从来不只是流量</h2></div>
          <p>传统流量模型无法同时回答专业度、合规性与产业转化。策衡的价值，是让这三件事在同一条增长链路上发生。</p>
        </div>
        <div className="pain-grid">
          <article className="pain-card warning"><div className="pain-number">01</div><p className="pill">高风险</p><h3>合规风险高悬</h3><p>监管趋严，只顾流量的内容易触发封号与行政风险。</p><div className="solution"><b>策衡解法</b>专职合规团队拥有一票否决权</div></article>
          <article className="pain-card amber"><div className="pain-number">02</div><p className="pill">低效触达</p><h3>流量与专业脱节</h3><p>泛娱乐达人不懂医疗，专家又往往不擅长大众表达。</p><div className="solution"><b>策衡解法</b>30–50 位垂直达人精准触达决策人群</div></article>
          <article className="pain-card cyan"><div className="pain-number">03</div><p className="pill">无转化</p><h3>声量与业务断裂</h3><p>线上有数据，却难以对接院士、资本、政企与园区资源。</p><div className="solution"><b>策衡解法</b>线上沉淀线索，线下完成资源闭环</div></article>
        </div>
      </section>

      <section className="section dark-section" id="services">
        <div className="section-heading">
          <p className="section-code">02 / CORE SERVICES</p>
          <h2>三种能力，一条闭环</h2>
          <p>从专业内容生产，到全域声量放大，再到高价值产业资源对接。</p>
        </div>
        <div className="service-stack">
          <article className="service-card blue-card">
            <div className="service-top"><span>01</span><p>CONTENT MATRIX</p></div>
            <div className="service-body"><div><p className="service-kicker">专业内容 × 精准人群</p><h3>达人矩阵内容服务</h3><p>30–50 位医疗垂直达人，覆盖六大专业赛道，让每一次表达都能命中真正的产业决策者。</p></div><ul><li>企业专访短视频</li><li>行业深度内容</li><li>品牌科普商单</li><li>产业直播栏目</li></ul></div>
          </article>
          <article className="service-card amber-card">
            <div className="service-top"><span>02</span><p>BRAND AMPLIFICATION</p></div>
            <div className="service-body"><div><p className="service-kicker">原创内容 × 全域分发</p><h3>品牌公关全域宣发</h3><p>国内财经医疗媒体与海外渠道协同分发，从一篇内容建立可持续的品牌资产。</p></div><ul><li>80+ 国内媒体</li><li>100+ 海外媒体</li><li>品牌视觉物料</li><li>业绩情报长图</li></ul></div>
          </article>
          <article className="service-card teal-card">
            <div className="service-top"><span>03</span><p>INDUSTRY ADVISORY</p></div>
            <div className="service-body"><div><p className="service-kicker">内容声量 × 产业协同</p><h3>产业咨询 &amp; 企业AI定制</h3><p>将传播积累转化为真实产业机会，打通专家、资本、政企与企业 AI 能力。</p></div><ul><li>院士专家邀约</li><li>全球政企对接</li><li>行业 AI 知识库</li><li>品牌策划培训</li></ul></div>
          </article>
        </div>
      </section>

      <section className="section track-section">
        <div className="section-heading split-heading">
          <div><p className="section-code">03 / VERTICAL TRACKS</p><h2>六大赛道，<br />不只是一套话术</h2></div>
          <p>选择你所在的细分领域，查看策衡如何配置达人、媒体与内容表达。</p>
        </div>
        <div className="track-shell">
          <div className="track-tabs" role="tablist" aria-label="产业赛道">
            {tracks.map((track) => (
              <button key={track.id} className={activeTrack.id === track.id ? "active" : ""} onClick={() => setActiveTrack(track)} role="tab" aria-selected={activeTrack.id === track.id}>
                <span>{String(tracks.indexOf(track) + 1).padStart(2, "0")}</span>{track.label}
              </button>
            ))}
          </div>
          <div className="track-detail" role="tabpanel" key={activeTrack.id}>
            <p className="track-eyebrow">{activeTrack.eyebrow}</p>
            <h3>{activeTrack.label}</h3>
            <p className="track-description">{activeTrack.description}</p>
            <div className="track-stats"><div><small>PEOPLE</small><strong>{activeTrack.people}</strong></div><div><small>MEDIA</small><strong>{activeTrack.media}</strong></div><div><small>FORMAT</small><strong>{activeTrack.format}</strong></div></div>
          </div>
        </div>
      </section>

      <section className="section ecosystem-section" id="ecosystem">
        <div className="section-heading centered">
          <p className="section-code">04 / INDUSTRY ECOSYSTEM</p>
          <h2>让声量，找到真正的产业出口</h2>
          <p>线上内容沉淀线索，线下高端资源承接转化。</p>
        </div>
        <div className="ecosystem-orbit">
          <div className="eco-center"><span>策衡</span><strong>EquiStrat</strong><small>产业连接器</small></div>
          {ecosystem.map(([title, names], index) => <div className={`eco-node node-${index + 1}`} key={title}><b>{String(index + 1).padStart(2, "0")}</b><h3>{title}</h3><p>{names}</p></div>)}
        </div>
        <div className="brand-ticker" aria-label="产业资源代表">
          <div><span>恒瑞医药</span><span>联影医疗</span><span>晶泰科技</span><span>百度医疗</span><span>华为云</span><span>红杉</span><span>高瓴</span><span>IDG</span></div>
        </div>
      </section>

      <section className="section compliance-section" id="compliance">
        <div className="compliance-copy">
          <p className="section-code">05 / COMPLIANCE BY DESIGN</p>
          <h2>合规不是最后一道检查，<br />而是内容系统的底层设计。</h2>
          <p>策衡将医疗监管法规与商业推广规则前置到内容生产的每一步，专职合规团队对发布拥有一票否决权。</p>
          <div className="compliance-badge"><span>✓</span><div><strong>发布前统一审核</strong><small>专业表达、广告边界、平台规则三向校验</small></div></div>
        </div>
        <ol className="compliance-steps">
          <li><span>01</span><div><b>策略立项</b><p>明确传播目标与规则边界</p></div></li>
          <li><span>02</span><div><b>专业审校</b><p>医学事实与数据来源校验</p></div></li>
          <li><span>03</span><div><b>合规复核</b><p>监管、商业与平台规则确认</p></div></li>
          <li><span>04</span><div><b>统一发布</b><p>全渠道素材版本与口径管理</p></div></li>
        </ol>
      </section>

      <section className="section values-section">
        <div className="section-heading"><p className="section-code">06 / WHY CHOOSE US</p><h2>四个尺度，衡量每一次增长</h2></div>
        <div className="value-grid">
          <article><span>01</span><h3>合规零风险</h3><p>专职医疗合规岗位，对内容发布拥有一票否决权。</p></article>
          <article><span>02</span><h3>规模与品控兼得</h3><p>统一管控账号、内容与商单，兼顾流量效率与专业质量。</p></article>
          <article><span>03</span><h3>商务对接高效</h3><p>矩阵式组织架构，权责清晰，让商务决策更快向前。</p></article>
          <article><span>04</span><h3>声量转化闭环</h3><p>线上建立行业影响，线下对接政企、院士、资本资源。</p></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="section-code">START A CONVERSATION</p>
          <h2>把你的下一个<br /><span>产业增长命题</span>交给策衡</h2>
          <p>告诉我们你所在的赛道和当前挑战，我们将为你匹配合适的专家、达人与媒体资源。</p>
          <button className="email-copy" onClick={copyEmail}><small>BUSINESS EMAIL</small><strong>business@equistrat.com</strong><span>{copied ? "已复制" : "复制"}</span></button>
          <div className="contact-meta"><span>中国 · 杭州</span><span>工作日 09:00–18:00</span></div>
        </div>
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="success-message"><span>✓</span><h3>需求已收到</h3><p>感谢信任。策衡顾问将尽快与你联系，一起校准下一步增长方向。</p><button onClick={() => setSubmitted(false)}>再提交一条需求</button></div>
          ) : (
            <form onSubmit={submitLead}>
              <div className="form-head"><span>01</span><h3>预约专家咨询</h3></div>
              <label><span>您的姓名</span><input name="name" required placeholder="如：陈女士" /></label>
              <label><span>公司 / 机构</span><input name="company" required placeholder="请输入公司名称" /></label>
              <label><span>所在赛道</span><select name="sector" required defaultValue=""><option value="" disabled>请选择</option>{tracks.map((track) => <option key={track.id}>{track.label}</option>)}</select></label>
              <label><span>联系方式</span><input name="contact" required placeholder="手机 / 微信 / 邮箱" /></label>
              <label className="full-field"><span>想要解决的问题</span><textarea name="need" rows={3} placeholder="简要描述你当前的传播或产业资源需求" /></label>
              <button className="form-submit" type="submit">提交合作需求 <span>↗</span></button>
              <p className="form-note">提交即表示您同意我们仅将信息用于本次商务沟通。</p>
            </form>
          )}
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><b /><i /></span><span><strong>策衡</strong><em>EquiStrat</em></span></a>
        <p>从策略，到合规增长。<br />Balanced Strategies for Medical AI Industry.</p>
        <div><span>© 2026 策衡 EquiStrat</span><span>医疗AI垂直产业全域传播服务商</span></div>
      </footer>
    </main>
  );
}
