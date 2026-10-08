"use client";

import {
  MessageSquare,
  Phone,
  Mail,
  Building2,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Sparkles,
  User,
  MessageSquareText,
} from "lucide-react";
import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { CustomerInquiryItem } from "@/data";

interface InquiryDetailsModalProps {
  inquiry: CustomerInquiryItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InquiryDetailsModal({
  inquiry,
  open,
  onOpenChange,
}: InquiryDetailsModalProps) {
  if (!inquiry) return null;

  const cleanPhone = inquiry.phone.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/91${cleanPhone.slice(-10)}?text=${encodeURIComponent(
    `Hello ${inquiry.fullName}, regarding your inquiry on IndianListingBucket for ${inquiry.service} at ${inquiry.listingName}: `
  )}`;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      maxWidth="sm:max-w-2xl"
      title="Customer Inquiry Details"
      description={`Received for ${inquiry.listingName}`}
      headerIcon={
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <MessageSquare size={16} className="sm:w-[18px] sm:h-[18px]" />
        </div>
      }
      footer={
        <div className="flex items-center justify-end w-full">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto h-9 px-5 rounded-[10px] font-semibold text-xs cursor-pointer hover:bg-slate-100"
          >
            Close
          </Button>
        </div>
      }
    >
      <div className="space-y-3.5 sm:space-y-4 py-1 text-sm min-w-0">
        {/* Target Business Banner with Status */}
        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 flex flex-col xs:flex-row xs:items-center justify-between gap-2 sm:gap-3 min-w-0">
          <div className="flex items-start sm:items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs mt-0.5 sm:mt-0">
              <Building2 size={15} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words">
                {inquiry.listingName}
              </p>
              <p className="text-[11px] text-slate-500 break-words mt-0.5">
                {inquiry.listingCategory} • {inquiry.listingCity}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start xs:self-auto pl-9 xs:pl-0">
            {inquiry.status === "Pending" && (
              <Badge variant="amber" className="gap-1 font-semibold text-[11px] sm:text-xs">
                <Clock className="w-3 h-3 text-amber-600" />
                <span>Pending</span>
              </Badge>
            )}
            {inquiry.status === "Resolved" && (
              <Badge variant="emerald" className="gap-1 font-semibold text-[11px] sm:text-xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Resolved</span>
              </Badge>
            )}
            {inquiry.status === "Rejected" && (
              <Badge variant="rose" className="gap-1 font-semibold text-[11px] sm:text-xs">
                <XCircle className="w-3 h-3 text-rose-600" />
                <span>Rejected</span>
              </Badge>
            )}
          </div>
        </div>

        {/* Customer Information Card */}
        <div className="p-3 sm:p-4 rounded-xl bg-indigo-50/30 border border-indigo-100/70 space-y-3 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100/50 pb-2.5 sm:pb-3 min-w-0">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Customer
                </span>
                <p className="text-sm font-bold text-slate-900 break-words">
                  {inquiry.fullName}
                </p>
              </div>
            </div>

            <div className="sm:text-right min-w-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Service Requested
              </span>
              <div className="mt-1 flex sm:justify-end">
                <span className="inline-flex items-center gap-1.5 font-bold text-xs py-1 px-2.5 rounded-md bg-indigo-100/80 text-indigo-800 border border-indigo-200/60 max-w-full text-left break-words whitespace-normal leading-snug">
                  <Sparkles className="w-3 h-3 text-indigo-600 shrink-0 self-center" />
                  <span className="break-words">{inquiry.service}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-2.5 pt-0.5">
            <div className="sm:col-span-4 p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200/60 space-y-0.5 min-w-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Mobile Number
              </span>
              <a
                href={`tel:${inquiry.phone}`}
                className="text-xs font-bold text-slate-800 hover:text-indigo-600 flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <Phone size={12} className="text-slate-400 shrink-0" />
                <span>+91 {inquiry.phone}</span>
              </a>
            </div>

            <div className="sm:col-span-5 p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200/60 space-y-0.5 min-w-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Email Address
              </span>
              <a
                href={`mailto:${inquiry.email}`}
                title={inquiry.email}
                className="text-xs font-semibold text-slate-800 hover:text-indigo-600 flex items-start gap-1.5 transition-colors group"
              >
                <Mail size={12} className="text-slate-400 group-hover:text-indigo-600 shrink-0 mt-0.5" />
                <span className="break-all select-all leading-snug">{inquiry.email}</span>
              </a>
            </div>

            <div className="sm:col-span-3 p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200/60 space-y-0.5 min-w-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Contact Via
              </span>
              <div className="pt-0.5 flex items-center">
                {inquiry.preferredContact === "WhatsApp" && (
                  <Badge variant="teal" className="gap-1 font-semibold text-[11px] max-w-full">
                    <MessageSquare className="w-3 h-3 text-teal-600 shrink-0" />
                    <span>WhatsApp</span>
                  </Badge>
                )}
                {inquiry.preferredContact === "Phone" && (
                  <Badge variant="indigo" className="gap-1 font-semibold text-[11px] max-w-full">
                    <Phone className="w-3 h-3 text-indigo-600 shrink-0" />
                    <span>Phone Call</span>
                  </Badge>
                )}
                {inquiry.preferredContact === "Email" && (
                  <Badge variant="sky" className="gap-1 font-semibold text-[11px] max-w-full">
                    <Mail className="w-3 h-3 text-sky-600 shrink-0" />
                    <span>Email</span>
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Requirement Message Card */}
        <div className="space-y-1.5 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-xs font-bold text-slate-700 min-w-0">
            <span className="flex items-center gap-1.5 min-w-0">
              <MessageSquareText size={13} className="text-indigo-600 shrink-0" />
              <span className="leading-snug break-words">Customer Message / Requirement Details</span>
            </span>
            <span className="text-[11px] font-normal text-slate-400 flex items-center gap-1 shrink-0 pl-4 sm:pl-0">
              <Calendar size={11} className="shrink-0" />
              <span>{inquiry.date} {inquiry.time && `• ${inquiry.time}`}</span>
            </span>
          </div>
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 text-xs text-slate-700 leading-relaxed font-medium break-words">
            {inquiry.message || "No specific requirement message was provided by the customer."}
          </div>
        </div>

        {/* Quick Connect Actions */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1"
          >
            <Button
              type="button"
              className="w-full h-9 rounded-[10px] bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <MessageSquare size={14} />
              <span>Reply on WhatsApp</span>
            </Button>
          </a>

          <a href={`tel:${inquiry.phone}`} className="w-full sm:flex-1">
            <Button
              type="button"
              variant="outline"
              className="w-full h-9 rounded-[10px] border-indigo-200 text-indigo-700 hover:bg-indigo-50 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Phone size={14} />
              <span>Call Customer</span>
            </Button>
          </a>

          <a href={`mailto:${inquiry.email}`} className="w-full sm:flex-1">
            <Button
              type="button"
              variant="outline"
              className="w-full h-9 rounded-[10px] border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Mail size={14} />
              <span>Send Email</span>
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
}
