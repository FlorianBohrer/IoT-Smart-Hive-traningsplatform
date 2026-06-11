
import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/button.css';

export default function Home() {
  return (
    <div className="screen">
      <div className="screen-image" />

      <div className="screen-content">
        <span className="headline">IoT-Bienenstock</span>
          {/* <span className="headline-sub"> */}
            Der Key <br /> zur smarten Imkerei.
          {/* </span> */}
          <div className="flex-grid-center">
            <Link to="/sensoren" className="fuller-button yellow">START</Link>
          </div>
        </div>
      </div>
  
  );
}
