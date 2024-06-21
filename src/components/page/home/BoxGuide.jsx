import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const BoxGuide = () => {
  const liRefs = useRef([]);
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = "/background/b7.png";
    img.onload = () => {
      if (liRefs.current[0]) {
        const aspectRatio = img.height / img.width;
        const divWidth = liRefs.current[0].clientWidth;
        setDivHeight(divWidth * aspectRatio);
      }
    };
  }, []);

  return (
    <section className="box guia">
      <div className="title-new">
        <h1>Hướng dẫn</h1>
      </div>
      <ul className="biglist animElement slide-left in-view">
        <li
          ref={(el) => (liRefs.current[0] = el)}
          style={{ width: "100%", height: `${divHeight}px` }}
        >
          <Link href="/game_guide">
            <>
              <i className="icon-controls"></i>
              <div>
                <strong>Điều Khiển</strong>
                <p>
                  Sử dụng các phím mũi tên để di chuyển nhân vật và điều chỉnh
                  góc, phím cách dùng để bắn.
                </p>
              </div>
            </>
          </Link>
        </li>
        <li
          ref={(el) => (liRefs.current[1] = el)}
          style={{ width: "100%", height: `${divHeight}px` }}
        >
          <Link href="/game_guide">
            <>
              <i className="icon-fight-lab"></i>
              <div>
                <strong>Đo màn hình</strong>
                <p>Hướng dẫn đo màn hình và lực bắn để bắn chính xác.</p>
              </div>
            </>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default BoxGuide;
