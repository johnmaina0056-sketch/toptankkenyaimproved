const WA='254751511091';

const IMAGE_PATHS = window.TOP_TANK_IMAGE_PATHS || { hero: '', categories: {}, products: {} };;
function imageSlot(path, label, className='image-placeholder') {
  return path
    ? `<img class="${className}-photo" src="${path}" alt="${label}" loading="lazy">`
    : `<div class="${className}" role="img" aria-label="Image placeholder for ${label}"><span>ADD IMAGE</span><small>${label}</small></div>`;
}
const cats=[
 {key:'tanks',name:'Tanks',icon:`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 4C24 4 10 20 10 29.5A14 14 0 0 0 38 29.5C38 20 24 4 24 4Z" fill="currentColor"/><path d="M17 31c1.6 3.4 4 5 7.3 5" fill="none" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/></svg>`,url:'https://www.toptank.com/product-category/tanks/'},
 {key:'lifestyle',name:'Lifestyle',icon:`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 36c8-1 15-7 19-15 2.5-5 4.7-9.5 9-12-1.1 7.8-3.7 16-10 21.5C24 35.5 18 38 11 36Z" fill="currentColor"/><path d="M12 38c8-8 15-12 25-15" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>`,url:'https://www.toptank.com/product-category/lifestyle/'},
 {key:'bins',name:'Bins',icon:`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M14 15h20l-1.5 26h-17L14 15Z" fill="currentColor"/><path d="M11 11h26v4H11zM19 7h10v4H19z" fill="currentColor"/><path d="M20 20v15M28 20v15" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>`,url:'https://www.toptank.com/product-category/bins/'},
 {key:'road',name:'Road Safety & Industrial',icon:`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17 43 21 5h6l4 38h-6l-1-10h-2l-1 10h-4Z" fill="currentColor"/><path d="M22 30h4M21 21h6M20 12h8" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>`,url:'https://www.toptank.com/product-category/road-safety/'},
 {key:'sanitation',name:'Sanitation',icon:`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 28c-5 0-9-3-9-8 0-4 2-7 5-9 2 2 4 4 5 7 1-5 4-8 8-10 2 4 3 8 2 12-1 5-5 8-11 8Z" fill="currentColor"/><path d="M20 27c-4 2-7 6-7 11M28 28c5 2 8 5 8 10M24 29v12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,url:'https://www.toptank.com/product-category/sanitation/'}
];
function p(name,price,img='',category='tanks',capacity='',desc='TopTank quality product designed for durable everyday use.') {return {id:(category+'-'+name).toLowerCase().replace(/[^a-z0-9]+/g,'-'),name,price,img:'',category,capacity,desc}}
const data={
tanks:[p('1,000l Deluxe Cylindrical Tank',16100,'tank','tanks','1,000'),p('1,000l Standard Cylindrical Tank',12700,'tank','tanks','1,000'),p('1,000litre Nestable Tank',16500,'rect','tanks','1,000'),p('1,000litre Rectangular Loft Tank',17000,'rect','tanks','1,000'),p('1,000litre Underground Spherical Tank',28500,'tank','tanks','1,000'),p('1,350l Standard Cylindrical Tank',15500,'tank','tanks','1,350'),p('1,500l Deluxe Cylindrical Tank',23000,'tank','tanks','1,500'),p('1,500l Standard Cylindrical Tank',14900,'tank','tanks','1,500'),p('1,900l Deluxe Cylindrical Tank',27000,'tank','tanks','1,900'),p('1,900l Standard Cylindrical Tank',19500,'tank','tanks','1,900'),p('2,000l Deluxe Cylindrical Tank',28700,'tank','tanks','2,000'),p('2,000l Standard Cylindrical Tank',19500,'tank','tanks','2,000'),p('2,000litre Horizontal Septic Tank',55200,'rect','tanks','2,000'),p('2,000litre Nestable Tank',32500,'rect','tanks','2,000'),p('2,000litre Underground Spherical Tank',55200,'tank','tanks','2,000'),p('2,300l Standard Cylindrical Tank',20700,'tank','tanks','2,300'),p('2,500l Deluxe Cylindrical Tank',35500,'tank','tanks','2,500'),p('2,500l Standard Cylindrical Tank',29500,'tank','tanks','2,500'),p('3,000l Deluxe Cylindrical Tank',42000,'tank','tanks','3,000'),p('3,000l Standard Cylindrical Tank',35000,'tank','tanks','3,000'),p('5,000l Deluxe Cylindrical Tank',74500,'tank','tanks','5,000'),p('5,000l Standard Cylindrical Tank',50000,'tank','tanks','5,000'),p('6,000l Deluxe Cylindrical Tank',90200,'tank','tanks','6,000'),p('6,000l Standard Cylindrical Tank',61500,'tank','tanks','6,000'),p('7,500l Deluxe Cylindrical Tank',110500,'tank','tanks','7,500'),p('7,500l Standard Cylindrical Tank',83900,'tank','tanks','7,500'),p('8,000l Deluxe Cylindrical Tank',121500,'tank','tanks','8,000'),p('8,000l Standard Cylindrical Tank',85000,'tank','tanks','8,000'),p('10,000l Deluxe Cylindrical Tank',155250,'tank','tanks','10,000'),p('10,000l Standard Cylindrical Tank',107500,'tank','tanks','10,000'),p('12,000l Deluxe Cylindrical Tank',211000,'tank','tanks','12,000'),p('12,000l Standard Cylindrical Tank',169500,'tank','tanks','12,000'),p('15,000l Deluxe Cylindrical Tank',274500,'tank','tanks','15,000'),p('15,000l Standard Cylindrical Tank',230000,'tank','tanks','15,000'),p('16,000l Standard Cylindrical Tank',265000,'tank','tanks','16,000'),p('20,000l Deluxe Cylindrical Tank',365000,'tank','tanks','20,000'),p('24,000l Deluxe Cylindrical Tank',455000,'tank','tanks','24,000')],
lifestyle:[p('Round Planter Pot – Matt Finish | 46cm(H) x 45cm(D)',4500,'planter','lifestyle'),p('Round Bowl Planter – Matt Finish | 30cm(D) x 15cm(H)',1150,'planter','lifestyle'),p('Round Ribbed Planter – Matt Finish | 36cm(D) x 37cm(H)',2300,'planter','lifestyle'),p('Small Round Textured Cylinder Planter – 32cm x 50cm',3400,'blackplanter','lifestyle'),p('TopPlanter: Medium Square Planter – 61x56cm',8200,'blackplanter','lifestyle'),p('TopPlanter: Medium Tall Angular Planter – 61x33cm',5450,'blackplanter','lifestyle'),p('TopPlanter: Rectangular Step Planter – 106x36x31cm',5100,'rect','lifestyle'),p('Wide Rectangular Beige Planter Box – 77cm(H) x 89cm(W)',19600,'planter','lifestyle'),p('Tapered Round Planter – Matt Finish | 45cm x 48cm',4500,'planter','lifestyle'),p('Tall Rectangular Beige Planter – 75cm x 32cm',8900,'planter','lifestyle'),p('Small Square V-Shape Textured Planter – 30x30x61cm',4000,'blackplanter','lifestyle'),p('TopPlanter: Large Round Planter – 76x76cm',11500,'planter','lifestyle')],
bins:[p('1,100litre Garbage Bin with Wheels',56300,'bin','bins','1,100'),p('120litre Garbage Bin with Wheels',12500,'bluebin','bins','120'),p('180litre Garbage Bin with Wheels',16500,'bin','bins','180'),p('240litre Garbage Bin with Wheels',21500,'redbin','bins','240'),p('360litre Garbage Bin with Wheels',25300,'bluebin','bins','360'),p('60litre Garbage Bin With Foot Pedal',8600,'bin','bins','60'),p('750litre Garbage Bin with Wheels',50500,'bluebin','bins','750'),p('90litre Garbage Bin With Wheels & Handle',12000,'redbin','bins','90'),p('90litre Garbage Bin With Wheels, Handle & Foot Pedal',14250,'bin','bins','90'),p('90litre Hexagonal Dustbin',7800,'bin','bins','90'),p('90litre Round Dustbin',7450,'yellowbin','bins','90')],
road:[p('Angular Road Barrier',7600,'redbin','road'),p('Road Traffic Triangle',1800,'redbin','road'),p('Slimline Interlockable Road Barrier',8000,'rect','road'),p('Traffic Cone',2500,'redbin','road'),p('Road Barrier with Interlocking Ends',9500,'rect','road')],
sanitation:[p('100litre Handwash Basin',9700,'green','sanitation','100'),p('115cm PE Manhole',23000,'rect','sanitation'),p('140cm PE Manhole',31000,'rect','sanitation'),p('170cm PE Manhole',34500,'rect','sanitation'),p('190cm PE Manhole',41400,'rect','sanitation'),p('Pit Latrine Slab',10300,'rect','sanitation')]};
const ALL_PRODUCTS = Object.values(data).flat();
const SOURCE_PRODUCT_URLS = IMAGE_PATHS.sourceUrls?.productUrls || [];
function productImage(product) {
  // Category image URLs are managed in index.html under editableProductGroups.
  // Match each product to its image by its position within its own category.
  const editableGroups = IMAGE_PATHS.editableProductGroups || {};
  const groupKey = product.category === 'road' ? 'roadSafetyIndustrial' : product.category;
  const group = editableGroups[groupKey];
  if (Array.isArray(group) && group.length) {
    const categoryProducts = data[product.category] || [];
    const categoryIndex = categoryProducts.findIndex(item => item.id === product.id);
    if (categoryIndex >= 0 && group[categoryIndex]) return group[categoryIndex];
    return group[categoryIndex % group.length];
  }
  if (IMAGE_PATHS.products?.[product.id]) return IMAGE_PATHS.products[product.id];
  // Use the supplied cylindrical-tank photo consistently for the requested 3,000L–24,000L tank range.
  const capacity = Number(String(product.capacity || '').replace(/,/g, ''));
  if (product.category === 'tanks' && /cylindrical tank/i.test(product.name) && capacity >= 3000 && capacity <= 24000) {
    return 'https://www.toptank.com/wp-content/uploads/2021/04/TANKS-1-1-scaled-1-e1617825347905-99-500x500.jpeg';
  }
  const index = ALL_PRODUCTS.findIndex(item => item.id === product.id);
  return SOURCE_PRODUCT_URLS[index] || '';
}
function categoryImage(key) {
  // Explicit category-to-image mapping keeps each card matched to its own product family.
  const categoryUrls = {
    tanks: 'https://www.toptank.com/wp-content/uploads/2021/04/TANKS-1-4-scaled-1-e1617825299668-99-500x500.jpeg',
    lifestyle: 'https://www.toptank.com/wp-content/uploads/2026/08/LACPLNTS19_Beige_1-500x500.jpg',
    bins: 'https://www.toptank.com/wp-content/uploads/2021/05/LACBIN28_Black_1-1-500x500.jpg',
    road: 'https://www.toptank.com/wp-content/uploads/2021/05/Road-Barriers_2-e1621257040513-500x500.png',
    sanitation: 'https://www.toptank.com/wp-content/uploads/2021/05/LACMAN01_Black_1-500x500.jpg'
  };
  const custom = IMAGE_PATHS.categories?.[key];
  return custom && !custom.startsWith('assets/images/category-') ? custom : categoryUrls[key] || '';
}

let state={page:'home',category:'tanks',pageNum:1,query:'',color:'',capacity:'',min:0,max:500000,sort:'default',detail:null,cart:JSON.parse(localStorage.getItem('ttcart')||'[]')};
const money=n=>'KSh'+Number(n).toLocaleString('en-KE');
function headerFooter(){return `<footer class="sitefooter" id="about"><div class="wrap footgrid"><section><h4>ABOUT US</h4><p>Toptank is manufactured in Kenya using rotational moulding and produced from food grade polyethylene. It has been approved by Kenya Bureau of Standards and has also been awarded the Diamond mark, reflecting the quality of its products and excellent performance.</p><p>◎　◉　▣　🔴</p></section><section><h4>NAVIGATION</h4><p><a href="#all">All Products</a><br><a href="#custom">Custom Products</a><br><a href="#faqs">FAQs</a><br><a href="#about">About Us</a></p></section><section><h4>MY ACCOUNT</h4><p><a href="#cart" id="footCart">My Account</a><br><a href="#cart">Cart</a><br><a href="#cart">Checkout</a></p></section><section id="contact"><h4>GET IN TOUCH</h4><p><b>Nairobi</b><br>Parkside Towers, Mombasa Road<br>☎ 0751511091</p><p><b>Mombasa</b><br>Lecol Building, Mbaraki Road<br>☎ 0751511091</p><p>✉ mail@toptank.com</p></section></div></footer><div class="footerbottom"><div class="wrap"><div><a class="brand" href="#home">TOP<span>TANK</span></a><br><small>Stronger · Safer · Longer</small></div><div class="paylogos">▰　Pay　　VISA　Mastercard</div></div></div>`}
function home(){
  const heroSlides=[
    {src:'assets/itisha-header-teal.png',label:'Teal'},
    {src:'assets/itisha-header-blue.png',label:'Blue'},
    {src:'assets/itisha-header-olive.png',label:'Olive'}
  ];
  return `
  <section class="hero hero-slider" aria-label="Itisha TopTank featured banner">
    <div class="hero-slides">
      ${heroSlides.map((s,i)=>`
        <article class="hero-slide hero-slide-${i+1} ${i===0?'is-active':''}" data-slide="${i}">
          <div class="hero-banner">
            <img src="${s.src}" alt="Itisha TopTank — ${s.label} theme">
          </div>
        </article>
      `).join('')}
    </div>
    <button class="hero-control prev" aria-label="Previous banner">‹</button>
    <button class="hero-control next" aria-label="Next banner">›</button>
    <div class="hero-dots" aria-label="Banner navigation">
      ${heroSlides.map((s,i)=>`<button class="${i===0?'active':''}" data-goto-slide="${i}" aria-label="${s.label} banner"></button>`).join('')}
    </div>
  </section>

  <div class="quickcats-wrap" aria-label="Product categories">
    <button class="quickcats-control quickcats-prev" type="button" aria-label="Previous categories">‹</button>
    <div class="quickcats">
      ${cats.map(c=>`<a href="#${c.key}" aria-label="${c.name}"><strong>${c.icon}</strong><span>${c.name.toUpperCase()}</span></a>`).join('')}
    </div>
    <button class="quickcats-control quickcats-next" type="button" aria-label="Next categories">›</button>
  </div>

  <section class="intro tank-intro">
    <div class="section-inner">
      <p class="eyebrow">TOPTANK WATER STORAGE</p>
      <h2>Are You Looking For A Water Tank?</h2>
      <p>You’ve come to the right place. We have a large range of tanks to suit your needs, with quality products for homes, farms and businesses.</p>
      <a class="yellowbtn" href="#tanks">FIND A TANK</a>
    </div>
  </section>

  <section class="benefits">
    <div class="benefit-grid">
      ${[
        ['♧','UV Protection','Built with UV-resistant polyethylene for a longer service life.'],
        ['🚚','Free Delivery','Free delivery in and around most major towns in Kenya.'],
        ['✓','Quality','Made using food-grade polyethylene and modern technology.'],
        ['▤','Durability','Strong products designed for demanding everyday conditions.'],
        ['◆','Made in Kenya','Proudly manufactured in Kenya for Kenyan homes and businesses.']
      ].map(x=>`<div class="benefit-card"><div class="benefit-icon">${x[0]}</div><h4>${x[1]}</h4><p>${x[2]}</p></div>`).join('')}
    </div>
  </section>

  <section class="whybuy">
    <div class="whygrid">
      <div>
        <p class="eyebrow">THE TOPTANK DIFFERENCE</p>
        <h2>Why Choose TopTank?</h2>
        ${[
          ['Hygiene','Manufactured from food-grade polyethylene. Non-toxic, non-absorbent and designed to help avert algae growth.'],
          ['Long Lifespan','Carbon black incorporated into polyethylene through rotational moulding provides a long service life.'],
          ['Durable & Stress Resistant','UV-stabilised and designed to withstand demanding conditions.'],
          ['Cost Effective','A range of products for different budgets and applications.'],
          ['Latest Technology','Rotational moulding offers versatile manufacturing options.'],
          ['Installation','Install on a flat, firm and level surface capable of supporting a filled tank.'],
          ['Best for Domestic & Commercial Use','A wide range of tanks and plastic products for domestic and commercial applications.']
        ].map(x=>`<details class="whyitem"><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join('')}
      </div>
      <div class="buybox">
        <p class="eyebrow">SHOP WITH CONFIDENCE</p>
        <h2>Buy Online</h2>
        <p>Shop TopTank products from the comfort of your home or office. Choose your product and contact us to confirm availability and ordering details.</p>
        <b>We Accept:</b>
        <div class="payments"><span class="paymentchip">M-PESA</span><span class="paymentchip">LIPA</span><span class="paymentchip">VISA</span><span class="paymentchip">MASTERCARD</span></div>
        <a class="yellowbtn" href="#tanks">BUY A TANK NOW</a>
      </div>
    </div>
  </section>

  <section class="home-categories" id="all">
    <div class="wrap"><div class="section-head"><div><p class="eyebrow">EXPLORE OUR RANGE</p><h2>TopTank Products</h2></div><a href="#tanks" class="textlink">View All Products →</a></div>
      <div class="home-cats">${cats.map(c=>`<a class="home-cat" href="#${c.key}"><div class="home-cat-image">${imageSlot(categoryImage(c.key),c.name,'category-image-placeholder')}</div><h3>${c.name}</h3><p>Explore TopTank ${c.name.toLowerCase()} products.</p><b>SHOP CATEGORY →</b></a>`).join('')}</div>
    </div>
  </section>

  <section class="custom-section" id="custom"><div class="wrap"><div class="custom-card"><div class="custom-copy"><p class="eyebrow">CUSTOM PRODUCTS</p><h2>Need a product made for your application?</h2><p>Talk to the TopTank team about custom plastic solutions for commercial, industrial and specialised requirements.</p><a class="yellowbtn" href="#contact">CONTACT US</a></div><div class="custom-product-image"><img src="https://www.toptank.com/wp-content/uploads/2021/04/TANKS-1-1-scaled-1-e1617825347905-99-500x500.jpeg" alt="TopTank custom plastic product" loading="lazy"></div></div></div></section>
  <section class="faq-section" id="faqs"><div class="wrap"><div class="section-head"><div><p class="eyebrow">NEED TO KNOW</p><h2>Frequently Asked Questions</h2></div></div><div class="faqgrid"><details><summary>How do I choose the right tank?</summary><p>Consider your water demand, available space, installation location and required capacity. Our team can help confirm a suitable option.</p></details><details><summary>How can I place an order?</summary><p>Choose a product, then contact TopTank to confirm availability, delivery and payment details.</p></details><details><summary>Where can TopTank products be delivered?</summary><p>Delivery arrangements can be confirmed with the TopTank team based on your location and order.</p></details></div></div></section>
  ${headerFooter()}`;
}
function catalog(){let c=cats.find(x=>x.key===state.category)||cats[0];let list=(data[state.category]||[]).filter(x=>(!state.query||x.name.toLowerCase().includes(state.query.toLowerCase()))&&(!state.capacity||x.capacity===state.capacity)&&x.price>=state.min&&x.price<=state.max);if(state.sort==='low')list.sort((a,b)=>a.price-b.price);if(state.sort==='high')list.sort((a,b)=>b.price-a.price);if(state.sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));let per=12,pages=Math.max(1,Math.ceil(list.length/per));state.pageNum=Math.min(state.pageNum,pages);let slice=list.slice((state.pageNum-1)*per,state.pageNum*per);return `<div class="category-page"><div class="crumb"><div class="wrap"><a href="#home">Home</a> / ${c.name}</div></div><div class="wrap catalog"><aside class="filters"><div class="price-line"></div><small>Price: <b>${money(state.min||0)} — ${money(state.max)}</b></small><div class="filter-block"><h4>Product Categories</h4><select id="catSelect"><option value="">Product categories</option>${cats.map(x=>`<option value="${x.key}" ${state.category===x.key?'selected':''}>${x.name}</option>`).join('')}</select></div><div class="filter-block"><h4>Capacity (litres)</h4><select id="capacitySelect"><option value="">Capacity (litres)</option>${[...new Set((data[state.category]||[]).map(x=>x.capacity).filter(Boolean))].sort((a,b)=>+a-+b).map(v=>`<option ${state.capacity===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="filter-block"><h4>Product Colour</h4><div class="colors">${['#111','#050505','#252525','#d92d3b','#45a84a','#14743a','#f6c52d','#f78b14','#2d62a8','#263c81','#999','#dedbb4','#fff','#fff'].map(col=>`<button class="color ${state.color===col?'active':''}" style="background:${col}" data-color="${col}" aria-label="Filter colour"></button>`).join('')}</div></div>${['Length','Width','Height'].map(x=>`<div class="filter-block"><h4>${x}</h4><input class="range" type="range" min="0" max="100" value="0" aria-label="${x}"></div>`).join('')}<div class="filter-block"><div class="searchrow"><input type="text" id="filterSearch" placeholder="Search products…" value="${state.query}"><button id="filterSearchBtn">Search</button></div></div></aside><main><div class="cat-title"><h1>${c.name}</h1><span class="cat-icon">${c.icon}</span></div><div class="catalog-toolbar"><button class="viewbtn" title="Grid">▦</button><button class="viewbtn" title="List">▤</button><span>Showing ${list.length?((state.pageNum-1)*per+1):0}–${Math.min(state.pageNum*per,list.length)} of ${list.length||0} results</span><select class="sort" id="sortSelect"><option value="default">Default sorting</option><option value="pop">Sort by popularity</option><option value="rating">Sort by average rating</option><option value="latest">Sort by latest</option><option value="low" ${state.sort==='low'?'selected':''}>Sort by price: low to high</option><option value="high" ${state.sort==='high'?'selected':''}>Sort by price: high to low</option><option value="name" ${state.sort==='name'?'selected':''}>Sort by name</option></select></div><div class="products">${slice.map(x=>`<article class="product-card" data-product="${x.id}"><div class="product-img">${imageSlot(productImage(x),x.name,'product-image-placeholder')}</div><h3>${x.name}</h3><div class="price">${money(x.price)}</div></article>`).join('')||'<div class="empty">No products match these filters. Change your search or filters.</div>'}</div><div class="pages">${Array.from({length:pages},(_,i)=>`<button class="${state.pageNum===i+1?'active':''}" data-page="${i+1}">${i+1}</button>`).join('')}</div></main></div></div>${headerFooter()}`}
function detail(){let x=state.detail;if(!x)return '';return `<div class="crumb"><div class="wrap"><a href="#home">Home</a> / <a href="#${x.category}">${cats.find(c=>c.key===x.category)?.name||'Products'}</a> / ${x.name}</div></div><section class="product-detail wrap"><div class="detail-grid"><div><div class="detail-mainimg">${imageSlot(productImage(x),x.name,'detail-image-placeholder')}</div><div class="thumbs">${imageSlot(productImage(x),x.name,'thumb-image-placeholder')}</div></div><div class="detail-info"><h1>${x.name}</h1><div class="detail-price">${money(x.price)}</div><p>${x.desc}</p><ul class="specs"><li>Category: ${cats.find(c=>c.key===x.category)?.name||x.category}</li>${x.capacity?`<li>Capacity: ${x.capacity} litres</li>`:''}<li>Product: TopTank</li></ul><b>Colour</b><div class="colorpick">${['#111','#222','#d92d3b','#45a84a','#2d62a8','#e5dfbf'].map(c=>`<button class="color" style="background:${c}" data-detail-color="${c}"></button>`).join('')}</div><div class="qty"><button id="qtyMinus">−</button><input id="detailQty" type="number" min="1" value="1"><button id="qtyPlus">+</button></div><div class="detail-actions"><button class="addcart" id="detailAdd">ADD TO CART</button><button class="buy" id="detailBuy">BUY NOW</button></div><p><small>SKU: ${x.id.toUpperCase()}<br>Category: ${cats.find(c=>c.key===x.category)?.name}</small></p></div></div><section class="enquiry"><h2>Product Enquiry</h2><form id="enquiryForm" class="formgrid"><label>Name<input name="name" required placeholder="Your name"></label><label>Email address<input name="email" type="email" placeholder="you@example.com"></label><label class="full">What would you like to know?<textarea name="message" placeholder="Ask about this product…"></textarea></label><div class="full"><button class="yellowbtn">SEND ENQUIRY</button></div></form></section><section class="enquiry"><h3>Additional information</h3><p>Product details and availability can be confirmed through WhatsApp.</p><h3>Reviews (0)</h3></section></section>${headerFooter()}`}
function render(){document.getElementById('app').innerHTML=state.page==='home'?home():state.page==='detail'?detail():catalog();bind();updateCart();}
function navigate(hash){let h=(hash||'#home').replace('#','');if(!h||h==='home'||['about','contact','social','custom','faqs','all'].includes(h)){state.page='home';state.detail=null;}else if(cats.some(c=>c.key===h)){state.page='catalog';state.category=h;state.pageNum=1;state.query='';state.capacity='';state.sort='default';state.detail=null;}else{state.page='home';}render();if(['about','contact','custom','faqs','all'].includes(h))setTimeout(()=>document.getElementById(h)?.scrollIntoView(),10);else window.scrollTo(0,0)}
function openDetail(id){let all=Object.values(data).flat();state.detail=all.find(x=>x.id===id)||all[0];state.page='detail';render();window.scrollTo(0,0)}
function bind(){
  const qc=document.querySelector('.quickcats');
  const qcStep=()=>qc ? Math.max(180, Math.min(260, qc.clientWidth*0.42)) : 220;
  document.querySelector('.quickcats-prev')?.addEventListener('click',()=>qc?.scrollBy({left:-qcStep(),behavior:'smooth'}));
  document.querySelector('.quickcats-next')?.addEventListener('click',()=>qc?.scrollBy({left:qcStep(),behavior:'smooth'}));
  const slides=[...document.querySelectorAll('.hero-slide')]; let active=0;
  const showSlide=(n)=>{if(!slides.length)return;active=(n+slides.length)%slides.length;slides.forEach((el,i)=>el.classList.toggle('is-active',i===active));document.querySelectorAll('[data-goto-slide]').forEach((b,i)=>b.classList.toggle('active',i===active));};
  document.querySelector('.hero-control.next')?.addEventListener('click',()=>showSlide(active+1));
  document.querySelector('.hero-control.prev')?.addEventListener('click',()=>showSlide(active-1));
  document.querySelectorAll('[data-goto-slide]').forEach(b=>b.addEventListener('click',()=>showSlide(+b.dataset.gotoSlide)));
  if(window.__heroTimer){clearInterval(window.__heroTimer);window.__heroTimer=null;}
  if(slides.length){
    window.__heroTimer=setInterval(()=>{
      if(document.visibilityState==='visible') showSlide(active+1);
    },4000);
  }
  document.querySelectorAll('[data-product]').forEach(el=>el.onclick=()=>openDetail(el.dataset.product));document.querySelectorAll('[data-page]').forEach(el=>el.onclick=()=>{state.pageNum=+el.dataset.page;render();window.scrollTo(0,0)});document.querySelectorAll('[data-color]').forEach(el=>el.onclick=()=>{state.color=el.dataset.color;document.querySelectorAll('[data-color]').forEach(b=>b.classList.toggle('active',b===el));});document.getElementById('catSelect')?.addEventListener('change',e=>{if(e.target.value){state.category=e.target.value;state.pageNum=1;render()}});document.getElementById('capacitySelect')?.addEventListener('change',e=>{state.capacity=e.target.value;state.pageNum=1;render()});document.getElementById('sortSelect')?.addEventListener('change',e=>{state.sort=e.target.value;state.pageNum=1;render()});document.getElementById('filterSearchBtn')?.addEventListener('click',()=>{state.query=document.getElementById('filterSearch').value;state.pageNum=1;render()});document.getElementById('filterSearch')?.addEventListener('keydown',e=>{if(e.key==='Enter'){state.query=e.target.value;state.pageNum=1;render()}});document.getElementById('qtyMinus')?.addEventListener('click',()=>{let q=document.getElementById('detailQty');q.value=Math.max(1,(+q.value||1)-1)});document.getElementById('qtyPlus')?.addEventListener('click',()=>{let q=document.getElementById('detailQty');q.value=(+q.value||1)+1});document.getElementById('detailAdd')?.addEventListener('click',()=>addCart(state.detail,+document.getElementById('detailQty').value||1));document.getElementById('detailBuy')?.addEventListener('click',()=>{addCart(state.detail,+document.getElementById('detailQty').value||1);openCart();});document.getElementById('enquiryForm')?.addEventListener('submit',e=>{e.preventDefault();let f=new FormData(e.target);let msg=`Product enquiry: ${state.detail.name}%0AName: ${f.get('name')}%0AEmail: ${f.get('email')}%0AQuestion: ${f.get('message')}`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(decodeURIComponent(msg))}`,'_blank')});document.querySelectorAll('[data-detail-color]').forEach(el=>el.onclick=()=>{document.querySelectorAll('[data-detail-color]').forEach(b=>b.classList.remove('active'));el.classList.add('active')});}
