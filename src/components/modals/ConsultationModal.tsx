import React, { useState } from 'react';
import { ConsultationFormData } from '../../types';
import { trackQualifiedLeadCapture } from '../../utils/adTracking';
import { trackMicrosoftLeadConversion } from '../../utils/tracking';
import { useLanguage } from '../../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    companyName: '',
    industry: 'Fintech & B2B Services',
    phone: '',
    preferredDate: '',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [bookingRef, setBookingRef] = useState<string | null>(null);
  const [emailStatus, setEmailStatus] = useState<{ emailSent?: boolean; message?: string; mailtoLink?: string }>({});
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.companyName) {
      setError(
        language === 'zh'
          ? '请填写必填项（姓名、工作邮箱、公司名称）。'
          : language === 'ja'
          ? '必須項目（氏名、勤務先メール、会社名）をご入力ください。'
          : 'Please fill in required fields.'
      );
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/lead-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to submit consultation request.');
      }

      const data = await res.json();
      setBookingRef(data.bookingReference);
      setEmailStatus({
        emailSent: data.emailSent,
        message: data.emailDeliveryMessage,
        mailtoLink: data.mailtoLink,
      });

      // Fire unified lead conversion tracking (Google Ads + LinkedIn Ads)
      trackQualifiedLeadCapture();
      trackMicrosoftLeadConversion('consultation_modal');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Error scheduling consultation.');
    } finally {
      setLoading(false);
    }
  };

  const directMailto = emailStatus.mailtoLink || `mailto:enquiry@sghollyglobe.com?subject=${encodeURIComponent(`Consultation Inquiry [Ref: ${bookingRef || ''}] - ${formData.companyName}`)}&body=${encodeURIComponent(`Dear John,\n\nI submitted a consultation request on the HollyGlobe website.\n\nDetails:\nName: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.companyName}\nPhone: ${formData.phone || 'N/A'}\nNotes: ${formData.notes || 'None'}\n\nReference: ${bookingRef}`)}`;

  const handleCopyDetails = () => {
    const textToCopy = `To: enquiry@sghollyglobe.com\nSubject: Consultation Inquiry [Ref: ${bookingRef}] - ${formData.companyName}\n\nDear John,\n\nI submitted a consultation request on the HollyGlobe website.\n\nName: ${formData.fullName}\nWork Email: ${formData.email}\nCompany: ${formData.companyName}\nPhone: ${formData.phone || 'N/A'}\nPreferred Date: ${formData.preferredDate || 'N/A'}\nNotes: ${formData.notes || 'None'}\nReference: ${bookingRef}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-[#c2c6d7] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#727685] hover:text-[#0b1c30] p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/hollyglobe_logo.svg"
              alt="HollyGlobe Logo"
              className="w-7 h-7 object-contain"
            />
            <div className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#0056c5] uppercase bg-[#eff4ff] px-2.5 py-1 rounded border border-[#d9e2ff]">
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              <span>{language === 'zh' ? '新加坡团队顾问咨询' : language === 'ja' ? 'シンガポール専門アドバイザリー' : 'SINGAPORE OFFICE ADVISORY'}</span>
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-[#0b1c30]">
            {language === 'zh' ? '预约新加坡线上咨询' : language === 'ja' ? '個別オンライン相談のご予約' : language === 'ms' ? 'Minta Konsultasi' : language === 'vi' ? 'Yêu cầu tư vấn' : 'Request Consultation'}
          </h2>
          <p className="text-xs text-[#424654] mt-1">
            {language === 'zh' ? '填写下方信息预约顾问会议，或直接发送邮件至 ' : language === 'ja' ? 'フォームよりご予約いただくか、直接メールデスクへお問い合わせください: ' : 'Book a consultation or email our customer desk directly at '}
            <a href="mailto:enquiry@sghollyglobe.com" className="text-[#0056c5] font-semibold underline hover:text-[#166ef1]">
              enquiry@sghollyglobe.com
            </a>
          </p>
        </div>

        {!bookingRef ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                {language === 'zh' ? '您的姓名' : language === 'ja' ? 'お名前' : 'Full Name'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                placeholder={language === 'zh' ? '例如：林经理 / Sarah Lim' : language === 'ja' ? '例：山田 太郎 / Sarah Lim' : 'e.g. Tan Ah Kow / Sarah Lim'}
                className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  {language === 'zh' ? '工作邮箱' : language === 'ja' ? '会社用メールアドレス' : 'Work Email'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  {language === 'zh' ? '电话 / 手机' : language === 'ja' ? '電話番号 / WeChat' : 'Phone / Mobile'}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+65 9123 4567"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  {language === 'zh' ? '公司名称' : language === 'ja' ? '会社名 / 組織名' : 'Company Name'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Company Pte Ltd"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  {language === 'zh' ? '期望咨询日期' : language === 'ja' ? 'ご希望日時' : 'Preferred Date'}
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                {language === 'zh' ? '出海拓展目标 / 业务背景' : language === 'ja' ? 'ご相談内容 / 中国進出の目標' : 'Market Expansion Goal / Notes'}
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder={language === 'zh' ? '请简述您的产品业务和出海目标...' : language === 'ja' ? '貴社の製品・サービスや、中国市場での課題を簡単にご記入ください...' : 'Briefly describe your China market entry objectives...'}
                className="w-full px-3.5 py-2 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="primary-btn w-full py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>{language === 'zh' ? '正在提交预约...' : language === 'ja' ? '送信中...' : 'Scheduling Request...'}</span>
                ) : (
                  <>
                    <span>{language === 'zh' ? '确认提交预约申请' : language === 'ja' ? '個別相談を申し込む' : language === 'ms' ? 'Sahkan Permintaan' : language === 'vi' ? 'Xác nhận yêu cầu' : 'Confirm Consultation Request'}</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6 pt-2 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#0b1c30]">
                {language === 'zh' ? '咨询预约申请已成功提交！' : language === 'ja' ? 'ご相談予約の受付が完了しました！' : 'Consultation Request Confirmed!'}
              </h3>
              <p className="text-xs text-[#424654] max-w-sm mx-auto">
                {language === 'zh' ? '已生成专属咨询编号。我们驻新加坡企业顾问（John）将尽快通过邮件或电话与您联络。' : language === 'ja' ? 'お問い合わせ番号が発行されました。シンガポールの担当コンサルタント（John）より折り返しご連絡いたします。' : 'Your inquiry reference is generated. Our Singapore Enterprise Consultant (John) will contact you shortly.'}
              </p>
            </div>

            {/* Email Dispatch Status Banner */}
            {emailStatus.emailSent ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg font-medium flex items-center gap-2 text-left">
                <span className="material-symbols-outlined text-base text-emerald-600 shrink-0">mark_email_read</span>
                <span>{emailStatus.message || (language === 'zh' ? '已通过系统发送确认邮件。' : language === 'ja' ? 'サーバーより確認メールを送信しました。' : 'Automated confirmation email dispatched via server.')}</span>
              </div>
            ) : (
              <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded-lg text-left space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-800">
                  <span className="material-symbols-outlined text-base text-amber-600">info</span>
                  <span>{language === 'zh' ? '直达顾问邮箱提示' : language === 'ja' ? '直通メールのご案内' : 'Direct Delivery Notice'}</span>
                </div>
                <p className="text-[11px] text-amber-900/80 leading-relaxed">
                  {language === 'zh'
                    ? '为确保咨询信息即刻送达，您也可以点击下方按钮通过邮件客户端直接发送，或将内容发送至 enquiry@sghollyglobe.com。'
                    : language === 'ja'
                    ? '確実な迅速対応のため、下記ボタンよりメーラーを起動して送信いただくか、enquiry@sghollyglobe.com 宛に直接ご連絡いただけます。'
                    : 'To ensure immediate delivery to our team, please click below to send via your local email client or copy the inquiry details to send manually to enquiry@sghollyglobe.com.'}
                </p>
              </div>
            )}

            <div className="p-4 bg-[#eff4ff] border border-[#d9e2ff] rounded-xl text-left space-y-2 text-xs font-mono-code">
              <div className="flex justify-between border-b border-[#d9e2ff] pb-2">
                <span className="text-[#727685]">{language === 'zh' ? '咨询编号' : language === 'ja' ? '予約番号' : 'Reference ID'}:</span>
                <span className="font-bold text-[#0056c5]">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#d9e2ff] pb-2">
                <span className="text-[#727685]">{language === 'zh' ? '服务邮箱' : language === 'ja' ? '窓口メール' : 'Support Desk'}:</span>
                <span className="font-bold text-[#0b1c30]">enquiry@sghollyglobe.com</span>
              </div>
              <div className="flex justify-between border-b border-[#d9e2ff] pb-2">
                <span className="text-[#727685]">{language === 'zh' ? '对接顾问' : language === 'ja' ? '担当者' : 'Contact Person'}:</span>
                <span className="font-bold text-[#0b1c30]">John</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#727685]">{language === 'zh' ? '办公地点' : language === 'ja' ? '所在地' : 'Office'}:</span>
                <span className="font-bold text-[#0b1c30]">Ocean Financial Centre, Singapore</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={directMailto}
                className="primary-btn flex-1 py-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>{language === 'zh' ? '通过邮件客户端发送' : language === 'ja' ? 'メールソフトで送信' : 'Send Email via Client'}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyDetails}
                className="secondary-btn py-3 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                <span>{copied ? (language === 'zh' ? '已复制！' : language === 'ja' ? 'コピーしました！' : 'Copied!') : (language === 'zh' ? '复制草稿' : language === 'ja' ? '文面をコピー' : 'Copy Draft')}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-[#0b1c30] rounded-lg font-semibold text-xs transition-colors"
              >
                {language === 'zh' ? '关闭' : language === 'ja' ? '閉じる' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
