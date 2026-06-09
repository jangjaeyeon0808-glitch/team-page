"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "오류가 발생했습니다.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", department: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "오류가 발생했습니다.");
    }
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "#1a1a1a",
    border: "1px solid #333333",
    borderRadius: "8px",
    padding: "14px 16px",
    color: "#FFFFFF",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#B3B3B3",
    marginBottom: "8px",
    letterSpacing: "0.3px",
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "48px 0" }}>
        <div style={{ width: "64px", height: "64px", backgroundColor: "#E50914", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
          상담 신청이 완료됐습니다
        </h3>
        <p style={{ color: "#B3B3B3", fontSize: "15px", marginBottom: "32px" }}>
          빠른 시일 내에 답변 드리겠습니다.
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{ backgroundColor: "transparent", border: "1px solid #E50914", color: "#E50914", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}
        >
          다시 신청하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* 이름 + 이메일 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <label style={labelStyle}>이름 <span style={{ color: "#E50914" }}>*</span></label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            required
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = "#E50914")}
            onBlur={e => (e.currentTarget.style.borderColor = "#333333")}
          />
        </div>
        <div>
          <label style={labelStyle}>이메일 <span style={{ color: "#E50914" }}>*</span></label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@company.com"
            required
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = "#E50914")}
            onBlur={e => (e.currentTarget.style.borderColor = "#333333")}
          />
        </div>
      </div>

      {/* 연락처 + 부서 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <label style={labelStyle}>연락처</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="010-0000-0000"
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = "#E50914")}
            onBlur={e => (e.currentTarget.style.borderColor = "#333333")}
          />
        </div>
        <div>
          <label style={labelStyle}>문의 부서</label>
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={e => (e.currentTarget.style.borderColor = "#E50914")}
            onBlur={e => (e.currentTarget.style.borderColor = "#333333")}
          >
            <option value="">부서 선택</option>
            <option value="인사">인사</option>
            <option value="총무">총무</option>
            <option value="회계">회계</option>
          </select>
        </div>
      </div>

      {/* 문의 내용 */}
      <div>
        <label style={labelStyle}>문의 내용 <span style={{ color: "#E50914" }}>*</span></label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="문의하실 내용을 자세히 작성해주세요."
          required
          rows={5}
          style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
          onFocus={e => (e.currentTarget.style.borderColor = "#E50914")}
          onBlur={e => (e.currentTarget.style.borderColor = "#333333")}
        />
      </div>

      {/* 에러 메시지 */}
      {status === "error" && (
        <p style={{ color: "#E50914", fontSize: "14px", margin: 0 }}>{errorMsg}</p>
      )}

      {/* 제출 버튼 */}
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          backgroundColor: status === "loading" ? "#8B0000" : "#E50914",
          color: "#FFFFFF",
          fontWeight: 700,
          fontSize: "16px",
          padding: "16px",
          borderRadius: "8px",
          border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "background-color 0.2s",
          minHeight: "56px",
        }}
        onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.backgroundColor = "#C11119"; }}
        onMouseLeave={e => { if (status !== "loading") e.currentTarget.style.backgroundColor = "#E50914"; }}
      >
        {status === "loading" ? "전송 중..." : "상담 신청하기"}
      </button>
    </form>
  );
}
