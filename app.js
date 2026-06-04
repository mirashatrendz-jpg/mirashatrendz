// --- Product Data ---
const products = [
    {
        id: 1,
        name: "Idol Coin Maanga Necklace ",
        price: 49,
        category: "Necklaces",
        image: "IdolCoinMaangaNecklace.jpeg"
    },
    {
        id: 1,
        name: "Ruby Stone Goddess WhiteBeads Necklace",
        price: 49,
        category: "Necklaces",
        image: "RubyStoneGoddessWhiteBeadsNecklace.jpeg"
    },
    {
        id: 1,
        name: "Green Maanga Invisible Chain",
        price: 39,
        category: "Necklaces",
        image: "GreenMaangaInvisibleChain.jpeg"
    },
     {
        id: 1,
        name: "RubyStoneBeautifulGoddessWhitebeadsNecklace",
        price: 49,
        category: "Necklaces",
        image: "RubyStoneBeautifulGoddessWhitebeadsNecklace.jpeg"
    },
      {
        id: 1,
        name: "KempStoneGreenMangoPalakka ",
        price: 49,
        category: "Necklaces",
        image: "KempStoneGreenMangoPalakka.jpeg"
    },
       {
        id: 1,
        name: "LakshmiCoin Kemp Flower Choker Set",
        price: 49,
        category: "Necklaces",
        image: "LakshmiCoinKempFloweredChokerSet.jpeg"
    },
    {
        id: 1,
        name: "Antique Lakshmi Pendant InvisibleChain",
        price: 39,
        category: "Necklaces",
        image: "AntiqueLakshmiPendantInvisibleChain.jpeg"
    },
     {
        id: 1,
        name: "Multistone Temple Necklace Set",
        price: 39,
        category: "Necklaces",
        image: "MultistoneTempleNecklaceSet.jpeg"
    },
    {
        id: 1,
        name: "Green Palakka Ruby Stone Necklace",
        price: 49,
        category: "Necklaces",
        image: "GreenPalakkaRubyStoneNecklace.jpeg"
    },
    {
        id: 1,
        name: "ThreeLayer Gold And Pearl Beads Necklace",
        price: 39,
        category: "Necklaces",
        image: "ThreeLayerGoldAndPearlBeadsNecklace.jpeg"
    },
    {
        id: 1,
        name: "Kemp RadhaKrishna Necklace",
        price: 39,
        category: "Necklaces",
        image: "KempRadhaKrishnaNecklace.jpeg"
    },
    {
        id: 1,
        name: "SquareCut Emeralds Lakshmi Pendant Chain",
        price: 39,
        category: "Necklaces",
        image: "SquareCutEmeraldsLakshmiPendantChain.jpeg"
    },
      {
        id: 1,
        name: "Layerd Pearl Chain with Pendant ",
        price: 29,
        category: "Necklaces",
        image: "LAYEREDPEARLCHAINWITHPENDANT.jpeg"
    },
    {
        id: 2,
        name: "Classic Diamond Haaram",
        price: 220,
        category: "Haarams",
        image: "Ring-2.jpg"
    },
    {
        id: 3,
        name: "Navaratna Necklace",
        price: 69,
        category: "AD Necklaces",
        image: "NAVARATNA.jpeg"
    },
    {
        id: 3,
        name: "Premium Queen AD Necklaces",
        price: 99,
        category: "AD Necklaces",
        image: "PREMIUMQUEENADNECKLACE.jpeg"
    },
     {
        id: 3,
        name: "Ruby And Daimond Leaf Invisible AD",
        price: 59,
        category: "AD Necklaces",
        image: "RubyAndDaimondLeafInvisibleAD.jpeg"
    },
    {
        id: 4,
        name: "Minimalist Pendant Earrings",
        price: 180,
        category: "Earrings",
        image: "Chain-2.jpg"
    },
    {
        id: 6,
        name: "Adjustable Chain with Waterdrop Pendant",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableChainwithWaterdropPendant.jpeg"
    },
    {
        id: 6,
        name: "Adjustable Snake Chain with Black Stone Pendant",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableSnakeChainwithBlackStonePendant.jpeg"
    },
    {
        id: 7,
        name: "Vintage Jasmine String",
        price: 195,
        category: "Jasmine Strings",
        image: "Ring-3.jpg"
    },
    {
        id: 8,
        name: "KAMADHENU NECKLACE Necklace",
        price: 39,
        category: "Necklaces",
        image: "KAMADHENUNECKLACE.jpeg"
    },
    {
        id: 9,
        name: "Mayura Non-Idol Bangles",
        price: 29,
        category: "Bangles",
        image: "MayuraNon-IdolBangles.JPG.jpeg"
    },
     {
        id: 9,
        name: "Kempstone Antique Bangles",
        price: 39,
        category: "Bangles",
        image: "KempstoneAntiqueBangles.jpeg"
    },
     {
        id: 9,
        name: "Multistone Goddess Bangles",
        price: 59,
        category: "Bangles",
        image: "MultistoneGoddessBangles.JPG.jpeg"
    },
     {
        id: 9,
        name: "Green Palakka Bangles",
        price: 39,
        category: "Bangles",
        image: "GreenPalakkaBangles.JPG.jpeg"
    },
     {
        id: 9,
        name: "Multistone Non-Idol Bangles",
        price: 39,
        category: "Bangles",
        image: "MultistoneNon-IdolBangles.JPG.jpeg"
    },
     {
        id: 9,
        name: "EmerladStoneGoddessBangle",
        price: 39,
        category: "Bangles",
        image: "EmerladStoneGoddessBangle.JPG.jpeg"
    },
     {
        id: 9,
        name: "Matte Elephant Motifs",
        price: 29,
        category: "Bangles",
        image: "MatteElephantMotifs.JPG.jpeg"
    },
    {
        id: 9,
        name: "Openable Premium Camel Motif Kadas",
        price: 79,
        category: "Bangles",
        image: "OpenablePremiumCamelMotifKadas.JPG.jpeg"
    },
    {
        id: 9,
        name: "Openable Premium Ganesha Elephant Kadas",
        price: 59,
        category: "Bangles",
        image: "OpenablePremiumGaneshaElephantKadas.JPG.jpeg"
    },
    {
        id: 9,
        name: "RAMPARIVAR Openable Premium Kadas",
        price: 79,
        category: "Bangles",
        image: "RAMPARIVAROpenablePremiumKadas.JPG.jpeg"
    },
    {
        id: 9,
        name: "Non-Idol Multistone Matte Bangles",
        price: 39,
        category: "Bangles",
        image: "Non-IdolMultistoneMatteBangles.JPG.jpeg"
    },
    {
        id: 9,
        name: "Multistone Beautiful Goddess Bangles",
        price: 39,
        category: "Bangles",
        image: "MultistoneBeautifulGoddessBangles.JPG.jpeg"
    },
     {
        id: 9,
        name: "Infine Love Bangles",
        price: 19,
        category: "Bangles",
        image: "Infinelovebangles.jpeg"
    },
     {
        id: 9,
        name: "Three CircularStone Bangles",
        price: 19,
        category: "Bangles",
        image: "ThreeCircularStoneBangles.jpeg"
    },
     {
        id: 9,
        name: "OpenType Ruby White Flower Bangle",
        price: 19,
        category: "Bangles",
        image: "OpenTypeRubyWhiteFlower.jpeg"
    },
     {
        id: 9,
        name: "Clustered White Floral Split Bangles",
        price: 19,
        category: "Bangles",
        image: "ClusteredWhiteFloralSplitBangles.jpeg"
    },
     {
        id: 9,
        name: "InterlockingRingBangles",
        price: 19,
        category: "Bangles",
        image: "InterlockingRingBangles.jpeg"
    },
     {
        id: 9,
        name: "Double Layer Kemp Multistone Necklace",
        price: 29,
        category: "Necklaces",
        image: "DoubleLayerKempMultistoneNecklace.jpeg"
    },
    {
     
        id: 9,
        name: "Adjustable Butterfly Design Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableButterflyDesignHandcuff.jpeg"
    },
    {
        id: 9,
        name: "Adjustable Multilayer Wires Wrap Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableMultilayerWiresWrapHandcuff.jpeg"
    },
    {
        id: 9,
        name: "Adjustable Gold Floral Design Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableGoldFloralDesignHandcuff.jpeg"
    },
    {
        id: 9,
        name: "Adjustable Daisy Flower Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableDaisyFlowerHandcuff.jpeg"
    },
    {
        id: 10,
        name: "Eternal Hollow Heart Charm and Crystal Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "EternalHollowHeartCharmandCrystalNecklace.jpeg"
    },
    {
        id: 11,
        name: "Gold Floral With Central Crystal Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "GoldFloralWithCentralCrystalNecklace.jpeg"
    },
      {
        id: 11,
        name: "Solid Heart Charms Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "SolidHeartCharmsNecklace.jpeg"
    },
       {
        id: 11,
        name: "Enamel details Cat and Flower Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "EnameldetailsCatandFlowerPendantNecklace.jpeg"
    },
      {
        id: 11,
        name: "FloralCharmsandColourfulStonesNecklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "FloralCharmsandColourfulStonesNecklace.jpeg"
    },
    {
        id: 11,
        name: "Solid Butterfly Charms with Colorful Stones Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "SolidButterflyCharmswithColorfulStonesNecklace.jpeg"
    },
      {
        id: 11,
        name: "Openable Floral Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "OpenableFloralPendantNecklace.jpeg"
    },
    {
        id: 11,
        name: "Cherry Charm Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "CherryCharmPendantNecklace.jpeg"
    },
      {
        id: 11,
        name: "Double Layer Necklace With Heart and Bow",
        price: 19,
        category: "Anti-Tarnish",
        image: "DoubleLayerNecklaceWithHeartandBow.jpeg"
    },
     {
        id: 11,
        name: "BlackStone Charms Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "BlackStoneCharmsNecklace.jpeg"
    },
     {
        id: 11,
        name: "Openable Pink Enamel Butterfly Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "OpenablePinkEnamelButterflyPendantNecklace.jpeg"
    },
];

