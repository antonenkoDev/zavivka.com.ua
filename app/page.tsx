import { Features } from "@/components/feature";
import { MainBanner } from "@/components/banner";
import { Trust } from "@/components/trust";
import { Digits } from "@/components/digits";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { FAQ } from "@/components/faq";
import { Contacts } from "@/components/contacts";
import { Booking } from "@/components/booking";
import { Prices } from "@/components/prices";


export default function Home() {
  return (
    <>
      <MainBanner />
      <Services />
      <Features />
      <Digits />
      <Trust />
      <Prices />
      <Reviews />
      <Booking />
      <FAQ />
      <Contacts />
    </>
  );
}
