"use client";

export default function Header() {
  return (
    <header className="w-full h-[72px] bg-white border-b border-[#E2E8F0] flex items-center justify-between px-[120px]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#23A1FC] rounded-lg flex items-center justify-center">
          <span className="text-white text-lg font-bold" style={{ fontFamily: 'DM Sans' }}>T</span>
        </div>
        <span className="text-[#0F172A] text-xl font-semibold" style={{ fontFamily: 'DM Sans' }}>TextIn</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <a href="#" className="text-[#475569] text-sm font-medium hover:text-[#0F172A] transition-colors">产品</a>
        <a href="#" className="text-[#475569] text-sm font-medium hover:text-[#0F172A] transition-colors">解决方案</a>
        <a href="#" className="text-[#475569] text-sm font-medium hover:text-[#0F172A] transition-colors">定价</a>
        <a href="#" className="text-[#475569] text-sm font-medium hover:text-[#0F172A] transition-colors">文档</a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-[#475569] text-sm font-medium hover:text-[#0F172A] transition-colors">登录</a>
        <button className="bg-[#23A1FC] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-[#1A8FE3] transition-colors">
          免费注册
        </button>
      </div>
    </header>
  );
}
