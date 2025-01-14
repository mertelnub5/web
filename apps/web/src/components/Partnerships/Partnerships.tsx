import { ButtonVariants } from 'apps/web/src/components/Button/Button';
import { ButtonWithLinkAndEventLogging } from 'apps/web/src/components/Button/ButtonWithLinkAndEventLogging';
import ImageAdaptive from 'apps/web/src/components/ImageAdaptive';
import optimismBase from './optimism-base.png';
import coinbaseBase from './coinbase-base.png';

export async function Partnerships() {
  return (
    <div className="flex w-full max-w-[1440px] flex-row flex-wrap items-start justify-between bg-black px-8 py-12">
      <div className="flex w-full flex-col space-y-8 pb-16 lg:basis-1/2 lg:space-y-12 lg:pt-1">
        <ImageAdaptive
          src={optimismBase}
          alt="Optimism Base graphic"
          width={678}
          height={453}
          quality={100}
        />
        <div className="space-y-12 px-4">
          <p className="font-display text-sm text-white md:text-lg lg:text-xl">
            Base is powered by Optimism&apos;s OP Stack, making it one of the most secure, scalable
            EVM L2s out there. The OP Stack is an open-source public good that will serve as the
            foundation for a “superchain” of L2s that share interoperability, sequencing, and
            governance.
          </p>
          <ButtonWithLinkAndEventLogging
            href="https://base.mirror.xyz/H_KPwV31M7OJT-THUnU7wYjOF16Sy7aWvaEr5cgHi8I"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Learn More About Optimism"
            eventName="learn_more_optimism"
            variant={ButtonVariants.Secondary}
            buttonClassNames="mt-12"
          >
            Learn More
          </ButtonWithLinkAndEventLogging>
        </div>
      </div>
      <div className="flex w-full flex-col space-y-12 pt-[3px] lg:basis-1/2">
        <ImageAdaptive
          src={coinbaseBase}
          alt="Coinbase Base graphic"
          quality={100}
          width={678}
          height={453}
        />
        <div className="space-y-12 px-4">
          <p className="font-display text-sm text-white md:text-lg lg:text-xl">
            Base is incubated within Coinbase and plans to progressively decentralize in the years
            ahead. We believe that decentralization is critical to creating an open, global
            cryptoeconomy that is accessible to everyone.
          </p>
          <ButtonWithLinkAndEventLogging
            href="https://base.mirror.xyz/H_KPwV31M7OJT-THUnU7wYjOF16Sy7aWvaEr5cgHi8I"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Learn More About Optimism"
            eventName="learn_more_optimism"
            variant={ButtonVariants.Secondary}
            buttonClassNames="mt-12"
          >
            Learn More
          </ButtonWithLinkAndEventLogging>
        </div>
      </div>
    </div>
  );
}
