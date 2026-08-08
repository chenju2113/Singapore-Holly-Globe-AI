import React, { useState } from 'react';
import { ConsultationFormData } from '../../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
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
      setError('Please fill in required fields.');
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

      // Fire Google Ads conversion tracking event
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-18372486865/EVGdCJ2MstwcENHN17hE',
          'value': 1.0,
          'currency': 'SGD'
        });
      }
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
              <span>SINGAPORE OFFICE ADVISORY</span>
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-[#0b1c30]">
            Request Consultation
          </h2>
          <p className="text-xs text-[#424654] mt-1">
            Book a consultation or email our customer desk directly at{' '}
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
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Tan Ah Kow / Sarah Lim"
                className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com.sg"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  Phone / Mobile
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
                  Company Name <span className="text-red-500">*</span>
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
                  Preferred Date
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
                Market Expansion Goal / Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Briefly describe your China market entry objectives..."
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
                  <span>Scheduling Request...</span>
                ) : (
                  <>
                    <span>Confirm Consultation Request</span>
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
                Consultation Request Confirmed!
              </h3>
              <p className="text-xs text-[#424654] max-w-sm mx-auto">
                Your inquiry reference is generated. Our Singapore Enterprise Consultant (John) will contact you shortly.
              </p>
            </div>

            {/* Email Dispatch Status Banner */}
            {emailStatus.emailSent ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg font-medium flex items-center gap-2 text-left">
                <span className="material-symbols-outlined text-base text-emerald-600 shrink-0">mark_email_read</span>
                <span>{emailStatus.message || 'Automated confirmation email dispatched via server.'}</span>
              </div>
            ) : (
              <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded-lg text-left space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-800">
                  <span className="material-symbols-outlined text-base text-amber-600">info</span>
                  <span>Direct Delivery Notice</span>
                </div>
                <p className="text-[11px] text-amber-900/80 leading-relaxed">
                  To ensure immediate delivery to our team, please click below to send via your local email client or copy the inquiry details to send manually to <strong>enquiry@sghollyglobe.com</strong>.
                </p>
              </div>
            )}

            <div className="p-4 bg-[#eff4ff] border border-[#d9e2ff] rounded-xl text-left space-y-2 text-xs font-mono-code">
              <div className="flex justify-between border-b border-[#d9e2ff] pb-2">
                <span className="text-[#727685]">Reference ID:</span>
                <span className="font-bold text-[#0056c5]">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#d9e2ff] pb-2">
                <span className="text-[#727685]">Support Desk:</span>
                <span className="font-bold text-[#0b1c30]">enquiry@sghollyglobe.com</span>
              </div>
              <div className="flex justify-between border-b border-[#d9e2ff] pb-2">
                <span className="text-[#727685]">Contact Person:</span>
                <span className="font-bold text-[#0b1c30]">John</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#727685]">Office:</span>
                <span className="font-bold text-[#0b1c30]">Ocean Financial Centre, Singapore</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={directMailto}
                className="primary-btn flex-1 py-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>Send Email via Client</span>
              </a>

              <button
                type="button"
                onClick={handleCopyDetails}
                className="secondary-btn py-3 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                <span>{copied ? 'Copied Details!' : 'Copy Draft'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-[#0b1c30] rounded-lg font-semibold text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
