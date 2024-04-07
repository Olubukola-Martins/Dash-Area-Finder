import styles from "./hero.module.css";
import HeroCard from "./HeroCard";
const HeroCardSection = () => {
  return (
    <div className={styles.cardArea}>
      <div className="grid grid-cols-2 h-[inherit] w-fit  mt-[-150px]  gap-5">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <HeroCard tagColor={index  === 2 ? "magenta" : "gold"} key={index} />
          ))}
      </div>
    </div>
  );
};

export default HeroCardSection;

// className=" max-w-fit bg-gradient-to-b from-transparent via-gray-100 to-transparent border">

/* Overlay */

// position: absolute;
// width: 506px;
// height: 1024px;
// left: 0px;
// top: 0px;

// .top-bottom-overflow-fade {
//     mask-image: linear-gradient(transparent, black 20%, black 80%, transparent 100%);
//     -webkit-mask-image: linear-gradient(transparent, black 20%, black 80%, transparent 100%);
// }

// background: linear-gradient(180deg, #FAFCFD 9.01%, rgba(250, 252, 253, 0) 22.32%, rgba(250, 252, 253, 0) 66.67%, #FAFCFD 96.46%);
//  from-gray-100 via-transparent to-gray-100
