import HorizontalList from "./horizontal-list";
import PriceCard from "./price_card";

function HorizontalPriceList({ title, list = [] }) {
  return (
    <HorizontalList title={title}>
      {!!list.length &&
        list.map((item, key) => (
          <PriceCard
            key={key}
            title={item.title}
            img={item.img}
            price={item.price}
            ogPrice={item.originalPrice}
            off={item.percentageOff}
          />
        ))}
    </HorizontalList>
  );
}

export default HorizontalPriceList;
