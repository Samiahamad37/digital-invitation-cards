import { GuestList } from "@cards/shared/server";

export const dynamic = "force-dynamic";

// Open /guests?key=YOUR_ADMIN_PASSWORD
export default async function Guests({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
  const { key } = await searchParams;
  return <GuestList coupleSlug="amani-neema" keyParam={key} />;
}