// --- State ---
let cart = JSON.parse(localStorage.getItem('mirasha_cart')) || [];

// --- DOM Elements ---
const productList = document.getElementById('product-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');
const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('All');
    updateCartUI();
    initScrollAnimations();
    initStickyHeader();
});

// --- Product Rendering & Filtering ---
function renderProducts(filterStr) {
    productList.innerHTML = '';

    const filtered = filterStr === 'All'
        ? products
        : products.filter(p => p.category === filterStr);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                <span class="product-price-original">AED ${(product.price * 1.5).toFixed(2)}</span>
                AED ${product.price.toFixed(2)}
            </div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(card);
    });
}

// Filter button click event
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        e.target.classList.add('active');
        // Render
        const filterStr = e.target.getAttribute('data-filter');
        renderProducts(filterStr);

        // Scroll to products
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});

// Category card click event
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const filterStr = card.getAttribute('data-filter');
        // Update filter buttons
        filterBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === filterStr);
        });
        renderProducts(filterStr);
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});

// --- Cart Logic ---
window.addToCart = function (productId) {
    const productDef = products.find(p => p.id === productId);
    if (!productDef) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productDef.id,
            name: productDef.name,
            price: productDef.price,
            image: productDef.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    openCart();
};

window.updateQuantity = function (productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
};

