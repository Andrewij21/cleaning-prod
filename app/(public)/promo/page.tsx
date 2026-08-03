import { PromoHeroCarousel } from "@/app/(public)/promo/_components/PromoHeroCarousel";
import { PromoCardsGrid } from "@/app/(public)/promo/_components/PromoCardsGrid";

export default function PromoPage() {
  return (
    <>
      <main className="flex flex-col">
        <PromoHeroCarousel />
        <PromoCardsGrid />
      </main>
    </>
  );
}
