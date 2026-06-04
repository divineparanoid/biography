import { FaGithub, FaTelegram } from 'react-icons/fa6';
import logoImg from './logo/king.png';

export default function App() {
  return (
    <div className="page-wrapper">
      <img src={logoImg} alt="Logo" className="card-image" />
      <div className="bg-text">king</div>

      <div className='bio-box'>
        <h2><span className='boxtitle'>about me</span></h2>
        <div className="bio-content">
          <p className="bio-nickname">upset</p>
          <p className="bio-row"><span>Начинающий в сфере osint \ csint \ socmint</span></p>
          <p className="bio-row"><span>Программный стэк:</span>golang \ python \ bash</p>
          <p className="bio-row"><span>статус:</span> программист</p>
          <p className="bio-row"><span>проект:</span> <a href="https://t.me/solcur">solcur.t.me</a></p>
        </div>
      </div>

      <div className="neon-box">
        <h2><span className='boxtitle'>social</span></h2>
        <div className='social-container'>
          <a href="https://github.com/divineparanoid" target='_blank' rel='noreferrer' className='social-btn'>
            <FaGithub size={24} />
          </a>
          <a href="https://t.me/upsettinggod" target="_blank" rel="noreferrer" className='social-btn'>
            <FaTelegram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
