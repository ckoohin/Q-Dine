// utils/getBreadcrumb.ts
import { sidebarSections } from "@/components/layouts/admin/sideber/sidebar.config";

type Breadcrumb = {
  sectionTitle: string;
  pageLabel: string;
  icon: any;
};

export function getBreadcrumb(pathname: string): Breadcrumb | null {
  for (const section of sidebarSections) {
    for (const item of section.items) {
      if (item.href === pathname) {
        return {
          sectionTitle: section.title,
          pageLabel: item.label,
          icon: item.icon,
        };
      }
    }
  }
  return null;
}
