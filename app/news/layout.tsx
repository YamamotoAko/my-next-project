import Hero from '../_components/Hero/Hero';
import Sheet from '../_components/Sheet/Sheet';

type Props = {
  children: React.ReactNode;
};

import React from 'react';

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
