import React from 'react';
import { FadeIn } from '../../animations/FadeIn';
import HeroButtons from './HeroButtons';

export default function HeroContent() {
  return (
    <div className="lg:w-1/2 lg:pr-12">
      <FadeIn>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Go <span className="text-green-600">borderless</span> with Findin Platform
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-xl text-gray-600 mb-8">
          Position your business to be seen easily. Connect with customers and grow your presence with just a tap.
        </p>
      </FadeIn>
      <HeroButtons />
    </div>
  );
}