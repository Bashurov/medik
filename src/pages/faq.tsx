import { useEffect } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import Accordion from 'components/accordion';

const accordionData = [
  {
    id: 1,
    title: 'Как связаться со службой поддержки клиентов?',
    details:
      'Наша команда по работе с клиентами работает 6 дней в неделю, и мы предлагаем различные способы связи: телефон и электронную почту, а так же чат в социальных сетях. Мы стараемся отвечать быстро, поэтому вам не придется долго ждать ответа !',
  },
  {
    id: 2,
    title: 'Заголовок 2 ......?',
    details:
      'Ответ 2 ....',
  },
  {
    id: 3,
    title: 'Заголовок 3....',
    details:
      'Ответ 3.......',
  },
  {
    id: 4,
    title: 'Заголовок 4 .....',
    details:
      'Ответ 4 .........',
  },
];

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Поместите здесь свое описание." />
        <title>Часто задаваемые вопросы</title>
      </Head>

      <div className="py-35px px-0">
        <h3 className="w-full flex justify-center mb-30px text-24px text-gray-900 text-center font-semibold">
          Часто задаваемые вопросы
        </h3>
        <Accordion items={accordionData} />
      </div>
    </Layout>
  );
}
