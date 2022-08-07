import './App.css';

const productListPopuler = [
  { id: 1, image: '../images/mobile-legends.jpg'},
  { id: 2, image: 'free-fire.png'},
];

const sectionTitles = ['Populer', 'New Titles', 'Games', 'Entertainment'];

function App() {
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <div className="product-list-container">
            <h1>Populer</h1>
            <div>{sectionTitles.map(title => <h1 key={title}>{title}</h1>)}</div>
            <div className="product-list">
              {productListPopuler.map(populer => 
                <div className="card" key={populer.id}>
                  <img src={populer.image} alt=""/>
                </div>
              )}
            </div>
            <div className="product-list">
              <div className="card">
                <img src="../images/mobile-legends.jpg" alt="Mobile Legends" />
              </div>
              <div className="card">
                <img src="../images/free-fire.png" alt="Free Fire" />
              </div>
              <div className="card">
                <img src="../images/vidio.jpeg" alt="Vidio" />
              </div>
              <div className="card">
                <img src="../images/valorant.jpg" alt="Valorant" />
              </div>
              <div className="card">
                <img src="../images/genshin-impact.jpg" alt="Genshin Impact" />
              </div>
              <div className="card">
                <img src="../images/league-of-legends-wild-rift.png" alt="League of Legends: Wild Rift" />
              </div>
              <div className="card">
                <img src="../images/ragnarok-x.jpg" alt="Ragnarok X: Next Generation" />
              </div>
              <div className="card">
                <img src="../images/apex-legends.png" alt="Apex Legends Mobile" />
              </div>
              <div className="card">
                <img src="../images/zepeto.png" alt="Zepeto" />
              </div>
              <div className="card">
                <img src="../images/call-of-duty-mobile.jpg" alt="Call of Duty Mobile" />
              </div>
              <div className="card">
                <img src="../images/steam.jpg" alt="Steam Wallet Code" />
              </div>
              <div className="card">
                <img src="../images/google-play-voucher.jpg" alt="Google Play Voucher" />
              </div>
            </div>
          </div>
          <div className="product-list-container">
            <h1>New Titles</h1>
            <div className="product-list">
              <div className="card">
                <img src="../images/mobile-legends.jpg" alt="Mobile Legends" />
              </div>
              <div className="card">
                <img src="../images/free-fire.png" alt="Free Fire" />
              </div>
              <div className="card">
                <img src="../images/vidio.jpeg" alt="Vidio" />
              </div>
              <div className="card">
                <img src="../images/valorant.jpg" alt="Valorant" />
              </div>
              <div className="card">
                <img src="../images/genshin-impact.jpg" alt="Genshin Impact" />
              </div>
              <div className="card">
                <img src="../images/league-of-legends-wild-rift.png" alt="League of Legends: Wild Rift" />
              </div>
              <div className="card">
                <img src="../images/ragnarok-x.jpg" alt="Ragnarok X: Next Generation" />
              </div>
              <div className="card">
                <img src="../images/apex-legends.png" alt="Apex Legends Mobile" />
              </div>
              <div className="card">
                <img src="../images/zepeto.png" alt="Zepeto" />
              </div>
              <div className="card">
                <img src="../images/call-of-duty-mobile.jpg" alt="Call of Duty Mobile" />
              </div>
              <div className="card">
                <img src="../images/steam.jpg" alt="Steam Wallet Code" />
              </div>
              <div className="card">
                <img src="../images/google-play-voucher.jpg" alt="Google Play Voucher" />
              </div>
            </div>
          </div>
          <div className="product-list-container">
            <h1>Games</h1>
            <div className="product-list">
              <div className="card">
                <img src="../images/mobile-legends.jpg" alt="Mobile Legends" />
              </div>
              <div className="card">
                <img src="../images/free-fire.png" alt="Free Fire" />
              </div>
              <div className="card">
                <img src="../images/vidio.jpeg" alt="Vidio" />
              </div>
              <div className="card">
                <img src="../images/valorant.jpg" alt="Valorant" />
              </div>
              <div className="card">
                <img src="../images/genshin-impact.jpg" alt="Genshin Impact" />
              </div>
              <div className="card">
                <img src="../images/league-of-legends-wild-rift.png" alt="League of Legends: Wild Rift" />
              </div>
              <div className="card">
                <img src="../images/ragnarok-x.jpg" alt="Ragnarok X: Next Generation" />
              </div>
              <div className="card">
                <img src="../images/apex-legends.png" alt="Apex Legends Mobile" />
              </div>
              <div className="card">
                <img src="../images/zepeto.png" alt="Zepeto" />
              </div>
              <div className="card">
                <img src="../images/call-of-duty-mobile.jpg" alt="Call of Duty Mobile" />
              </div>
              <div className="card">
                <img src="../images/steam.jpg" alt="Steam Wallet Code" />
              </div>
              <div className="card">
                <img src="../images/google-play-voucher.jpg" alt="Google Play Voucher" />
              </div>
            </div>
          </div>
          <div className="product-list-container">
            <h1>Entertainment</h1>
            <div className="product-list">
              <div className="card">
                <img src="../images/mobile-legends.jpg" alt="Mobile Legends" />
              </div>
              <div className="card">
                <img src="../images/free-fire.png" alt="Free Fire" />
              </div>
              <div className="card">
                <img src="../images/vidio.jpeg" alt="Vidio" />
              </div>
              <div className="card">
                <img src="../images/valorant.jpg" alt="Valorant" />
              </div>
              <div className="card">
                <img src="../images/genshin-impact.jpg" alt="Genshin Impact" />
              </div>
              <div className="card">
                <img src="../images/league-of-legends-wild-rift.png" alt="League of Legends: Wild Rift" />
              </div>
              <div className="card">
                <img src="../images/ragnarok-x.jpg" alt="Ragnarok X: Next Generation" />
              </div>
              <div className="card">
                <img src="../images/apex-legends.png" alt="Apex Legends Mobile" />
              </div>
              <div className="card">
                <img src="../images/zepeto.png" alt="Zepeto" />
              </div>
              <div className="card">
                <img src="../images/call-of-duty-mobile.jpg" alt="Call of Duty Mobile" />
              </div>
              <div className="card">
                <img src="../images/steam.jpg" alt="Steam Wallet Code" />
              </div>
              <div className="card">
                <img src="../images/google-play-voucher.jpg" alt="Google Play Voucher" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
