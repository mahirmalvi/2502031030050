// ═══════════════════════════════════
//  EasyMart — shared.js
// ═══════════════════════════════════

const PRODUCTS = [
  {id:1,name:'Apple',brand:'PureLife',cat:'Fruits',price:60,was:75,disc:20,rating:4.2,reviews:152,img:'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&q=80',stock:true,desc:'Crisp Himachal Pradesh apples rich in fiber and antioxidants.'},
  {id:2,name:'Banana',brand:'PremiumSelect',cat:'Fruits',price:52,was:104,disc:50,rating:3.5,reviews:190,img:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80',stock:true,desc:'Farm-fresh Robusta bananas packed with potassium.'},
  {id:3,name:'Orange',brand:'EcoFresh',cat:'Fruits',price:152,was:190,disc:20,rating:4.3,reviews:97,img:'https://images.unsplash.com/photo-1547514701-42782101795e?w=500&q=80',stock:true,desc:'Juicy Nagpur oranges bursting with Vitamin C.'},
  {id:4,name:'Mango',brand:'FreshMart',cat:'Fruits',price:113,was:189,disc:40,rating:4.6,reviews:314,img:'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80',stock:true,desc:'Premium Alphonso mangoes from Ratnagiri.'},
  {id:5,name:'Grapes',brand:'FreshMart',cat:'Fruits',price:353,was:416,disc:15,rating:3.7,reviews:460,img:'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&q=80',stock:true,desc:'Seedless green grapes with a perfect balance of sweet and tart.'},
  {id:6,name:'Strawberry',brand:'PremiumSelect',cat:'Fruits',price:181,was:302,disc:40,rating:4.3,reviews:368,img:'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&q=80',stock:true,desc:'Fresh plump strawberries from Mahabaleshwar.'},
  {id:7,name:'Watermelon',brand:'NaturePlus',cat:'Fruits',price:89,was:120,disc:25,rating:4.5,reviews:220,img:'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80',stock:true,desc:'Sweet juicy watermelon – the ultimate summer refresher.'},
  {id:8,name:'Pineapple',brand:'EcoFresh',cat:'Fruits',price:99,was:149,disc:33,rating:4.2,reviews:178,img:'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&q=80',stock:true,desc:'Golden ripe pineapples with a perfect sweet-tart balance.'},
  {id:9,name:'Tomato',brand:'FarmFresh',cat:'Vegetables',price:35,was:50,disc:30,rating:4.4,reviews:256,img:'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&q=80',stock:true,desc:'Bright red vine-ripened tomatoes with a rich tangy flavor.'},
  {id:10,name:'Spinach',brand:'OrganicVale',cat:'Vegetables',price:28,was:40,disc:30,rating:4.6,reviews:189,img:'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80',stock:true,desc:'Tender organic baby spinach leaves – iron and vitamins packed.'},
  {id:11,name:'Broccoli',brand:'GreenChoice',cat:'Vegetables',price:89,was:110,disc:19,rating:4.3,reviews:134,img:'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&q=80',stock:true,desc:'Fresh broccoli florets, rich in vitamin K and C.'},
  {id:12,name:'Carrot',brand:'FarmFresh',cat:'Vegetables',price:45,was:65,disc:31,rating:4.1,reviews:298,img:'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80',stock:true,desc:'Crunchy sweet carrots loaded with beta-carotene.'},
  {id:13,name:'Capsicum',brand:'EcoFresh',cat:'Vegetables',price:65,was:90,disc:28,rating:4.0,reviews:167,img:'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=500&q=80',stock:false,desc:'Colorful bell peppers – sweet and crunchy.'},
  {id:14,name:'Full Cream Milk',brand:'Amul',cat:'Dairy',price:68,was:72,disc:5,rating:4.8,reviews:892,img:'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80',stock:true,desc:'Amul full cream fresh milk, pasteurized and homogenized.'},
  {id:15,name:'Paneer',brand:'Mother Dairy',cat:'Dairy',price:98,was:115,disc:15,rating:4.5,reviews:543,img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80',stock:true,desc:'Fresh firm cottage cheese made from pure cow milk.'},
  {id:16,name:'Butter',brand:'Amul',cat:'Dairy',price:55,was:60,disc:8,rating:4.7,reviews:724,img:'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&q=80',stock:true,desc:"Amul salted butter – India's most loved butter brand."},
  {id:17,name:'Whole Wheat Bread',brand:'Britannia',cat:'Bakery',price:42,was:50,disc:16,rating:4.3,reviews:312,img:'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80',stock:true,desc:'Soft nutritious whole wheat bread baked fresh daily.'},
  {id:18,name:'Croissant',brand:'French Bakery',cat:'Bakery',price:89,was:110,disc:19,rating:4.6,reviews:145,img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80',stock:true,desc:'Flaky buttery croissants baked fresh every morning.'},
  {id:19,name:'Momos',brand:'OrganicVale',cat:'Snacks',price:88,was:147,disc:40,rating:4.7,reviews:286,img:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&q=80',stock:true,desc:'Steamed vegetable momos with a light pillowy dough.'},
  {id:20,name:'Spring Roll',brand:'FarmFresh',cat:'Snacks',price:84,was:120,disc:30,rating:4.7,reviews:134,img:'https://images.unsplash.com/photo-1607332100604-5ac7db0db571?w=500&q=80',stock:true,desc:'Crispy golden spring rolls stuffed with fresh vegetables.'},
  {id:21,name:'Samosa',brand:'EcoFresh',cat:'Snacks',price:201,was:224,disc:10,rating:3.6,reviews:233,img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80',stock:true,desc:'Classic potato samosas with a perfectly crispy crust.'},
  {id:22,name:'Pakora',brand:'NaturePlus',cat:'Snacks',price:112,was:161,disc:0,rating:4.0,reviews:227,img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=500&q=80',stock:false,desc:'Crispy mixed vegetable pakoras in seasoned chickpea batter.'},
  {id:23,name:'Poha',brand:'PremiumSelect',cat:'Breakfast',price:169,was:226,disc:25,rating:4.8,reviews:474,img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80',stock:true,desc:'Light fluffy flattened rice cooked with onions and curry leaves.'},
  {id:24,name:'Upma',brand:'NaturePlus',cat:'Breakfast',price:153,was:192,disc:20,rating:4.6,reviews:292,img:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80',stock:true,desc:'Savory semolina porridge cooked with vegetables.'},
  {id:25,name:'Yogurt Bowl',brand:'PremiumSelect',cat:'Breakfast',price:154,was:206,disc:25,rating:4.8,reviews:423,img:'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',stock:true,desc:'Creamy Greek yogurt topped with fresh fruits, honey, and granola.'},
  {id:26,name:'Orange Juice',brand:'Tropicana',cat:'Beverages',price:85,was:99,disc:14,rating:4.4,reviews:378,img:'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80',stock:true,desc:'100% pure squeezed orange juice – no added sugar.'},
  {id:27,name:'Coconut Water',brand:'Raw Pressery',cat:'Beverages',price:60,was:75,disc:20,rating:4.5,reviews:289,img:'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&q=80',stock:true,desc:"Natural tender coconut water – nature's electrolyte drink."},
  {id:28,name:'Cut Fruits',brand:'EcoFresh',cat:'Ready',price:46,was:66,disc:30,rating:4.7,reviews:197,img:'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500&q=80',stock:true,desc:'Freshly cut seasonal fruits – washed, peeled, ready to eat.'},
  {id:29,name:'Soup',brand:'FreshMart',cat:'Ready',price:184,was:307,disc:40,rating:4.2,reviews:250,img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80',stock:true,desc:'Hot comforting vegetable soup, ready to heat and serve.'},
  {id:30,name:'Kebab',brand:'GreenChoice',cat:'Ready',price:378,was:445,disc:15,rating:4.9,reviews:184,img:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80',stock:true,desc:'Juicy seekh kebabs char-grilled to perfection.'},
  {id:31,name:'Ice Cream',brand:'Amul',cat:'IceCream',price:120,was:150,disc:20,rating:4.5,reviews:312,img:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&q=80',stock:true,desc:'Creamy rich ice cream in assorted flavors.'},
  {id:32,name:'Detergent',brand:'Surf Excel',cat:'Household',price:240,was:270,disc:11,rating:4.6,reviews:478,img:'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80',stock:true,desc:'Advanced stain-removing detergent for all fabric types.'},
];

const CATS = [
  {id:'Fruits',label:'Fruits',emoji:'🍎'},
  {id:'Vegetables',label:'Vegetables',emoji:'🥕'},
  {id:'Dairy',label:'Dairy',emoji:'🥛'},
  {id:'Bakery',label:'Bakery',emoji:'🍞'},
  {id:'Snacks',label:'Snacks',emoji:'🍿'},
  {id:'Beverages',label:'Beverages',emoji:'🥤'},
  {id:'Breakfast',label:'Breakfast',emoji:'🥞'},
  {id:'Ready',label:'Ready to Eat',emoji:'🥡'},
  {id:'IceCream',label:'Ice Cream',emoji:'🍦'},
  {id:'Household',label:'Household',emoji:'🏠'},
];

// ─ STORAGE HELPERS ─
function getCart() { try { return JSON.parse(localStorage.getItem('em_cart') || '[]'); } catch(e){ return []; } }
function saveCart(c) { localStorage.setItem('em_cart', JSON.stringify(c)); }
function getWish() { try { return JSON.parse(localStorage.getItem('em_wish') || '[]'); } catch(e){ return []; } }
function saveWish(w) { localStorage.setItem('em_wish', JSON.stringify(w)); }
function getUser() { try { return JSON.parse(localStorage.getItem('em_user') || 'null'); } catch(e){ return null; } }
function saveUser(u) { localStorage.setItem('em_user', JSON.stringify(u)); }

// ─ CART BADGE ─
function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s,i) => s + i.qty, 0);
  const badge = document.querySelector('.cart-badge');
  if (badge) { badge.textContent = total; badge.classList.toggle('show', total > 0); }
}

// ─ ADD TO CART ─
function addCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || !p.stock) return;
  const cart = getCart();
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({ id: p.id, name: p.name, brand: p.brand, price: p.price, was: p.was, disc: p.disc, img: p.img, qty: 1 });
  saveCart(cart);
  updateCartBadge();
  showToast(`✓ ${p.name} added to cart!`);
}

// ─ WISHLIST ─
function toggleWish(id, btn) {
  const p = PRODUCTS.find(x => x.id === id);
  const wish = getWish();
  const idx = wish.indexOf(id);
  if (idx === -1) { wish.push(id); showToast(`❤️ ${p.name} saved to wishlist!`); }
  else { wish.splice(idx, 1); showToast(`${p.name} removed from wishlist`); }
  saveWish(wish);
  if (btn) btn.classList.toggle('on', wish.includes(id));
  document.querySelectorAll(`.prod-heart[data-id="${id}"]`).forEach(b => b.classList.toggle('on', wish.includes(id)));
}

// ─ TOAST ─
let toastTimer;
function showToast(msg) {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

// ─ PRODUCT CARD HTML ─
function cardHTML(p) {
  const wish = getWish();
  const wished = wish.includes(p.id);
  return `
  <div class="prod-card">
    <div class="prod-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80'"/>
      ${p.disc ? `<div class="prod-badge">${p.disc}% OFF</div>` : ''}
      <button class="prod-heart ${wished ? 'on' : ''}" data-id="${p.id}" onclick="toggleWish(${p.id}, this)"><i class="fas fa-heart"></i></button>
      ${!p.stock ? `<div class="oos-overlay"><span>Out of Stock</span></div>` : ''}
    </div>
    <div class="prod-body">
      <div class="prod-brand">${p.brand}</div>
      <div class="prod-name" onclick="window.location='product.html?id=${p.id}'">${p.name}</div>
      <div class="prod-rating">
        <span class="r-chip"><i class="fas fa-star"></i> ${p.rating}</span>
        <span class="r-count">(${p.reviews})</span>
      </div>
      <div class="prod-price">
        <span class="p-now">₹${p.price}</span>
        ${p.was ? `<span class="p-was">₹${p.was}</span>` : ''}
      </div>
      <button class="add-btn" onclick="addCart(${p.id})" ${!p.stock ? 'disabled' : ''}>
        <i class="fas fa-${p.stock ? 'shopping-cart' : 'times'}"></i>
        ${p.stock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  </div>`;
}

// ─ AUTH UI ─
function updateAuthUI() {
  const user = getUser();
  const btn = document.getElementById('loginBtn');
  if (!btn) return;
  if (user) {
    btn.innerHTML = `<i class="fas fa-user"></i> ${user.name.substring(0,10)}`;
    btn.href = 'profile.html';
  } else {
    btn.innerHTML = `<i class="fas fa-user"></i> Login`;
    btn.href = '#';
    btn.onclick = (e) => { e.preventDefault(); openOverlay('loginModal'); };
  }
}

// ─ MODALS ─
function openOverlay(id) { const el = document.getElementById(id); if(el) el.classList.add('open'); }
function closeOverlay(id) { const el = document.getElementById(id); if(el) el.classList.remove('open'); }

function doLogin() {
  const email = document.getElementById('lEmail').value.trim();
  const pass = document.getElementById('lPass').value;
  if (!email || !pass) { showToast('Please fill in all fields'); return; }
  if (pass.length < 4) { showToast('Password must be at least 4 characters'); return; }
  const name = email.split('@')[0];
  saveUser({ name, email });
  updateAuthUI();
  closeOverlay('loginModal');
  showToast(`✓ Welcome back, ${name}!`);
}

function doSignup() {
  const name = document.getElementById('sName').value.trim();
  const email = document.getElementById('sEmail').value.trim();
  const pass = document.getElementById('sPass').value;
  const pass2 = document.getElementById('sPass2').value;
  if (!name || !email || !pass || !pass2) { showToast('Please fill all fields'); return; }
  if (pass !== pass2) { showToast('Passwords do not match!'); return; }
  if (pass.length < 4) { showToast('Password must be 4+ characters'); return; }
  saveUser({ name, email });
  updateAuthUI();
  closeOverlay('signupModal');
  showToast(`🎉 Welcome to EasyMart, ${name}!`);
}

function togglePw(id) {
  const inp = document.getElementById(id);
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

// ─ NAVBAR + MODALS HTML (injected into every page) ─
function injectShell() {
  const promoBar = `
  <div class="promo-bar">
    <span><span class="promo-dot"></span>🎉 50% OFF first order! Use code <strong>FIRST50</strong></span>
    <span>Free delivery on orders above ₹499 🚀</span>
    <span>📞 1800-123-4567</span>
  </div>`;

  const navbar = `
  <nav class="navbar">
    <a class="nav-logo" href="index.html">
      <div class="logo-mark">E</div>
      <span class="logo-text">EasyMart</span>
    </a>
    <div class="nav-loc">
      <i class="fas fa-map-marker-alt"></i>
      <div><small>Deliver to</small><strong>Select Location</strong></div>
    </div>
    <div class="search-wrap">
      <i class="fas fa-search"></i>
      <input class="search-input" id="searchInput" placeholder="Search products…" onkeydown="if(event.key==='Enter')doSearch(this.value)"/>
    </div>
    <div class="nav-actions">
      <a class="nav-cats-btn" href="categories.html"><i class="fas fa-th"></i> Categories</a>
      <a class="icon-btn" href="wishlist.html" title="Wishlist"><i class="fas fa-heart"></i></a>
      <a class="icon-btn" href="cart.html" title="Cart">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-badge" id="cartBadge">0</span>
      </a>
      <a class="login-btn" id="loginBtn" href="#">
        <i class="fas fa-user"></i> Login
      </a>
    </div>
  </nav>`;

  const loginModal = `
  <div class="overlay" id="loginModal">
    <div class="modal">
      <button class="m-close" onclick="closeOverlay('loginModal')">✕</button>
      <div class="m-head">
        <div class="m-logo">E</div>
        <h2>Welcome Back!</h2>
        <p>Login to your EasyMart account</p>
      </div>
      <div class="fg"><label>Email</label><div class="inp-wrap"><i class="fas fa-envelope inp-icon"></i><input type="email" id="lEmail" placeholder="your@email.com"/></div></div>
      <div class="fg"><label>Password</label><div class="inp-wrap"><i class="fas fa-lock inp-icon"></i><input type="password" id="lPass" placeholder="Enter password"/><button class="pw-eye" onclick="togglePw('lPass')"><i class="fas fa-eye"></i></button></div></div>
      <div class="frow"><label class="check-label"><input type="checkbox"/> Remember me</label><a href="#" class="forgot-link">Forgot password?</a></div>
      <button class="m-btn" onclick="doLogin()">Login</button>
      <div class="or-sep">Or</div>
      <button class="google-btn"><i class="fab fa-google"></i> Continue with Google</button>
      <p class="switch-txt">No account? <a href="#" onclick="closeOverlay('loginModal');openOverlay('signupModal')">Sign up</a></p>
    </div>
  </div>`;

  const signupModal = `
  <div class="overlay" id="signupModal">
    <div class="modal">
      <button class="m-close" onclick="closeOverlay('signupModal')">✕</button>
      <div class="m-head">
        <div class="m-logo">E</div>
        <h2>Create Account</h2>
        <p>Sign up to get started</p>
      </div>
      <div class="fg"><label>Full Name</label><div class="inp-wrap"><i class="fas fa-user inp-icon"></i><input type="text" id="sName" placeholder="John Doe"/></div></div>
      <div class="fg"><label>Email</label><div class="inp-wrap"><i class="fas fa-envelope inp-icon"></i><input type="email" id="sEmail" placeholder="your@email.com"/></div></div>
      <div class="fg"><label>Phone</label><div class="inp-wrap"><i class="fas fa-phone inp-icon"></i><input type="text" id="sPhone" placeholder="+91 1234567890"/></div></div>
      <div class="fg"><label>Password</label><div class="inp-wrap"><i class="fas fa-lock inp-icon"></i><input type="password" id="sPass" placeholder="Create password"/><button class="pw-eye" onclick="togglePw('sPass')"><i class="fas fa-eye"></i></button></div></div>
      <div class="fg"><label>Confirm Password</label><div class="inp-wrap"><i class="fas fa-lock inp-icon"></i><input type="password" id="sPass2" placeholder="Confirm password"/><button class="pw-eye" onclick="togglePw('sPass2')"><i class="fas fa-eye"></i></button></div></div>
      <button class="m-btn" onclick="doSignup()">Create Account</button>
      <div class="or-sep">Or</div>
      <button class="google-btn"><i class="fab fa-google"></i> Continue with Google</button>
      <p class="switch-txt">Already have account? <a href="#" onclick="closeOverlay('signupModal');openOverlay('loginModal')">Login</a></p>
    </div>
  </div>`;

  const footer = `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="display:flex;align-items:center;gap:9px"><div class="logo-mark">E</div><span class="logo-text">EasyMart</span></div>
        <p>Your one-stop shop for all daily needs. Fresh products delivered in minutes.</p>
        <div class="socials">
          <a class="soc-btn" href="#"><i class="fab fa-facebook-f"></i></a>
          <a class="soc-btn" href="#"><i class="fab fa-twitter"></i></a>
          <a class="soc-btn" href="#"><i class="fab fa-instagram"></i></a>
          <a class="soc-btn" href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="fcol"><h4>Quick Links</h4><a href="index.html">Home</a><a href="categories.html">Categories</a><a href="products.html">All Products</a><a href="about.html">About Us</a><a href="contact.html">Contact</a></div>
      <div class="fcol"><h4>Categories</h4><a href="products.html?cat=Fruits">Fruits</a><a href="products.html?cat=Vegetables">Vegetables</a><a href="products.html?cat=Dairy">Dairy</a><a href="products.html?cat=Snacks">Snacks</a><a href="products.html?cat=Beverages">Beverages</a></div>
      <div class="fcol"><h4>Contact</h4><p><i class="fas fa-map-marker-alt"></i>123 Shopping Street, New Delhi – 110001</p><p><i class="fas fa-phone"></i>+91 1800 123 4567</p><p><i class="fas fa-envelope"></i>hello@easymart.in</p></div>
    </div>
    <div class="footer-bottom">© 2026 EasyMart. All rights reserved. Made with ❤️ in India</div>
  </footer>`;

  // Inject before body closes
  const header = document.createElement('header');
  header.innerHTML = promoBar + navbar;
  document.body.prepend(header);
  document.body.insertAdjacentHTML('beforeend', loginModal + signupModal + footer + '<div id="toast" class="toast"></div>');

  // Init
  updateCartBadge();
  updateAuthUI();

  // Close overlay on backdrop click
  document.querySelectorAll('.overlay').forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.querySelectorAll('.overlay').forEach(o => o.classList.remove('open'));
  });
}

function doSearch(q) {
  if (q.trim()) window.location = `products.html?q=${encodeURIComponent(q.trim())}`;
}
