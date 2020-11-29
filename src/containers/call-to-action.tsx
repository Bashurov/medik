import CTABlock from 'components/cta-block';
import Button from 'components/button';
import ArrowRight from 'assets/icons/arrow-right';
import CTAImage from 'assets/image/CTA-image-1.png';

export default function CallToAction() {
  return (
    <CTABlock background={CTAImage}>
      <h3 className="font-normal text-white text-36px mb-6 text-center lg:text-left">
        Быстрая доставка,
        <br />
        <span className="font-bold">Бесконтактная доставка.</span>
      </h3>

      <p className="text-white text-center lg:text-left mb-10">
        Попробуйте прямо сейчас, без риска!
      </p>

      <Button variant="elevation">
        <span className="mr-2">Купить сейчас</span> <ArrowRight width="13px" />
      </Button>
    </CTABlock>
  );
}
