import ShelfPageClient from "./ShelfPageClient";
import { TABS, type Tab } from "./tabs";

const TAB_VALUES: string[] = Object.values(TABS);

export default async function ShelfPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const rawTab = tab?.toUpperCase() ?? TABS.BOOKS;
  const initialTab: Tab = TAB_VALUES.includes(rawTab) ? (rawTab as Tab) : TABS.BOOKS;

  return <ShelfPageClient initialTab={initialTab} />;
}
