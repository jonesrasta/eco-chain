export default function Carousel() {
  return (
    <div className="max-w-5xl flex mx-auto items-center justify-center -mt-28 mb-28 overflow-x-scroll touch-pan-x scroll-smooth hide-scrollbar">
      <ul className="flex items-center justify-center [&_li]:mx-6 [&_img]:max-w-none">
        <li>
          <img src="/src/assets/carousel/litecoin.svg" alt="Litecoin" />
        </li>
        <li>
          <img src="/src/assets/carousel/avalanche.svg" alt="Avalanche" />
        </li>
        <li>
          <img src="/src/assets/carousel/tether.svg" alt="Tether" />
        </li>
        <li>
          <img src="/src/assets/carousel/bitcoin.svg" alt="Bitcoin" />
        </li>
        <li>
          <img src="/src/assets/carousel/ethereum.svg" alt="Ethereum" />
        </li>
        <li>
          <img src="/src/assets/carousel/solana.svg" alt="Solana" />
        </li>
        <li>
          <img src="/src/assets/carousel/bnb.svg" alt="BNB" />
        </li>
        <li>
          <img src="/src/assets/carousel/usd.svg" alt="USD" />
        </li>
      </ul>
    </div>
  );
}
