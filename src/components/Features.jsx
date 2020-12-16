import FeaturesSlider from './FeaturesSlider';

export default function Features() {
  return (
    <section className="features">
      <div className="wrapper">
        <div className="features-wrapper">
          <h2 className="features-head">
            Уникальный заголовок для преимущества компании
          </h2>
          <div className="features-subhead">О нас</div>
          <div className="features-description">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить.
          </div>
          <FeaturesSlider />
        </div>
      </div>
    </section>
  );
}
