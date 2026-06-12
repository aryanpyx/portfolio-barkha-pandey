import { useState } from 'react';
import './Fieldroot.css'; // We will create this or put styles in a style tag

const PRODUCTS = [
  { id: 1, name: 'Baby Spinach Bunch', farm: 'Sunrise Farm, Eugene OR', price: '$4.50', icon: '🥬', tags: ['organic', 'local'], color: '#f0fce8' },
  { id: 2, name: 'Meyer Lemons (4pk)', farm: 'Valley Sun Grove, Napa CA', price: '$5.20', icon: '🍋', tags: ['organic', 'vegan'], color: '#fff7e6' },
  { id: 3, name: 'Rainbow Carrots (1lb)', farm: 'Meadow Creek Farm, WA', price: '$3.80', icon: '🥕', tags: ['organic', 'local', 'gf'], color: '#fdecea' },
  { id: 4, name: 'Hass Avocados (2pk)', farm: 'Rancho Verde, Ventura CA', price: '$4.90', icon: '🥑', tags: ['organic', 'vegan', 'local'], color: '#f4f0e4' },
  { id: 5, name: 'Wild Mushroom Mix', farm: 'Forest Floor Co., OR', price: '$8.40', icon: '🍄', tags: ['organic', 'gf', 'local'], color: '#f9f2e8' },
  { id: 6, name: 'Snap Peas (8oz)', farm: 'Green Knoll Farm, WA', price: '$3.20', icon: '🫛', tags: ['organic', 'vegan', 'gf'], color: '#eaf4e2' },
];

