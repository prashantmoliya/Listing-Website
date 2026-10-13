"use client";

import { Trash2, AlertTriangle } from "lucide-react";
import { Modal } from "@/components/common/modal";
import { Button } from "@/components/ui/button";
import type { ListingServiceProductItem } from "@/data";

interface DeleteServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: ListingServiceProductItem | null;
  onConfirm: () => void;
}

export function DeleteServiceDialog({
  open,
  onOpenChange,
  item,
  onConfirm,
}: DeleteServiceDialogProps) {
  if (!item) return null;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      maxWidth="sm:max-w-md"
      headTitle="Delete Offering"
      headDescription="Are you sure you want to delete this offering from your listing?"
      headerIcon={
        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
          <Trash2 className="size-5" />
        </div>
      }
    >
      <div className="space-y-4 pt-1">
        <div className="p-3.5 bg-rose-50/60 border border-rose-100 rounded-xl flex items-start gap-3">
          <AlertTriangle className="size-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-xs text-rose-950 space-y-1">
            <p className="font-bold text-rose-900">
              &quot;{item.name}&quot; will be permanently removed.
            </p>
            <p className="text-rose-700/80 leading-relaxed text-[11px]">
              Customers will no longer be able to see or inquire about this specific service/product on your public listing page.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2.5 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="rounded-xl font-semibold text-xs h-9.5 px-4 cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
            className="rounded-xl font-bold text-xs h-9.5 px-4 bg-rose-600 hover:bg-rose-700 text-white shadow-sm shadow-rose-500/20 cursor-pointer"
          >
            Yes, Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
