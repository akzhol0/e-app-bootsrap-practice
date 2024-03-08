import React from "react";
import { Image } from "react-bootstrap";

function TopComponent() {
  return (
    <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-light bg-primary">
      <div className="d-none d-sm-flex align-items-center py-3 gap-2">
        Follow us!
        <div className="d-flex align-items-center gap-2">
          <a href="#">
            <Image src="/img/telegram.svg" />
          </a>
          <a href="#">
            <Image src="/img/youtube.svg" />
          </a>
          <a href="#">
            <Image src="/img/instagram.svg" />
          </a>
        </div>
      </div>
      <div className="py-3 font-size-[1px] mb-0 text-center">Winter is coming! 50% off for new year!</div>
      <div className='d-none d-xl-block'>
        <div className="d-flex align-items-center py-3 gap-2">
          <img src="/img/telephone.svg" alt="logo-app" />
          (+98) 253-1189
          <img src="/img/envelope.svg" alt="logo-app" />
          pigmentagency@gmail.com
        </div>
      </div>
    </div>
  );
}

export default TopComponent;
