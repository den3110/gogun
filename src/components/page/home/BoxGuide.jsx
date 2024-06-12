import Link from "next/link";
import React from "react";

const BoxGuide = () => {
  return (
    <section className="box guia">
      <div className="title-new">
        <h1>Hướng dẫn</h1>
      </div>
      <ul className="biglist animElement slide-left in-view">
        <li>
          <Link href="/game_guide">
            <>
                <i className="icon-controls"></i>
                <strong>Điều Khiển</strong>
                <p>
                Sử dụng các phím mũi tên để di chuyển nhân vật và điều chỉnh góc,
                phím cách dùng để bắn.
                </p>
            </>
          </Link>
        </li>
        <li>
          <Link href="/game_guide">
            <>
                <i className="icon-fight-lab"></i>
                <strong>Đo màn hình</strong>
                <p>Hướng dẫn đo màn hình và lực bắn để bắn chính xác.</p>
            </>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default BoxGuide;
