"use client";

import ConsultationForm from "./components/ConsultationForm";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#000000", minHeight: "100vh", color: "#FFFFFF", fontFamily: "Arial, Helvetica, sans-serif" }}>

      {/* Header */}
      <header style={{ backgroundColor: "#000000", borderBottom: "1px solid #333333", padding: "0 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "36px", height: "36px", backgroundColor: "#E50914", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}>T</span>
            </div>
            <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "20px", letterSpacing: "-0.3px" }}>Techmate korea</span>
          </div>
          <nav style={{ display: "flex", gap: "32px" }}>
            <a href="#services" style={{ color: "#B3B3B3", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#B3B3B3")}>
              업무 소개
            </a>
            <a href="#contact" style={{ color: "#B3B3B3", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#B3B3B3")}>
              문의하기
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "120px 48px 100px", textAlign: "center", background: "linear-gradient(180deg, #141414 0%, #000000 100%)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", border: "1px solid #E50914", color: "#E50914", fontSize: "11px", fontWeight: 700, letterSpacing: "3px", padding: "6px 16px", borderRadius: "4px", marginBottom: "32px", textTransform: "uppercase" }}>
            Our Team
          </div>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 72px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "24px" }}>
            Management Division
          </h1>
          <p style={{ fontSize: "18px", color: "#B3B3B3", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
            인사, 총무, 회계를 통해 조직의 안정적인 운영을 지원합니다.<br />
            우리 본부가 하는 일을 소개합니다.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "80px 48px", backgroundColor: "#000000" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>주요 업무</h2>
            <p style={{ fontSize: "14px", color: "#B3B3B3" }}>우리 본부가 담당하는 핵심 영역입니다</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>

            {/* Card 1 – 인사 */}
            <div style={{ backgroundColor: "#141414", border: "1px solid #333333", borderRadius: "16px", padding: "40px 32px", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#E50914"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#333333"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "#E50914", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>인사</h3>
              <p style={{ fontSize: "14px", color: "#B3B3B3", lineHeight: 1.8 }}>
                채용·평가·교육 등 직원의 전 생애주기를 관리합니다. 조직 문화를 가꾸고 구성원이 역량을 발휘할 수 있는 환경을 조성합니다.
              </p>
            </div>

            {/* Card 2 – 총무 */}
            <div style={{ backgroundColor: "#141414", border: "1px solid #333333", borderRadius: "16px", padding: "40px 32px", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#E50914"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#333333"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "#E50914", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>총무</h3>
              <p style={{ fontSize: "14px", color: "#B3B3B3", lineHeight: 1.8 }}>
                사무 환경·시설·자산을 관리하고 각종 계약 및 대관 업무를 처리합니다. 임직원이 쾌적하게 근무할 수 있도록 지원합니다.
              </p>
            </div>

            {/* Card 3 – 회계 */}
            <div style={{ backgroundColor: "#141414", border: "1px solid #333333", borderRadius: "16px", padding: "40px 32px", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#E50914"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#333333"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "#E50914", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>회계</h3>
              <p style={{ fontSize: "14px", color: "#B3B3B3", lineHeight: 1.8 }}>
                예산 편성·집행·결산을 담당하며 재무 보고서를 작성합니다. 투명하고 정확한 회계 처리로 경영 의사결정을 뒷받침합니다.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact / Consultation */}
      <section id="contact" style={{ padding: "100px 48px", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>상담 신청</h2>
            <p style={{ fontSize: "16px", color: "#B3B3B3", lineHeight: 1.8 }}>
              업무 협조, 시스템 지원, 프로젝트 제안 등 궁금한 점을 남겨주세요.<br />
              빠른 시일 내에 답변 드리겠습니다.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #333333", padding: "24px 48px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", color: "#B3B3B3" }}>© 2026 Techmate korea 경영총괄본부. All rights reserved.</p>
      </footer>

    </main>
  );
}
