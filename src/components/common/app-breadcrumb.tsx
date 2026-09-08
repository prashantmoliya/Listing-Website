import * as React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

export interface BreadcrumbItemType {
  label: React.ReactNode;
  href?: string;
}

export interface CommonBreadcrumbProps {
  items: BreadcrumbItemType[];
  className?: string;
}

export function AppBreadcrumb({ items, className }: CommonBreadcrumbProps) {
  if (!items || items.length === 0) return null;

  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {!isLast && item.href ? (
                  <BreadcrumbLink render={<Link href={item.href} />}>
                    {item.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
