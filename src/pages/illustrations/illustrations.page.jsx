import dgungliImg from "../../assets/djungli.jpg";
import ozonImg from "../../assets/ozon.jpg";
import xtreeImg from "../../assets/x-tree.jpg";
import upilatesImg from "../../assets/upilates.jpg";
import gerdsImg from "../../assets/gerds.jpg";
import kaisImg from "../../assets/kais.jpg";
import queensImg from "../../assets/queens.jpg";
import izumrudImg from "../../assets/izumrud.jpg";
import feyaImg from "../../assets/feya.jpg";
import boyisokImg from "../../assets/boyisok2.jpg";
import kebabImg from "../../assets/kebab.jpg";
import elkImg from "../../assets/elk.jpg";
import autumnImg from "../../assets/autumn.jpg";
import dreamsImg from "../../assets/dreams.jpg";
import hedgehogImg from "../../assets/hedgehog.jpg";

export const IllustrationsPage = () => {
  return (
    <div className="flex flex-wrap gap-y-4 items-center justify-between">
      <div className="illustration">
        <img alt="djungli" src={dgungliImg} />
      </div>
      <div className="illustration">
        <img alt="ozon" src={ozonImg} />
      </div>
      <div className="illustration">
        <img alt="x-tree" src={xtreeImg} />
      </div>
      <div className="illustration">
        <img alt="upilates" src={upilatesImg} />
      </div>
      <div className="illustration">
        <img alt="gerds" src={gerdsImg} />
      </div>
      <div className="illustration">
        <img alt="kais" src={kaisImg} />
      </div>
      <div className="illustration">
        <img alt="queens" src={queensImg} />
      </div>
      <div className="illustration">
        <img alt="izumrud" src={izumrudImg} />
      </div>
      <div className="illustration">
        <img alt="feya" src={feyaImg} />
      </div>
      <div className="illustration">
        <img alt="boyisok" src={boyisokImg} />
      </div>
      <div className="illustration">
        <img alt="kebab" src={kebabImg} />
      </div>
      <div className="illustration">
        <img alt="elk" src={elkImg} />
      </div>
      <div className="illustration">
        <img alt="autumn" src={autumnImg} />
      </div>
      <div className="illustration">
        <img alt="dreams" src={dreamsImg} />
      </div>
      <div className="illustration">
        <img alt="hedgehog" src={hedgehogImg} />
      </div>
    </div>
  );
};