window.removeFromCart = function (productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
};

function saveCart() {
    localStorage.setItem('mirasha_cart', JSON.stringify(cart));
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let totalQty = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
    } else {
        cart.forEach(item => {
            totalQty += item.quantity;
            totalPrice += item.price * item.quantity;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">AED ${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }

    cartCount.innerText = totalQty;
    cartTotalPrice.innerText = `AED ${totalPrice.toFixed(2)}`;
}

// --- Cart Drawer UI ---
function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

cartToggle.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);

// --- WhatsApp Checkout ---
whatsappCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let messageStr = "Hi, I want to order the following items:\n\n";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        const absoluteImageUrl = new URL(item.image, window.location.href).href;
        messageStr += `${index + 1}. Product: ${item.name}\n`;
        messageStr += `   Qty: ${item.quantity}\n`;
        messageStr += `   Price: AED ${item.price.toFixed(2)}\n`;
        if (item.quantity > 1) {
            messageStr += `   Item Total: AED ${itemTotal.toFixed(2)}\n`;
        }
        messageStr += `   Image: ${absoluteImageUrl}\n\n`;
        totalPrice += itemTotal;
    });

    messageStr += `Total: AED ${totalPrice.toFixed(2)}\n\n`;
    messageStr += "Please confirm availability.";

    const encodedMessage = encodeURIComponent(messageStr);
    const whatsappUrl = `https://wa.me/971555162033?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
});

// --- Scroll Animations ---
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    elements.forEach(el => observer.observe(el));
}

// --- Sticky Header Logic ---
function initStickyHeader() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = 'none';
        }
    });
}
