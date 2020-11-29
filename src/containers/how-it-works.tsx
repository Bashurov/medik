import React from 'react';
import FeatureBlock from 'components/feature-block';

const data = [
  {
    id: 1,
    background: '#feeec8',
    title: 'Ваша корзина заказов ',
    description: 'Добавьте продукты в корзину, введите свои данные и подтвердите.',
  },
  {
    id: 2,
    background: '#ceeffe',
    title: 'Выбор вашего заказа',
    description:
      'Ваш заказ собирают и отправляют на упаковку.',
  },
  {
    id: 3,
    background: '#d4f8c4',
    title: 'Упаковка вашего заказа',
    description: 'Мы упаковываем ваш заказ и скоро его отправим.',
  },
  {
    id: 4,
    background: '#d8dafe',
    title: 'Доставка',
    description:
      'Ваш заказ подготовлен и готов к доставке. Скоро будет доставлено.',
  },
];

export default function HowItWorks() {
  return (
    <div className="flex w-full px-20px md:p-30px py-40px rounded border border-gray-300 bg-white">
      <div className="feature-block-wrapper w-full grid grid-cols-1 gap-x-30px gap-y-40px md:grid-cols-2 xl:grid-cols-4 xxl:gap-30px">
        {data.map((item, index) => (
          <FeatureBlock
            key={item.id}
            title={item.title}
            description={item.description}
            counterBg={item.background}
            counter={index + 1}
            className="feature-block"
          />
        ))}
      </div>
    </div>
  );
}