function addCart(item,qty=1){if(!item)return;let found=state.cart.find(x=>x.id===item.id);if(found)found.qty+=qty;else state.cart.push({...item,qty});saveCart();updateCart();}
function saveCart(){localStorage.setItem('ttcart',JSON.stringify(state.cart))}
function updateCart(){
  const n=state.cart.reduce((sum,item)=>sum+item.qty,0);
  ['cartCount','cartCount2'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=n;});
  const items=document.getElementById('cartItems');
  if(items){
    if(!state.cart.length){items.innerHTML='<div class="empty">Your cart is empty.</div>';}
    else {
      items.innerHTML=state.cart.map(item=>{
        const thumb=imageSlot(IMAGE_PATHS.products[item.id]||'',item.name,'cart-image-placeholder');
        return `<div class="cartrow">${thumb}<div><h4>${item.name}</h4><p>${item.qty} × ${money(item.price)}</p><div class="qty"><button data-dec="${item.id}">−</button><input value="${item.qty}" readonly><button data-inc="${item.id}">+</button></div></div><button data-remove="${item.id}">Remove</button></div>`;
      }).join('');
    }
  }
  const total=state.cart.reduce((sum,item)=>sum+item.qty*item.price,0);
  const totalEl=document.getElementById('cartTotal');if(totalEl)totalEl.textContent=money(total);
  document.querySelectorAll('[data-remove]').forEach(button=>button.onclick=()=>{state.cart=state.cart.filter(item=>item.id!==button.dataset.remove);saveCart();updateCart();});
  document.querySelectorAll('[data-dec]').forEach(button=>button.onclick=()=>{const item=state.cart.find(x=>x.id===button.dataset.dec);if(item){item.qty--;if(item.qty<1)state.cart=state.cart.filter(x=>x.id!==item.id);saveCart();updateCart();}});
  document.querySelectorAll('[data-inc]').forEach(button=>button.onclick=()=>{const item=state.cart.find(x=>x.id===button.dataset.inc);if(item)item.qty++;saveCart();updateCart();});
}
function openCart(){document.getElementById('cartVeil').classList.add('open');updateCart()}
document.getElementById('cartOpen').onclick=openCart;document.getElementById('cartClose').onclick=()=>document.getElementById('cartVeil').classList.remove('open');document.getElementById('cartVeil').addEventListener('click',e=>{if(e.target.id==='cartVeil')e.currentTarget.classList.remove('open')});document.getElementById('checkout').onclick=()=>{if(!state.cart.length){alert('Your cart is empty.');return}let msg='Hello TopTank, I would like to place this order:%0A'+state.cart.map(x=>`• ${x.name} × ${x.qty} — ${money(x.price*x.qty)}`).join('%0A')+`%0AEstimated total: ${money(state.cart.reduce((s,x)=>s+x.qty*x.price,0))}`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(decodeURIComponent(msg))}`,'_blank')};document.getElementById('hamb').onclick=()=>{const n=document.getElementById('navLinks');n.classList.toggle('show');document.getElementById('hamb').setAttribute('aria-expanded',n.classList.contains('show')?'true':'false')};document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{document.getElementById('navLinks').classList.remove('show');document.getElementById('hamb').setAttribute('aria-expanded','false')}));document.getElementById('searchToggle').onclick=()=>document.getElementById('searchBar').classList.toggle('open');document.getElementById('doSearch').onclick=()=>{state.query=document.getElementById('globalSearch').value;state.page='catalog';state.category='tanks';state.pageNum=1;render();window.scrollTo(0,0)};document.getElementById('globalSearch').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('doSearch').click()});document.querySelector('.navicons button:nth-child(2)').onclick=openCart;window.addEventListener('hashchange',()=>navigate(location.hash));window.addEventListener('load',()=>{let h=location.hash;if(h&&h!=='#home')navigate(h);else render()});
