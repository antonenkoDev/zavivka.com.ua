"use client";
import { useState } from "react";
import { useAppSelector } from "@/store/hook";
import { Service } from "@/store/type";
import Price from "./Price";
import ServiceForPrice from "./ServiceForPrice";

const Prices = ({forMen=false, haircut=false}: {forMen?: boolean, haircut?: boolean}) => {
  const servicePricesInfo: Service[] = useAppSelector(state => state.service.listService);
  const menSer = [servicePricesInfo.find(i => i.id === "01")!, servicePricesInfo.find(i => i.id === "03")!, servicePricesInfo.find(i => i.id === "04")!, servicePricesInfo.find(i => i.id === "07")!, servicePricesInfo.find(i => i.id === "08")!];
  const menHaircutSer = [servicePricesInfo.find(i => i.id === "03")!, servicePricesInfo.find(i => i.id === "04")!, servicePricesInfo.find(i => i.id === "07")!, servicePricesInfo.find(i => i.id === "08")!];
  const haircutSer = [servicePricesInfo.find(i => i.id === "03")!, servicePricesInfo.find(i => i.id === "04")!, servicePricesInfo.find(i => i.id === "05")!, servicePricesInfo.find(i => i.id === "06")!, servicePricesInfo.find(i => i.id === "07")!, servicePricesInfo.find(i => i.id === "08")!];
  const servicePrices = !forMen && !haircut ? servicePricesInfo : (!haircut && forMen) || (haircut && forMen)  ? menHaircutSer : haircutSer;
  console.log(menSer)
  const [currentChoice, setCurrentChoice] = useState<number>(0);

  return (
    <section className="containerBox pl-5 md:pl-[100px] xl:pl-[260px] 2xl:pl-5 relative pr-5 md:pr-[80px] xl:pr-[240px] 2xl:pr-[50px]">
        <div className="with-circle">
            <h2 className="font-bold text-center md:text-start text-[24px] md:text-[30px] xl:text-[40px] uppercase mb-[30px] md:mb-[54px]">Ціни</h2>
            <p className="mb-[60px]">
              <span className="hidden md:block">Нижче наведено прайс з цінами на наші послуги.</span>
              <br />
              Точніше Вас зорієнтує наш адміністратор після того, як ви залишите
              заявку.
            </p>
        </div>
        <div className="md:flex">
            <ServiceForPrice 
              servicePrices={servicePrices}
              onClick={setCurrentChoice}
              currentChoice={currentChoice}
              haircut={haircut}
            />
          <div className="hidden md:block">
            <Price 
              servicePrices={servicePrices}
              currentChoice={currentChoice}
              forMen={forMen}
              haircut={haircut}
            />
          </div>
        </div>
    </section>
  );
}

export default Prices;