export default function Fieldroot() {
  const [cartCount, setCartCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [animatingBtn, setAnimatingBtn] = useState<number | null>(null);

  const handleAddToCart = (id: number) => {
    setCartCount(prev => prev + 1);
    setAnimatingBtn(id);
    setTimeout(() => {
      setAnimatingBtn(null);
    }, 900);
  };

  const filteredProducts = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.tags.includes(activeFilter));

  const sendPrompt = (prompt: string) => {
    console.log("Send prompt:", prompt);
  };

  return (
    <div className="ft-root">
      <nav className="ft-nav">
        <div className="ft-logo">
          <div className="ft-logo-leaf">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13C5 9 9 5 14 3C12 8 8 12 3 13Z" fill="#e8f0df"/><path d="M3 13C4 11 6 10 8 10" stroke="#b4d190" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          Fieldroot
        </div>
        <ul className="ft-nav-links">
          <li><a href="#">Shop</a></li>
          <li><a href="#">Farms</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Subscriptions</a></li>
          <li><a href="#" className="ft-nav-cta">Start your box <span className="cart-count">{cartCount}</span></a></li>
        </ul>
      </nav>

      <section className="ft-hero">
        <div className="ft-hero-text">
          <div className="ft-tag">
            <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="#4a7a32"/></svg>
            Harvested this morning
          </div>
          <h1>Eat what the<br/><em>season grows.</em></h1>
          <p>Seasonal produce sourced directly from family farms within 150 miles of your door. No cold-chain shortcuts. No wax. Just honest food.</p>
          <div className="ft-hero-btns">
            <button className="ft-btn-primary" onClick={() => sendPrompt('Build me the full subscription flow for Fieldroot')}>Build your box</button>
            <button className="ft-btn-secondary" onClick={() => sendPrompt('Show me the farms behind Fieldroot')}>Meet our farmers</button>
          </div>
        </div>
        <div className="ft-hero-img">
          <svg className="ft-hero-img-scene" viewBox="0 0 340 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect width="340" height="460" fill="#c8d8a8"/>
            <ellipse cx="170" cy="520" rx="260" ry="180" fill="#9ab87a"/>
            <ellipse cx="170" cy="380" rx="200" ry="120" fill="#7aa05a"/>

            <rect x="60" y="200" width="18" height="120" rx="4" fill="#5a7840"/>
            <ellipse cx="69" cy="185" rx="28" ry="36" fill="#6a9a4a"/>
            <ellipse cx="69" cy="170" rx="20" ry="28" fill="#7ab45a"/>
            <ellipse cx="55" cy="190" rx="16" ry="22" fill="#6aa048"/>
            <ellipse cx="83" cy="186" rx="15" ry="20" fill="#6aa048"/>

            <rect x="240" y="210" width="18" height="110" rx="4" fill="#5a7840"/>
            <ellipse cx="249" cy="195" rx="26" ry="34" fill="#6a9a4a"/>
            <ellipse cx="249" cy="180" rx="18" ry="26" fill="#7ab45a"/>

            <ellipse cx="170" cy="285" rx="70" ry="50" fill="#f5efe0"/>
            <ellipse cx="152" cy="270" rx="28" ry="24" fill="#e8501a" opacity="0.9"/>
            <ellipse cx="190" cy="278" rx="24" ry="20" fill="#e8501a" opacity="0.85"/>
            <ellipse cx="168" cy="295" rx="22" ry="18" fill="#cc3a10" opacity="0.9"/>

            <ellipse cx="152" cy="270" rx="4" ry="6" fill="#3a1a0a"/>
            <ellipse cx="190" cy="278" rx="3.5" ry="5.5" fill="#3a1a0a"/>
            <ellipse cx="168" cy="295" rx="3.5" ry="5" fill="#3a1a0a"/>

            <path d="M90 250 Q110 230 130 255" stroke="#4a7a32" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="116" cy="238" rx="14" ry="10" fill="#5a9830" transform="rotate(-20,116,238)"/>
            <path d="M200 240 Q220 220 240 248" stroke="#4a7a32" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="226" cy="228" rx="13" ry="9" fill="#5a9830" transform="rotate(15,226,228)"/>

            <rect x="130" y="80" width="80" height="60" rx="8" fill="rgba(255,255,255,0.85)"/>
            <text x="170" y="104" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="11" fill="#1e2a14" fontStyle="italic">Sunrise Farm</text>
            <text x="170" y="120" textAnchor="middle" fontFamily="Nunito, sans-serif" fontSize="9" fill="#6b6248">Est. 1987 · Oregon</text>
            <rect x="148" y="126" width="44" height="6" rx="3" fill="#4a7a32"/>
            <text x="170" y="132" textAnchor="middle" fontFamily="Nunito, sans-serif" fontSize="7" fill="#fff" fontWeight="700">CERTIFIED ORGANIC</text>

            <circle cx="96" cy="150" r="18" fill="rgba(255,255,255,0.8)"/>
            <text x="96" y="155" textAnchor="middle" fontSize="16">🌿</text>
            <circle cx="245" cy="155" r="18" fill="rgba(255,255,255,0.8)"/>
            <text x="245" y="160" textAnchor="middle" fontSize="16">☀️</text>
          </svg>
        </div>
      </section>

      <div className="ft-stats-bar">
        <div className="ft-stat"><span className="ft-stat-num">47</span><span className="ft-stat-label">Partner farms</span></div>
        <div className="ft-stat"><span className="ft-stat-num">150mi</span><span className="ft-stat-label">Max distance</span></div>
        <div className="ft-stat"><span className="ft-stat-num">100%</span><span className="ft-stat-label">Certified organic</span></div>
        <div className="ft-stat"><span className="ft-stat-num">0</span><span className="ft-stat-label">Preservatives</span></div>
        <div className="ft-stat"><span className="ft-stat-num">14k+</span><span className="ft-stat-label">Happy households</span></div>
      </div>

      <section className="ft-section">
        <div className="ft-section-header">
          <h2>Shop by what matters to you</h2>
          <p>Every item is tagged so you can filter by how you eat.</p>
        </div>

        <div className="ft-badges">
          <div className={`ft-badge organic ${activeFilter === 'all' ? 'active-filter' : ''}`} onClick={() => setActiveFilter('all')}>
            <div className="ft-badge-icon"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M9 2C5 4 3 8 5 13C7 11 10 9 14 8C11 12 9 15 5 16C9 17 14 14 15 9C16 4 12 1 9 2Z" fill="#4a7a32"/></svg></div>
            All Organic
          </div>
          <div className={`ft-badge vegan ${activeFilter === 'vegan' ? 'active-filter' : ''}`} onClick={() => setActiveFilter('vegan')}>
            <div className="ft-badge-icon"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="6" fill="none" stroke="#7a5a10" strokeWidth="1.5"/><text x="9" y="13" textAnchor="middle" fontSize="9" fill="#7a5a10" fontFamily="Nunito,sans-serif" fontWeight="700">V</text></svg></div>
            Vegan
          </div>
          <div className={`ft-badge gluten ${activeFilter === 'gf' ? 'active-filter' : ''}`} onClick={() => setActiveFilter('gf')}>
            <div className="ft-badge-icon"><svg width="18" height="18" viewBox="0 0 18 18"><rect x="3" y="3" width="12" height="12" rx="3" fill="none" stroke="#8a2b1e" strokeWidth="1.5"/><text x="9" y="13" textAnchor="middle" fontSize="8" fill="#8a2b1e" fontFamily="Nunito,sans-serif" fontWeight="700">GF</text></svg></div>
            Gluten-Free
          </div>
          <div className={`ft-badge local ${activeFilter === 'local' ? 'active-filter' : ''}`} onClick={() => setActiveFilter('local')}>
            <div className="ft-badge-icon"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M9 2C6.2 2 4 4.2 4 7C4 11 9 16 9 16C9 16 14 11 14 7C14 4.2 11.8 2 9 2ZM9 9C7.9 9 7 8.1 7 7C7 5.9 7.9 5 9 5C10.1 5 11 5.9 11 7C11 8.1 10.1 9 9 9Z" fill="#1a5a7a"/></svg></div>
            Locally Sourced
          </div>
        </div>

        <div className="ft-products">
          {filteredProducts.map(product => (
            <div key={product.id} className="ft-product-card">
              <div className="ft-product-img" style={{background: product.color}}>{product.icon}</div>
              <div className="ft-product-body">
                <div className="ft-product-tags">
                  {product.tags.includes('organic') && <span className="ft-mini-tag mt-org">Organic</span>}
                  {product.tags.includes('vegan') && <span className="ft-mini-tag mt-veg">Vegan</span>}
                  {product.tags.includes('local') && <span className="ft-mini-tag mt-loc">Local</span>}
                  {product.tags.includes('gf') && <span className="ft-mini-tag mt-gf" style={{background: '#fdecea', color: '#8a2b1e'}}>GF</span>}
                </div>
                <p className="ft-product-name">{product.name}</p>
                <p className="ft-product-farm">{product.farm}</p>
                <div className="ft-product-footer">
                  <span className="ft-price">{product.price}</span>
                  <button 
                    className="ft-add-btn" 
                    onClick={() => handleAddToCart(product.id)}
                    style={{ background: animatingBtn === product.id ? '#3b5e2a' : '' }}
                  >
                    {animatingBtn === product.id ? '✓' : '+'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ft-how">
        <div className="ft-section-header">
          <h2>How your box gets to you</h2>
          <p>Four simple steps from the soil to your kitchen.</p>
        </div>
        <div className="ft-steps">
          <div className="ft-divider"></div>
          <div className="ft-step">
            <div className="ft-step-num">1</div>
            <h3>Choose your box</h3>
            <p>Pick a size and frequency that fits your household.</p>
          </div>
          <div className="ft-step">
            <div className="ft-step-num">2</div>
            <h3>Farms harvest fresh</h3>
            <p>Produce is cut 12–24 hours before your delivery window.</p>
          </div>
          <div className="ft-step">
            <div className="ft-step-num">3</div>
            <h3>We pack with care</h3>
            <p>100% compostable insulation. Zero plastic wrap.</p>
          </div>
          <div className="ft-step">
            <div className="ft-step-num">4</div>
            <h3>Doorstep delivery</h3>
            <p>Same-day delivery windows. Skip, pause, or cancel anytime.</p>
          </div>
        </div>
      </section>

      <section className="ft-sub-section">
        <div className="ft-section-header">
          <h2>Pick your subscription</h2>
          <p>Every box includes a seasonal recipe card and farm notes.</p>
        </div>
        <div className="ft-sub-cards">
          <div className="ft-sub-card" onClick={() => sendPrompt('Tell me more about the Seedling box subscription')}>
            <h3>Seedling</h3>
            <div className="ft-sub-price">$29<span>/week</span></div>
            <p className="ft-sub-desc">For 1–2 people. A curated selection of 6–8 seasonal items.</p>
            <ul className="ft-sub-features">
              <li><span className="ft-check">✓</span>6–8 items per box</li>
              <li><span className="ft-check">✓</span>Weekly or bi-weekly</li>
              <li><span className="ft-check">✓</span>Free delivery</li>
              <li><span className="ft-check">✓</span>Skip anytime</li>
            </ul>
            <button className="ft-btn-secondary" style={{width: '100%'}}>Choose Seedling</button>
          </div>
          <div className="ft-sub-card popular" onClick={() => sendPrompt('Sign me up for the Harvest box subscription')}>
            <div className="ft-popular-badge">Most popular</div>
            <h3>Harvest</h3>
            <div className="ft-sub-price">$52<span>/week</span></div>
            <p className="ft-sub-desc">For 3–4 people. Broader selection with protein add-ons available.</p>
            <ul className="ft-sub-features">
              <li><span className="ft-check">✓</span>10–14 items per box</li>
              <li><span className="ft-check">✓</span>Weekly delivery</li>
              <li><span className="ft-check">✓</span>Free delivery + priority slot</li>
              <li><span className="ft-check">✓</span>Customize up to 4 swaps</li>
            </ul>
            <button className="ft-btn-primary" style={{width: '100%'}}>Choose Harvest</button>
          </div>
          <div className="ft-sub-card" onClick={() => sendPrompt('Tell me more about the Orchard box subscription')}>
            <h3>Orchard</h3>
            <div className="ft-sub-price">$88<span>/week</span></div>
            <p className="ft-sub-desc">For families of 5+. Chef-curated boxes with full recipe plans.</p>
            <ul className="ft-sub-features">
              <li><span className="ft-check">✓</span>18–22 items per box</li>
              <li><span className="ft-check">✓</span>Weekly + mid-week refresh</li>
              <li><span className="ft-check">✓</span>Dedicated farm sourcing</li>
              <li><span className="ft-check">✓</span>Full swap freedom</li>
            </ul>
            <button className="ft-btn-secondary" style={{width: '100%'}}>Choose Orchard</button>
          </div>
        </div>
      </section>

      <footer className="ft-footer">
        <span className="ft-footer-logo">Fieldroot</span>
        <ul className="ft-footer-links">
          <li><a href="#">Our farms</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <span style={{fontSize: '12px', color: '#6a7a58'}}>© 2026 Fieldroot · All rights reserved</span>
      </footer>
    </div>
  );
}
