/**
 * VARAHA BIOLOGICALS PVT. LTD. - E-COMMERCE STORE ENGINE
 * Headquartered: Anantapur Industrial Estate, Andhra Pradesh
 * Formulations: Biofertilizers, Biofungicides, Bio-stimulants, Micronutrients, Growth Promoters
 */

// ==========================================
// 1. COMPLETE PRODUCT CATALOG DATASET (12 PRODUCTS)
// ==========================================
const PRODUCTS_DATA = [
  // --- BIOFERTILIZERS ---
  {
    id: 'vega-v',
    name: 'VEGA-V',
    subtitle: 'Azotobacter Liquid Biofertilizer',
    tagline: 'Natural Nitrogen Fixation for Vigorous Crop Growth',
    category: 'biofertilizers',
    categoryLabel: 'Biofertilizers',
    image: 'images/VEGA V.png',
    accentColor: '#2e7d32',
    accentBg: '#e8f5e9',
    sizes: ['1 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'Azotobacter spp., min. 1×10⁹ CFU/ml, Liquid base, pH 6.5–7.5',
    advantages: [
      'Fixes atmospheric nitrogen naturally, reducing reliance on synthetic urea.',
      'Promotes vigorous root growth and seedling establishment.',
      'Produces natural plant growth-promoting substances (IAA, GA, vitamins).',
      'Enhances nutrient uptake and fertilizer use efficiency.',
      'Improves soil fertility and active microbial population.',
      'Corrects nitrogen deficiency (pale/yellow leaves, slow growth, reduced tillering, poor roots).'
    ],
    dosage: {
      seedTreatment: '10ml / kg seed',
      seedlingDip: '5–10ml / L water (dip roots for 20–30 min before transplanting)',
      soilApplication: '1–2 Litres / acre mixed with 50–100kg FYM or vermicompost',
      dripIrrigation: '1–2 Litres / acre applied directly to the root zone'
    },
    crops: 'Cereals, millets, pulses, oilseeds, cotton, sugarcane, vegetables, fruits, plantation crops, flowers, and ornamentals.'
  },
  {
    id: 'axis-v',
    name: 'AXIS-V',
    subtitle: 'Phosphate Solubilizing Bacteria (PSB) Liquid Biofertilizer',
    tagline: 'Unlocks Soil Phosphorus for Stronger Roots & Higher Yields',
    category: 'biofertilizers',
    categoryLabel: 'Biofertilizers',
    image: 'images/AXIS - V.png',
    accentColor: '#d97706',
    accentBg: '#fef3c7',
    sizes: ['1 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'PSB (Phosphate Solubilizing Bacteria), min. 1×10⁹ CFU/ml, Liquid base, pH 6.5–7.5',
    advantages: [
      'Converts insoluble, locked-up soil phosphorus into readily plant-available phosphate ions.',
      'Enhances root development and early crop establishment.',
      'Increases overall nutrient uptake and fertilizer use efficiency.',
      'Promotes healthy flowering, fruit setting, and seed development.',
      'Improves soil microbial ecology and long-term soil health.',
      'Reduces heavy expenditure on chemical phosphatic fertilizers.'
    ],
    dosage: {
      seedTreatment: '10ml / kg seed',
      seedlingDip: '5–10ml / L water (dip roots for 20–30 min)',
      soilApplication: '1–2 Litres / acre with 50–100kg FYM / compost',
      dripIrrigation: '1–2 Litres / acre',
      foliarSpray: '2–3ml / Litre of water'
    },
    crops: 'All agricultural, horticultural, vegetable, fruit, plantation, spice, flower, and ornamental crops.'
  },
  {
    id: 'kreo-v',
    name: 'KREO-V',
    subtitle: 'Potassium Mobilizing Bacteria (KMB) Liquid Biofertilizer',
    tagline: 'Mobilizes Soil Potassium for Stronger Plants & Higher Productivity',
    category: 'biofertilizers',
    categoryLabel: 'Biofertilizers',
    image: 'images/KREO - V.png',
    accentColor: '#1d4ed8',
    accentBg: '#eff6ff',
    sizes: ['1 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'KMB (Potassium Mobilizing Bacteria), min. 1×10⁹ CFU/ml, Liquid base, pH 6.5–7.5',
    advantages: [
      'Mobilizes fixed and unavailable soil potassium into absorbable ionic forms.',
      'Strengthens crop stems and significantly reduces lodging.',
      'Improves drought tolerance, frost resistance, and moisture stress endurance.',
      'Enhances flowering, fruit enlargement, and uniform grain filling.',
      'Improves crop produce quality, fruit color, firmness, and shelf-life.',
      'Corrects potassium deficiency (weak stems, poor vigor, leaf margin scorching).'
    ],
    dosage: {
      seedTreatment: '10ml / kg seed',
      seedlingDip: '5–10ml / L water (20–30 min dip)',
      soilApplication: '1–2 Litres / acre with 50–100kg FYM / compost',
      dripIrrigation: '1–2 Litres / acre'
    },
    crops: 'All agricultural, horticultural, vegetable, fruit, plantation, spice, flower, and ornamental crops.'
  },
  {
    id: 'zinco-va',
    name: 'ZINCO-VA',
    subtitle: 'Zinc Solubilizing Bacteria (ZSB) Liquid Biofertilizer',
    tagline: 'Enhances Zinc Availability for Better Crop Growth',
    category: 'biofertilizers',
    categoryLabel: 'Biofertilizers',
    image: 'images/ZINCO - VA.png',
    accentColor: '#15803d',
    accentBg: '#f0fdf4',
    sizes: ['1 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'ZSB (Zinc Solubilizing Bacteria), min. 1×10⁹ CFU/ml, Liquid base, pH 6.5–7.5',
    advantages: [
      'Solubilizes insoluble zinc compounds in soils into bio-available forms for plant uptake.',
      'Enhances chlorophyll synthesis, resulting in lush green foliage and improved photosynthesis.',
      'Promotes vigorous early vegetative growth and root branching.',
      'Improves flowering, fruit setting, grain filling, and test weight.',
      'Corrects classic zinc deficiency symptoms (stunted growth, interveinal chlorosis, khaira disease, poor tillering).'
    ],
    dosage: {
      seedTreatment: '10ml / kg seed',
      seedlingDip: '5–10ml / L water (20–30 min)',
      soilApplication: '1–2 Litres / acre with 50–100kg FYM / compost',
      dripIrrigation: '1–2 Litres / acre',
      foliarSpray: '2–3ml / Litre of water'
    },
    crops: 'All agricultural, horticultural, vegetable, fruit, plantation, spice, flower, and ornamental crops.'
  },
  {
    id: 'mycor-v',
    name: 'MYCOR-V',
    subtitle: 'Mycorrhizal Biofertilizer (VAM)',
    tagline: 'Expands Root Networks for Superior Nutrient & Water Uptake',
    category: 'biofertilizers',
    categoryLabel: 'Biofertilizers',
    image: 'images/MYCOR - V.png',
    accentColor: '#854d0e',
    accentBg: '#fefce8',
    sizes: ['100 grams'],
    price: 'MRP ₹749/- (incl. all taxes)',
    priceNumeric: 749,
    isPriceFixed: true,
    composition: 'Vesicular Arbuscular Mycorrhiza (VAM) fungi — high concentration of infective propagules; Granular / Powder formulation',
    advantages: [
      'Forms a persistent symbiotic root network that expands root surface area up to 100x.',
      'Significantly boosts absorption of insoluble phosphorus, zinc, copper, and moisture from deep soil.',
      'Imparts tremendous tolerance against drought, moisture deficit, and transplant shock.',
      'Improves soil aggregation, porosity, and long-term rhizosphere ecology.',
      'Boosts seedling survival rate, crop vigor, and overall harvest quality.'
    ],
    dosage: {
      soilApplication: '100–200 grams per acre mixed with well-decomposed FYM, compost, or fine soil and broadcasted',
      dripIrrigation: '100–200 grams per acre dissolved and applied directly to the root zone via drip'
    },
    crops: 'All agricultural, horticultural, vegetable, fruit, plantation, spice, flower, and ornamental crops.'
  },

  // --- BIOFUNGICIDES ---
  {
    id: 'armor-v',
    name: 'ARMOR-V',
    subtitle: 'Bacillus Subtilis Liquid Biofungicide',
    tagline: 'Advanced Biological Disease Protection for Healthy Crops',
    category: 'biofungicides',
    categoryLabel: 'Biofungicides',
    image: 'images/ARMOR - V.png',
    accentColor: '#0d9488',
    accentBg: '#f0fdfa',
    sizes: ['1 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'Bacillus subtilis, min. 1×10⁹ CFU/ml, Liquid base, pH 6.5–7.5 — Premium High Concentration Formula',
    advantages: [
      'Controls major soil-borne and foliar fungal pathogens while suppressing harmful bacteria.',
      'Produces natural lipopeptide antimicrobial compounds that destroy fungal cell walls.',
      'Promotes rapid root zone colonization and competitive exclusion of pathogens.',
      'Enhances systemic acquired resistance (SAR) and plant immunity against environmental stress.',
      'Eco-friendly, 100% residue-free, safe for honeybees and beneficial soil microorganisms.'
    ],
    targetDiseases: 'Damping-off, Root Rot, Collar Rot, Wilt, Leaf Spot, Early Blight, Anthracnose, Fruit Rot, Powdery Mildew, and bacterial disease suppression.',
    dosage: {
      seedTreatment: '10ml / kg seed',
      seedlingDip: '5–10ml / L water (20–30 min)',
      soilApplication: '1–2 Litres / acre with 50–100kg FYM / compost',
      dripIrrigation: '1–2 Litres / acre',
      foliarSpray: '2–3ml / Litre of water'
    },
    crops: 'All agricultural, horticultural, vegetable, fruit, plantation, spice, flower, and ornamental crops.'
  },
  {
    id: 'ziva-pv',
    name: 'ZIVA-PV',
    subtitle: 'Pseudomonas fluorescens Liquid Biofungicide (PGPR)',
    tagline: 'Plant Growth Promoting Rhizobacteria',
    category: 'biofungicides',
    categoryLabel: 'Biofungicides',
    image: 'images/ZIVA - PV.png',
    accentColor: '#be185d',
    accentBg: '#fdf2f8',
    sizes: ['1 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'Pseudomonas fluorescens, min. 1×10⁹ CFU/ml, Liquid base, pH 6.5–7.5',
    advantages: [
      'Aggressively colonizes the rhizosphere and secretes siderophores that starve pathogens of iron.',
      'Suppresses harmful soil-borne fungi and pathogenic bacteria.',
      'Stimulates lateral root growth, secondary root branching, and root surface area.',
      'Improves biological availability of phosphorus and essential micronutrients.',
      'Produces natural plant growth-promoting hormones and enhances systemic disease resistance.'
    ],
    targetDiseases: 'Damping-off, Root Rot, Collar Rot, Stem Rot, Rhizome Rot, Fusarium Wilt, Foot Rot, Seedling Blight.',
    dosage: {
      seedTreatment: '10ml / kg seed',
      seedlingDip: '5–10ml / L water (20–30 min)',
      soilApplication: '1–2 Litres / acre with 50–100kg FYM / compost',
      dripIrrigation: '1–2 Litres / acre',
      foliarSpray: '2–3ml / Litre of water'
    },
    crops: 'Paddy, Cotton, Maize, Groundnut, Pulses, Sugarcane, Vegetables, Fruits, Spices, Flowers.'
  },
  {
    id: 'ziva-tv',
    name: 'ZIVA-TV',
    subtitle: 'Trichoderma viride Liquid Biofungicide',
    tagline: 'Advanced Biological Protection Against Soil-Borne Diseases',
    category: 'biofungicides',
    categoryLabel: 'Biofungicides',
    image: 'images/ZIVA - TV.png',
    accentColor: '#0284c7',
    accentBg: '#f0f9ff',
    sizes: ['1 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'Trichoderma viride, min. 1×10⁹ CFU/ml, Liquid base, pH 6.5–7.5',
    advantages: [
      'Rapidly parasitizes and lyses disease-causing fungi via natural mycoparasitism and enzymatic action.',
      'Provides high protection against lethal soil-borne fungal complexes.',
      'Promotes vigorous root branching, early seed germination, and seedling vigor.',
      'Accelerates decomposition of organic matter in soil, releasing bound nutrients.',
      '100% organic and bio-certified for zero chemical residue farming.'
    ],
    targetDiseases: 'Damping-off, Root Rot, Collar Rot, Stem Rot, Rhizome Rot, Wilt, Foot Rot, Seedling Blight.',
    dosage: {
      seedTreatment: '10ml / kg seed',
      seedlingDip: '5–10ml / L water (20–30 min)',
      soilApplication: '1–2 Litres / acre with 50–100kg FYM / compost',
      dripIrrigation: '1–2 Litres / acre',
      foliarSpray: '2–3ml / Litre of water'
    },
    crops: 'All agricultural, horticultural, vegetable, fruit, plantation, spice, flower, and ornamental crops.'
  },

  // --- BIO-STIMULANTS ---
  {
    id: 'humiva',
    name: 'HUMIVA',
    subtitle: 'Humic Acid Liquid',
    tagline: 'Premium Organic Humic & Fulvic Soil Revitalizer',
    category: 'bio-stimulants',
    categoryLabel: 'Bio-stimulants',
    image: 'images/HUMIVA.jpeg',
    accentColor: '#78350f',
    accentBg: '#fef3c7',
    sizes: ['1 Litre', '5 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'Humic Acid min. 12.0% by weight, Fulvic Acid min. 5.0% by weight',
    advantages: [
      'Dramatically elevates soil organic carbon and Cation Exchange Capacity (CEC).',
      'Improves soil aggregation, aeration, and water-holding capacity in drought-prone lands.',
      'Stimulates indigenous microbial proliferation and activates dormant beneficial bacteria.',
      'Chelates macro and micronutrients to prevent leaching losses.',
      'Promotes extensive root elongation, vegetative vigor, and superior harvest yield.'
    ],
    dosage: {
      foliarSpray: '2–3ml / Litre of water',
      dripIrrigation: '1 Litre / acre (or 5L per 5 acres)',
      soilApplication: '1 Litre / acre mixed with irrigation water or drenching'
    },
    crops: 'All agricultural, horticultural, plantation, vegetable, and flower crops.'
  },
  {
    id: 'triva',
    name: 'TRIVA',
    subtitle: 'Humic + Fulvic + Amino Acid Liquid',
    tagline: 'Triple Action Bio-Stimulant for Root Expansion & Stress Tolerance',
    category: 'bio-stimulants',
    categoryLabel: 'Bio-stimulants',
    image: 'images/TRIVA.jpeg',
    accentColor: '#b45309',
    accentBg: '#fffbeb',
    sizes: ['1 Litre', '5 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'Humic Acid 12.0% w/v, Fulvic Acid 5.5% w/v, Amino Acids 10.0% w/v',
    advantages: [
      'Synergistic triple-action formula delivering humic, fulvic, and active amino acids simultaneously.',
      'Enhances chlorophyll synthesis, photosynthesis rate, and cell division.',
      'Builds high resilience against abiotic stresses (heat, cold, moisture stress, salinity).',
      'Accelerates nutrient translocation from root to shoot and reproductive organs.',
      'Enhances flower retention, fruit setting, fruit sizing, and uniform ripening.'
    ],
    dosage: {
      foliarSpray: '2–3ml / Litre of water',
      dripIrrigation: '1 Litre / acre (or 5L for large scale acreage)',
      soilDrench: '1 Litre / acre'
    },
    crops: 'All field crops, vegetables, fruits, flowers, plantation crops, and ornamentals.'
  },

  // --- MICRONUTRIENTS ---
  {
    id: 'vara-siri',
    name: 'VARA SIRI',
    subtitle: 'Mix Micronutrient Liquid',
    tagline: 'Complete Multi-Micronutrient Formulation for Crop Health',
    category: 'micronutrients',
    categoryLabel: 'Micronutrients',
    image: 'images/VARA SIRI.jpeg',
    accentColor: '#9333ea',
    accentBg: '#faf5ff',
    sizes: ['1 Litre', '5 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'Zinc (Zn) 8.00%, Iron (Fe) 2.00%, Manganese (Mn) 1.00%, Copper (Cu) 1.00%, Boron (B) 1.00%, Molybdenum (Mo) 1.00%',
    advantages: [
      'Comprehensive 6-in-1 micronutrient complex preventing multi-nutrient hidden hungers.',
      'Enhances enzymatic activity, protein formation, and chlorophyll production.',
      'Improves pollen viability, flowering intensity, and fruit setting.',
      'Enhances produce size, luster, coloration, sugar accumulation (Brix), and shelf-life.',
      'Fully chelated and compatible with standard biofertilizers and drip irrigation.'
    ],
    dosage: {
      foliarSpray: '2–3ml / Litre of water during active vegetative & flowering phases',
      dripIrrigation: '1 Litre / acre'
    },
    crops: 'Cereals, pulses, oilseeds, vegetables, fruits, plantation crops, flowers, and ornamentals.'
  },

  // --- ORGANIC GROWTH PROMOTERS ---
  {
    id: 'vara-fish',
    name: 'VARA FISH',
    subtitle: 'Fish Amino Acid (FAA) Organic Plant Growth Promoter',
    tagline: 'Naturally Derived Organic Amino Acids & Bio-Available Nitrogen',
    category: 'growth-promoters',
    categoryLabel: 'Organic Growth Promoters',
    image: 'images/VARA FISH.png',
    accentColor: '#047857',
    accentBg: '#ecfdf5',
    sizes: ['1 Litre'],
    price: 'Contact for Price',
    priceNumeric: null,
    isPriceFixed: false,
    composition: 'Fish Amino Acid min. 40.0% w/v, Free Amino Acids min. 12.0% w/v, Organic Nitrogen min. 4.0% w/v, Organic Carbon min. 15.0% w/v, pH 4.0–6.0',
    advantages: [
      'Concentrated source of 100% natural, bioactive marine amino acids and organic nitrogen.',
      'Stimulates rapid vegetative growth, intense canopy development, and thick green foliage.',
      'Provides rich bio-organic nourishment that explodes beneficial soil bacterial colonies.',
      'Boosts flower induction, fruit set percentage, and prevents flower/fruit drops.',
      'Increases resilience against pest pressures and extreme climatic fluctuations.'
    ],
    dosage: {
      foliarSpray: 'Shake well before use. 2–3ml / Litre of water at 10–15 day intervals',
      dripIrrigation: '1–2 Litres / acre directly into irrigation line'
    },
    crops: 'Vegetables, fruits, cereals, pulses, oilseeds, cotton, sugarcane, plantation crops, spices, flowers, and ornamentals.'
  }
];

// ==========================================
// 2. STATE MANAGEMENT (CART & FILTERS)
// ==========================================
let currentCart = [];
let currentCategoryFilter = 'all';
let currentSearchQuery = '';
let currentSortOrder = 'featured';

// LocalStorage helpers
const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem('varaha_enquiry_cart');
    if (saved) {
      currentCart = JSON.parse(saved);
    }
  } catch (e) {
    currentCart = [];
  }
};

const saveCartToStorage = () => {
  try {
    localStorage.setItem('varaha_enquiry_cart', JSON.stringify(currentCart));
  } catch (e) {
    console.error('Failed to save cart to localStorage', e);
  }
};

// ==========================================
// 3. CATALOG RENDERING & FILTERING
// ==========================================
const renderProductGrid = () => {
  const gridContainer = document.getElementById('products-grid');
  const resultsCountEl = document.getElementById('results-count-text');
  const noProductsMsg = document.getElementById('no-products-msg');
  const resetBtn = document.getElementById('reset-filters-btn');

  if (!gridContainer) return;

  // Filter products
  let filtered = PRODUCTS_DATA.filter(product => {
    const matchesCategory = currentCategoryFilter === 'all' || product.category === currentCategoryFilter;
    
    const query = currentSearchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch = 
      product.name.toLowerCase().includes(query) ||
      product.subtitle.toLowerCase().includes(query) ||
      product.tagline.toLowerCase().includes(query) ||
      product.composition.toLowerCase().includes(query) ||
      product.crops.toLowerCase().includes(query) ||
      (product.targetDiseases && product.targetDiseases.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (currentSortOrder === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSortOrder === 'name-desc') {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (currentSortOrder === 'category') {
    filtered.sort((a, b) => a.category.localeCompare(b.category));
  }

  // Update counter & reset button
  if (resultsCountEl) {
    resultsCountEl.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} formulations`;
  }

  if (resetBtn) {
    if (currentCategoryFilter !== 'all' || currentSearchQuery !== '') {
      resetBtn.style.display = 'inline-block';
    } else {
      resetBtn.style.display = 'none';
    }
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = '';
    if (noProductsMsg) noProductsMsg.style.display = 'block';
    return;
  } else {
    if (noProductsMsg) noProductsMsg.style.display = 'none';
  }

  // Render cards
  gridContainer.innerHTML = filtered.map(product => {
    const defaultSize = product.sizes[0];
    const sizeBadgeText = product.sizes.length > 1 
      ? `${product.sizes.join(' & ')} Available` 
      : product.sizes[0];

    const priceHtml = product.isPriceFixed
      ? `<div class="card-price-fixed"><span class="price-val">₹${product.priceNumeric}</span> <span class="price-label">MRP (100g)</span></div>`
      : `<div class="card-price-quote"><span class="quote-tag">Request Quote</span></div>`;

    return `
      <div class="store-product-card reveal active" data-id="${product.id}" data-category="${product.category}" style="--item-accent: ${product.accentColor}; --item-accent-bg: ${product.accentBg}">
        <div class="card-top-bar">
          <span class="card-category-badge">${product.categoryLabel}</span>
          <span class="card-size-badge">${sizeBadgeText}</span>
        </div>

        <div class="card-image-wrap" onclick="openProductModalById('${product.id}')" title="Click to view full details for ${product.name}">
          <img src="${product.image}" alt="${product.name} ${product.subtitle}" class="product-bottle-img" loading="lazy">
          <div class="card-quick-preview-overlay">
            <span>Quick View &amp; Specifications</span>
          </div>
        </div>

        <div class="card-content">
          <div class="card-origin-tag">Proudly Made in Rayalaseema, India</div>
          <h3 class="card-product-title" onclick="openProductModalById('${product.id}')">${product.name}</h3>
          <p class="card-product-sub">${product.subtitle}</p>
          <p class="card-product-tagline">"${product.tagline}"</p>

          <div class="card-pricing-row">
            ${priceHtml}
          </div>

          <!-- Variant Selector on Card if multiple sizes -->
          ${product.sizes.length > 1 ? `
            <div class="card-variant-selector">
              <label>Select Size:</label>
              <div class="variant-pill-group" id="card-variants-${product.id}">
                ${product.sizes.map((sz, idx) => `
                  <button type="button" class="variant-pill-btn ${idx === 0 ? 'active' : ''}" onclick="selectCardVariant('${product.id}', '${sz}', this)">${sz}</button>
                `).join('')}
              </div>
            </div>
          ` : `
            <div class="card-variant-single">
              <span>Standard Pack: <strong>${defaultSize}</strong></span>
            </div>
          `}

          <div class="card-action-btns">
            <button type="button" class="btn-card-add" onclick="quickAddToCartFromCard('${product.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span>Add to Enquiry</span>
            </button>
            <button type="button" class="btn-card-details" onclick="openProductModalById('${product.id}')" aria-label="View specifications for ${product.name}">
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

// Select variant on card
const cardSelectedVariants = {};
window.selectCardVariant = (productId, size, btn) => {
  cardSelectedVariants[productId] = size;
  const parent = btn.parentElement;
  if (parent) {
    parent.querySelectorAll('.variant-pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
};

window.quickAddToCartFromCard = (productId) => {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const selectedSize = cardSelectedVariants[productId] || product.sizes[0];
  addToCart(product.id, selectedSize, 1);
};

// Category Filtering
window.filterByCategory = (categoryKey) => {
  currentCategoryFilter = categoryKey;
  
  // Update UI pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    if (pill.getAttribute('data-filter') === categoryKey) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  renderProductGrid();

  // Smooth scroll to shop section if triggered from category cards
  const shopSection = document.getElementById('shop');
  if (shopSection) {
    const navHeight = document.getElementById('header')?.offsetHeight || 70;
    const topPos = shopSection.offsetTop - navHeight - 10;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
  }
};

window.resetFilters = () => {
  currentCategoryFilter = 'all';
  currentSearchQuery = '';
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) clearBtn.style.display = 'none';

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-filter') === 'all');
  });

  renderProductGrid();
};

// ==========================================
// 4. CART & WHATSAPP CHECKOUT FLOW
// ==========================================
const updateCartUI = () => {
  saveCartToStorage();

  // Total items calculation
  const totalCount = currentCart.reduce((sum, item) => sum + item.quantity, 0);

  // Badge count
  const badgeEl = document.getElementById('cart-count');
  const drawerBadgeEl = document.getElementById('drawer-count-badge');
  if (badgeEl) badgeEl.textContent = totalCount;
  if (drawerBadgeEl) drawerBadgeEl.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;

  // Render items in drawer
  const container = document.getElementById('drawer-items-container');
  if (!container) return;

  if (currentCart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon">🛒</div>
        <h4>Your Enquiry List is Empty</h4>
        <p>Browse our certified biofertilizers and nutrients, and add items to request direct pricing quotes from Anantapur.</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); scrollToShop();">Browse Catalog</button>
      </div>
    `;
    return;
  }

  container.innerHTML = currentCart.map((item, index) => {
    const product = PRODUCTS_DATA.find(p => p.id === item.productId);
    if (!product) return '';

    const priceText = product.isPriceFixed 
      ? `₹${product.priceNumeric * item.quantity} (₹${product.priceNumeric} each)` 
      : 'Price Quote Requested';

    return `
      <div class="drawer-cart-item">
        <img src="${product.image}" alt="${product.name}" class="drawer-item-img">
        <div class="drawer-item-info">
          <h4 class="drawer-item-title">${product.name}</h4>
          <span class="drawer-item-sub">${product.subtitle}</span>
          <span class="drawer-item-size">Pack Size: <strong>${item.size}</strong></span>
          <span class="drawer-item-price">${priceText}</span>
          
          <div class="drawer-item-controls">
            <div class="qty-stepper">
              <button type="button" class="qty-btn" onclick="updateItemQuantity(${index}, -1)" aria-label="Decrease quantity">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button type="button" class="qty-btn" onclick="updateItemQuantity(${index}, 1)" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="btn-remove-item" onclick="removeItemFromCart(${index})" title="Remove item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

window.addToCart = (productId, size, quantity = 1) => {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  // Check if item with same ID and same size already in cart
  const existingIndex = currentCart.findIndex(item => item.productId === productId && item.size === size);

  if (existingIndex > -1) {
    currentCart[existingIndex].quantity += quantity;
  } else {
    currentCart.push({
      productId: product.id,
      name: product.name,
      size: size,
      quantity: quantity,
      isPriceFixed: product.isPriceFixed,
      priceNumeric: product.priceNumeric
    });
  }

  updateCartUI();
  showToast(`Added ${quantity}x ${product.name} (${size}) to Enquiry List!`);
  
  // Highlight cart button
  const cartTrigger = document.getElementById('cart-trigger-btn');
  if (cartTrigger) {
    cartTrigger.classList.add('cart-bounce');
    setTimeout(() => cartTrigger.classList.remove('cart-bounce'), 800);
  }
};

window.quickAddToCart = (productId, size) => {
  addToCart(productId, size, 1);
  openCartDrawer();
};

window.updateItemQuantity = (index, delta) => {
  if (!currentCart[index]) return;
  currentCart[index].quantity += delta;
  if (currentCart[index].quantity <= 0) {
    currentCart.splice(index, 1);
  }
  updateCartUI();
};

window.removeItemFromCart = (index) => {
  if (!currentCart[index]) return;
  const removedName = currentCart[index].name;
  currentCart.splice(index, 1);
  updateCartUI();
  showToast(`Removed ${removedName} from enquiry list.`);
};

window.clearCart = () => {
  if (currentCart.length === 0) return;
  if (confirm('Are you sure you want to clear your entire enquiry list?')) {
    currentCart = [];
    updateCartUI();
    showToast('Enquiry list cleared.');
  }
};

// Special Trio Bundle Add
window.addBundleToCart = (variantSize) => {
  addToCart('triva', variantSize, 1);
  addToCart('vara-siri', variantSize, 1);
  addToCart('humiva', variantSize, 1);
  openCartDrawer();
  showToast(`Added Soil Revival Trio Pack (${variantSize} each) to your enquiry list!`);
};

// WhatsApp Direct Checkout Generator
window.checkoutViaWhatsApp = () => {
  if (currentCart.length === 0) {
    alert('Please add at least one product to your enquiry list first.');
    return;
  }

  const customerName = document.getElementById('cart-customer-name')?.value.trim() || 'Valued Farmer / Dealer';
  const customerCity = document.getElementById('cart-customer-city')?.value.trim() || 'India';

  let message = `*VARAHA BIOLOGICALS - OFFICIAL PRODUCT ENQUIRY*\n`;
  message += `-------------------------------------------\n`;
  message += `*Customer/Farm:* ${customerName}\n`;
  message += `*Delivery Destination:* ${customerCity}\n`;
  message += `*Date:* ${new Date().toLocaleDateString('en-IN')}\n\n`;
  message += `*REQUESTED FORMULATIONS:*\n`;

  let totalUnits = 0;
  let hasMycorPrice = 0;

  currentCart.forEach((item, idx) => {
    const product = PRODUCTS_DATA.find(p => p.id === item.productId);
    totalUnits += item.quantity;
    
    if (product && product.isPriceFixed) {
      const lineTotal = product.priceNumeric * item.quantity;
      hasMycorPrice += lineTotal;
      message += `${idx + 1}. *${item.name}* (${item.size}) — ${item.quantity} unit(s) [₹${lineTotal} MRP]\n`;
    } else {
      message += `${idx + 1}. *${item.name}* (${item.size}) — ${item.quantity} unit(s) [Quote Req.]\n`;
    }
  });

  message += `\n*Total Products:* ${currentCart.length} lines (${totalUnits} total units)\n`;
  if (hasMycorPrice > 0) {
    message += `*Fixed Price Subtotal:* ₹${hasMycorPrice}/-\n`;
  }
  message += `-------------------------------------------\n`;
  message += `Please provide formal quotation, commercial dealer discounts, dosage instructions, and dispatch lead time from Anantapur Plant.`;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/919989161547?text=${encodedMsg}`;
  window.open(waUrl, '_blank');
};

// Drawer controls
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartTriggerBtn = document.getElementById('cart-trigger-btn');
const drawerCloseBtn = document.getElementById('drawer-close-btn');

window.openCartDrawer = () => {
  if (cartDrawerOverlay) {
    cartDrawerOverlay.classList.add('active');
    cartDrawerOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCartDrawer = () => {
  if (cartDrawerOverlay) {
    cartDrawerOverlay.classList.remove('active');
    cartDrawerOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCartDrawer);
if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeCartDrawer);

if (cartDrawerOverlay) {
  cartDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === cartDrawerOverlay) closeCartDrawer();
  });
}

// ==========================================
// 5. PRODUCT DETAIL MODAL / SHEET
// ==========================================
let modalCurrentProduct = null;
let modalSelectedSize = null;
let modalQuantity = 1;

window.openProductModalById = (productId) => {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  modalCurrentProduct = product;
  modalSelectedSize = product.sizes[0];
  modalQuantity = 1;

  const modalOverlay = document.getElementById('product-modal');
  const modalBody = document.getElementById('product-modal-body');
  if (!modalOverlay || !modalBody) return;

  const priceDisplay = product.isPriceFixed
    ? `<div class="modal-price-box"><span class="price-val">₹${product.priceNumeric}</span> <span class="price-tax">MRP (incl. all taxes) for ${product.sizes[0]}</span></div>`
    : `<div class="modal-quote-box"><span class="quote-pill">Contact for Price / Request Quote</span><span class="quote-sub">Direct B2B Dealer &amp; Farm Rates</span></div>`;

  modalBody.innerHTML = `
    <div class="product-modal-grid" style="--modal-accent: ${product.accentColor}; --modal-accent-bg: ${product.accentBg}">
      <!-- Image Column -->
      <div class="modal-img-col">
        <div class="modal-bottle-container">
          <img src="${product.image}" alt="${product.name} ${product.subtitle}" class="modal-bottle-img">
        </div>
        <div class="modal-brand-stamp">
          <img src="images/PDF1_P1_IMG1.png" alt="Varaha Mandala Artwork" class="modal-mandala-icon">
          <span>Proudly Made in Rayalaseema, India</span>
        </div>
      </div>

      <!-- Info & Purchase Column -->
      <div class="modal-info-col">
        <div class="modal-header-tag">
          <span class="modal-cat-tag">${product.categoryLabel}</span>
          <span class="modal-cert-tag">ISO 9001:2015</span>
        </div>

        <h2 class="modal-title">${product.name}</h2>
        <p class="modal-subtitle">${product.subtitle}</p>
        <p class="modal-tagline"><em>"${product.tagline}"</em></p>

        <div class="modal-price-container">
          ${priceDisplay}
        </div>

        <!-- Variant Selector -->
        <div class="modal-variant-section">
          <label class="modal-variant-label">Available Packaging Variant:</label>
          <div class="modal-variant-pills">
            ${product.sizes.map(sz => `
              <button type="button" class="modal-var-pill ${sz === modalSelectedSize ? 'active' : ''}" onclick="selectModalSize('${sz}', this)">
                ${sz}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Quantity & Actions -->
        <div class="modal-purchase-bar">
          <div class="modal-qty-stepper">
            <button type="button" class="qty-btn" onclick="stepModalQty(-1)">-</button>
            <span class="qty-val" id="modal-qty-val">1</span>
            <button type="button" class="qty-btn" onclick="stepModalQty(1)">+</button>
          </div>

          <button type="button" class="btn btn-primary btn-modal-add" onclick="addModalItemToCart()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span>Add to Enquiry List</span>
          </button>

          <button type="button" class="btn btn-whatsapp-direct" onclick="directModalWhatsApp()" title="Direct WhatsApp Enquiry">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.733-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.574 1.97 14.101.945 11.472.945c-5.442 0-9.866 4.372-9.87 9.802 0 1.63.45 3.224 1.302 4.633L1.897 21.06l6.096-1.597.654.391zm10.748-7.534c-.29-.145-1.713-.846-1.978-.942-.266-.097-.459-.145-.654.145-.195.29-.757.942-.927 1.134-.17.195-.34.218-.63.073-.29-.145-1.229-.453-2.34-1.445-.865-.772-1.45-1.725-1.62-2.016-.17-.29-.018-.447.127-.592.13-.13.29-.34.435-.51.145-.17.195-.29.29-.484.097-.195.048-.363-.024-.51-.073-.145-.654-1.573-.896-2.154-.236-.569-.475-.49-.654-.5h-.557c-.195 0-.51.073-.777.363-.266.29-1.016.993-1.016 2.42 0 1.428 1.04 2.808 1.184 3.002.145.195 2.046 3.124 4.957 4.378.692.298 1.233.477 1.655.611.696.222 1.328.19 1.83.115.558-.084 1.713-.7 1.954-1.378.24-.678.24-1.258.17-1.378-.07-.12-.26-.195-.55-.34z"/>
            </svg>
            <span>Enquire on WhatsApp</span>
          </button>
        </div>

        <!-- Technical Specification Tabs -->
        <div class="modal-tabs-wrapper">
          <div class="modal-tab-nav" role="tablist">
            <button type="button" class="modal-tab-btn active" onclick="switchModalTab('tab-advantages', this)">Advantages</button>
            <button type="button" class="modal-tab-btn" onclick="switchModalTab('tab-composition', this)">Composition</button>
            <button type="button" class="modal-tab-btn" onclick="switchModalTab('tab-dosage', this)">Dosage &amp; Application</button>
            <button type="button" class="modal-tab-btn" onclick="switchModalTab('tab-crops', this)">Suitable Crops</button>
          </div>

          <div class="modal-tab-content">
            <!-- Advantages -->
            <div id="tab-advantages" class="tab-pane active">
              <ul class="spec-bullet-list">
                ${product.advantages.map(adv => `<li>&check; ${adv}</li>`).join('')}
              </ul>
              ${product.targetDiseases ? `
                <div class="target-diseases-box">
                  <strong>Target Diseases Controlled:</strong>
                  <p>${product.targetDiseases}</p>
                </div>
              ` : ''}
            </div>

            <!-- Composition -->
            <div id="tab-composition" class="tab-pane">
              <div class="spec-field-box">
                <span class="field-label">Active Formulation:</span>
                <span class="field-value">${product.composition}</span>
              </div>
              <div class="spec-field-box">
                <span class="field-label">Manufacturing Quality:</span>
                <span class="field-value">Sterile Glass Bioreactor Production, Batch Tested</span>
              </div>
              <div class="spec-field-box">
                <span class="field-label">Origin:</span>
                <span class="field-value">Anantapur Industrial Estate, Andhra Pradesh, India</span>
              </div>
            </div>

            <!-- Dosage -->
            <div id="tab-dosage" class="tab-pane">
              <div class="dosage-grid">
                ${Object.entries(product.dosage).map(([method, text]) => {
                  let methodTitle = method.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                  return `
                    <div class="dosage-card">
                      <strong>${methodTitle}</strong>
                      <p>${text}</p>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Crops -->
            <div id="tab-crops" class="tab-pane">
              <div class="crops-info-box">
                <strong>Recommended Crops:</strong>
                <p>${product.crops}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeProductModal = () => {
  const modalOverlay = document.getElementById('product-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

window.selectModalSize = (size, btn) => {
  modalSelectedSize = size;
  const parent = btn.parentElement;
  if (parent) {
    parent.querySelectorAll('.modal-var-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
};

window.stepModalQty = (delta) => {
  modalQuantity = Math.max(1, modalQuantity + delta);
  const qtyEl = document.getElementById('modal-qty-val');
  if (qtyEl) qtyEl.textContent = modalQuantity;
};

window.addModalItemToCart = () => {
  if (!modalCurrentProduct) return;
  addToCart(modalCurrentProduct.id, modalSelectedSize, modalQuantity);
  closeProductModal();
  openCartDrawer();
};

window.directModalWhatsApp = () => {
  if (!modalCurrentProduct) return;
  let text = `Hello Varaha Biologicals, I am inquiring about *${modalCurrentProduct.name}* (${modalSelectedSize}) - Quantity: ${modalQuantity} unit(s). Please share pricing and dispatch availability.`;
  window.open(`https://wa.me/919989161547?text=${encodeURIComponent(text)}`, '_blank');
};

window.switchModalTab = (targetTabId, btn) => {
  const container = btn.closest('.modal-tabs-wrapper');
  if (!container) return;

  container.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  container.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const targetPane = document.getElementById(targetTabId);
  if (targetPane) targetPane.classList.add('active');
};

const productModalCloseBtn = document.getElementById('product-modal-close');
const productModalOverlay = document.getElementById('product-modal');

if (productModalCloseBtn) productModalCloseBtn.addEventListener('click', closeProductModal);
if (productModalOverlay) {
  productModalOverlay.addEventListener('click', (e) => {
    if (e.target === productModalOverlay) closeProductModal();
  });
}

// Escape key to close modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeCartDrawer();
  }
});

// ==========================================
// 6. TOAST NOTIFICATIONS
// ==========================================
let toastTimer = null;
window.showToast = (message) => {
  const toastEl = document.getElementById('toast');
  if (!toastEl) return;

  toastEl.textContent = message;
  toastEl.classList.add('active');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('active');
  }, 3200);
};

// ==========================================
// 7. CONTACT FORM & DIRECT WHATSAPP HANDLERS
// ==========================================
window.sendFormToWhatsApp = () => {
  const name = document.getElementById('contact-name')?.value.trim();
  const phone = document.getElementById('contact-phone')?.value.trim();
  const product = document.getElementById('contact-product')?.value;
  const location = document.getElementById('contact-location')?.value.trim();
  const message = document.getElementById('contact-message')?.value.trim();

  if (!name || !phone) {
    alert('Please provide at least your Name and Phone Number to connect on WhatsApp.');
    return;
  }

  let text = `*VARAHA BIOLOGICALS - DIRECT ENQUIRY*\n`;
  text += `Name: ${name}\n`;
  text += `Phone: ${phone}\n`;
  text += `Product: ${product}\n`;
  text += `Location: ${location || 'N/A'}\n`;
  text += `Details: ${message || 'General Quote Request'}\n`;

  window.open(`https://wa.me/919989161547?text=${encodeURIComponent(text)}`, '_blank');
};

// ==========================================
// 8. DOM READY & EVENT INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderProductGrid();
  updateCartUI();

  // --- MOBILE NAV HAMBURGER ---
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- STICKY HEADER & SCROLL SPY ---
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    const scrollPos = window.scrollY + 140;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.getElementById(`link-${id}`);

      if (navLink && scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- INTERSECTION OBSERVER REVEAL ---
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => observer.observe(el));

  // --- SEARCH INPUT & CLEAR BUTTON ---
  const searchInput = document.getElementById('catalog-search');
  const searchClearBtn = document.getElementById('search-clear-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = currentSearchQuery ? 'block' : 'none';
      }
      renderProductGrid();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      searchClearBtn.style.display = 'none';
      renderProductGrid();
    });
  }

  // --- SORT DROPDOWN ---
  const sortSelect = document.getElementById('catalog-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSortOrder = e.target.value;
      renderProductGrid();
    });
  }

  // --- FILTER PILLS ---
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-filter');
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategoryFilter = filter;
      renderProductGrid();
    });
  });

  // --- RESET FILTERS BUTTON ---
  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) resetBtn.addEventListener('click', resetFilters);

  // --- CONTACT FORM SUBMISSION ---
  const contactForm = document.getElementById('contact-form');
  const contactSuccessState = document.getElementById('contact-success-state');
  const contactSuccessResetBtn = document.getElementById('contact-success-reset');

  if (contactForm && contactSuccessState) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const phone = document.getElementById('contact-phone')?.value.trim();
      const location = document.getElementById('contact-location')?.value.trim();
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !phone || !location || !message) {
        alert('Please fill out all required fields marked with an asterisk (*).');
        return;
      }

      const submitBtn = document.getElementById('contact-submit-btn');
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Transmitting to Anantapur Desk...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        contactSuccessState.classList.add('active');
      }, 1000);
    });

    if (contactSuccessResetBtn) {
      contactSuccessResetBtn.addEventListener('click', () => {
        contactSuccessState.classList.remove('active');
        contactForm.reset();
      });
    }
  }

  // --- URL HASH ROUTING (e.g. #product-mycor-v) ---
  const checkUrlHash = () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#product-')) {
      const prodId = hash.replace('#product-', '');
      openProductModalById(prodId);
    }
  };
  checkUrlHash();
  window.addEventListener('hashchange', checkUrlHash);
});

window.scrollToShop = () => {
  const shopSection = document.getElementById('shop');
  if (shopSection) {
    const navHeight = document.getElementById('header')?.offsetHeight || 70;
    const topPos = shopSection.offsetTop - navHeight - 10;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
  }
};
