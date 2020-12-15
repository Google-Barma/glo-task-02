import s from './Header.module.css';
import Wrapper from '../Layouts/Wrapper';

export default function Header() {
  return (
    <header>
      <Wrapper>
        <div className={s.header}>
          <a href="tel:7(962)556-1234">
            <div className={s.headerLogo}></div>
          </a>
          <a href="tel:7(962)556-1234" className={s.headerPhone}></a>
          <div className={s.headerPhoneLink}>
            <a href="tel:7(962)556-1234">+7(962)556-1234</a>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
