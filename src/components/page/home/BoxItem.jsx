import React from "react";

const BoxItem = () => {
  return (
    <section className="box itens">
      <div className="title-new">
        <h1>Vật phẩm quý hiếm</h1>
      </div>
      <div className="tabsAnchor small">
        <a
          href="#Armas"
          className="itemquyhiem active"
        >
          Vũ khí
        </a>
        <a href="#Roupas" className="itemquyhiem">
          Áo
        </a>
        <a href="#Chapeus" className="itemquyhiem">
          Nón
        </a>
        <a href="#Ternos" className="itemquyhiem">
          Sét
        </a>
        <a href="#Asas" className="itemquyhiem">
          Cánh
        </a>
        <a href="#Acessorios" className="itemquyhiem">
          Đạo cụ
        </a>
      </div>
      <div className="tabsContent">
        <div id="tabArmas" className="active">
          <ul className="listsquare">
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/machado-de-pedra.png" />
              <span>Hatchet</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/ak-48.png" />
              <span>AK—48</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/carro-voador.png" />
              <span>Hyper Car</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/deus-da-forca.png" />
              <span>Titan</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/super-workaholic.png" />
              <span>☆☆· White Collar</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/super-pistola-dagua.png" />
              <span>Mighty Water Gun</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/verdadeiro-chick-louco.png" />
              <span>True Crazy Chick</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/verdadeira-cabeca-de-boi.png" />
              <span>☆ Undead Axe</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/verdadeira-lanca-de-antiguidade.png" />
              <span>☆ Spear</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/verdadeiro-bumerangue-do-amor.png" />
              <span>☆ Boomerang</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/super-ovo-de-pascoa.png" />
              <span>☆☆·Easter Egg</span>
            </li>
            <li className="animElement zoom-out in-view">
              <img src="https://gogun.vn/assets/img/itens/arm/00.png" />
              <span>☆☆·Love of Snow</span>
            </li>
          </ul>
        </div>
        <div id="tabRoupas" className>
          <ul className="listsquare">
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/domador-do-dragao-de-bronze.png" />
              <span>Bronze Dragonia</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/domador-do-dragao-de-prata.png" />
              <span>Silver Dragonia</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/domador-do-dragao-de-ouro.png" />
              <span>Gold Dragonia</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/bravo-mago.png" />
              <span>Magic Warrior</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/mano.png" />
              <span>Bro</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/cavaleiro-dragao.png" />
              <span>Dragon Knight</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/guardiao-verde.png" />
              <span>Protector</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/capa-de-matias.png" />
              <span>Matias</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/admiravel-espadachim.png" />
              <span>Brave Warrior</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/guerreiro-demonio.png" />
              <span>Evil Warrior</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/raiva-de-solaan.png" />
              <span>Northern</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/cloth/armadura-de-matias.png" />
              <span>Matias</span>
            </li>
          </ul>
        </div>
        <div id="tabChapeus">
          <ul className="listsquare">
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/chapeu-da-copa.png" />
              <span>Brazil Fans</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/chapeu-da-copa-1.png" />
              <span>Brazil Fans 1</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/chapeu-de-papagaio.png" />
              <span>Parrot Hat</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/chapeu-de-tucano.png" />
              <span>Woodpecker</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/ventos-do-sudeste-da-asia.png" />
              <span>Style of Southeast Asia</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/pequena-bola-amarela.png" />
              <span>Small Yellow Ball</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/cabelo-de-jarro.png" />
              <span>Jarhead</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/pequeno-gorro.png" />
              <span>Demon Hat</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/capacete-duende.png" />
              <span>Lion</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/chapeu-largo.png" />
              <span>Sombrero</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/chifre-de-minotauro.png" />
              <span>Minotaur Horn</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/head/ouvidos-de-lobo.png" />
              <span>Wolf Ear</span>
            </li>
          </ul>
        </div>
        <div id="tabTernos">
          <ul className="listsquare">
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/hulk.png" />
              <span>Hulk</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/o-motoqueiro-fantasma.png" />
              <span>Flame Dance</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/gemeos-de-ouro.png" />
              <span>Golden Gemini</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/aries-negro.png" />
              <span>Dark Aries</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/aries-dourado.png" />
              <span>Gold Aries</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/elwin.png" />
              <span>Elwin</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/pintinho-da-morte.png" />
              <span>Black Spirit</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/bebe-cabeca-de-boi.png" />
              <span>Ox-head Baby</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/bugou-das-profundezas-do-mar.png" />
              <span>Gulu Deep Sea</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/jardim-dos-bugous.png" />
              <span>Gulu Orchard</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/bugou-azul-agua.png" />
              <span>Gulu Water Blue</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/suits/parque-de-bugous.png" />
              <span>Gulu Amusement Park</span>
            </li>
          </ul>
        </div>
        <div id="tabAsas">
          <ul className="listsquare">
            <li>
              <img src="https://gogun.vn/assets/img/itens/wing/deus-da-guerra.png" />
              <span>Mars</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/wing/grinalda-olimpica.png" />
              <span>Olimpic Wing</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/wing/fantasma-magico.png" />
              <span>Illusion</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/wing/arrepio-dia-das-bruxas.png" />
              <span>Horror Night</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/wing/videira-colorida.png" />
              <span>Colored Vine</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/wing/boneco-de-neve.png" />
              <span>Snow Baby</span>
            </li>
          </ul>
        </div>
        <div id="tabAcessorios">
          <ul className="listsquare">
            <li>
              <img src="https://gogun.vn/assets/img/itens/unfrightprop/pedra-de-fortalecimento-nivel-5.png" />
              <span>Energy Stone Lv5</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/unfrightprop/pedra-de-fortalecimento-nivel-4.png" />
              <span>Energy Stone Lv4</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/unfrightprop/pedra-de-fortalecimento-nivel-3.png" />
              <span>Energy Stone Lv3</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/unfrightprop/pedra-de-fortalecimento-nivel-2.png" />
              <span>Energy Stone Lv2</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/unfrightprop/pedra-de-fortalecimento-nivel-1.png" />
              <span>Energy Stone Lv1</span>
            </li>
            <li>
              <img src="https://gogun.vn/assets/img/itens/unfrightprop/simbolo-dos-deuses.png" />
              <span>Divine Amulet</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BoxItem;
