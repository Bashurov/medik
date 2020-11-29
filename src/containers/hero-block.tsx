import React from 'react';
import Carousel from 'components/carousel/carousel';
import CouponImg from 'assets/image/coupon-card.png';
import OrderImg from 'assets/image/custom-order.png';
import DeliveryImg from 'assets/image/fast-delivery.png';
import FemaleCareImg from 'assets/image/female-care.png';

const data = [
  {
    id: 1,
    image: DeliveryImg,
    link: '#',
    title: 'Быстрая доставка',
  },
  {
    id: 2,
    image: CouponImg,
    link: '#',
    title: 'Экономим с купонами',
  },
  {
    id: 3,
    image: OrderImg,
    link: '#',
    title: 'Изготовленный под заказ',
  },
  {
    id: 4,
    image: FemaleCareImg,
    link: '#',
    title: 'Женский уход',
  },
];

export default function HeroBlock() {
  return (
    <div className="w-full relative my-35px">
      <Carousel data={data} itemClass="px-5px" />
    </div>
  );
}
