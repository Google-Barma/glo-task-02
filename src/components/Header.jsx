import Wrapper from './Layouts/Wrapper';
import Logo from './Logo';

export default function Header() {
  return (
    <header>
      <Wrapper>
        <div className="header">
          <a href="#">
            <Logo className="header-logo" />
          </a>
          <a href="tel:888" className="header-phone"></a>
          <div className="header-phonelink">
            <a href="tel:7(962)556-1234">+7(962)556-1234</a>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
