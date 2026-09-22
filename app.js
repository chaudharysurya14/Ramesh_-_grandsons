
const WA="918804558777";
const AMAZON="https://www.amazon.in/l/27943762031?me=A1LE4B1GSUCSJF&ref_=sc_ls_qr";
const MEESHO="https://www.meesho.com/RAMESHRADIOCENTER?ms=2";
const FLIPKART="https://seller.flipkart.com/index.html#dashboard/sellerOnboarding?onboardingState=onboardingDashboard";
const DEFAULT_PRODUCTS=[
  {
    "id": "iron-001",
    "name": "Electric Iron",
    "category": "Irons",
    "price": 0,
    "image": "assets/products/iron.jpg",
    "description": "Representative product image. Update model, specifications, warranty and price from the Catalogue Manager.",
    "active": true
  },
  {
    "id": "tv-001",
    "name": "LED TV",
    "category": "Televisions",
    "price": 0,
    "image": "assets/products/tv.jpg",
    "description": "Representative product image. Update screen size, model, features and price from the Catalogue Manager.",
    "active": true
  },
  {
    "id": "fan-001",
    "name": "Ceiling Fan",
    "category": "Fans",
    "price": 0,
    "image": "assets/products/fan.jpg",
    "description": "Representative product image. Update model, sweep, warranty and price from the Catalogue Manager.",
    "active": true
  },
  {
    "id": "speaker-001",
    "name": "Speaker",
    "category": "Speakers",
    "price": 0,
    "image": "assets/products/speaker.jpg",
    "description": "Representative product image. Update model, audio features and price from the Catalogue Manager.",
    "active": true
  },
  {
    "id": "cooler-001",
    "name": "Air Cooler",
    "category": "Coolers",
    "price": 0,
    "image": "assets/products/cooler.jpg",
    "description": "Representative product image. Update capacity, model, warranty and price from the Catalogue Manager.",
    "active": true
  },
  {
    "id": "mixer-001",
    "name": "Mixer Grinder",
    "category": "Kitchen Appliances",
    "price": 0,
    "image": "assets/products/mixer.jpg",
    "description": "Representative product image. Update model, features, warranty and price from the Catalogue Manager.",
    "active": true
  },
  {
    "id": "appliance-001",
    "name": "Home Appliance",
    "category": "Home Appliances",
    "price": 0,
    "image": "assets/products/home-appliance.jpg",
    "description": "Representative product image. Replace with the exact stock/model image when available.",
    "active": true
  },
  {
    "id": "electrical-001",
    "name": "Extension Board",
    "category": "Electrical Accessories",
    "price": 0,
    "image": "assets/products/extension-board.jpg",
    "description": "Representative product image. Update specifications and price from the Catalogue Manager.",
    "active": true
  }
];
const businesses={
electronics:{title:"Ramesh Radio Center",desc:"Electronics and appliance products, customer enquiries and online sales support.",items:"LED/LCD TVs • Fans • Coolers • Irons • Speakers • DTH/Set-top Boxes • Electrical Accessories"},
ecommerce:{title:"E-Commerce",desc:"Online marketplace selling and customer access through Amazon, Meesho and Flipkart.",items:"Amazon • Meesho • Flipkart • Direct WhatsApp Enquiries"},
"import-export":{title:"Import / Export",desc:"A future vertical for sourcing, distribution and international trade opportunities.",items:"Sourcing • Distribution • International Trade"},
"it-services":{title:"IT / Services",desc:"A future technology and professional-services vertical for digital business solutions.",items:"Technology Services • Digital Solutions • Business Support"},
manufacturing:{title:"Manufacturing",desc:"A future product-development and manufacturing vertical.",items:"Product Development • Manufacturing • Supply"},
trading:{title:"Trading",desc:"A future B2B and B2C sourcing, distribution and trading vertical.",items:"Sourcing • Distribution • B2B Trading"},
voltcare:{title:"Volt-Care",desc:"A new business/company initiative associated with the group's expanding portfolio.",items:"Business Development • Future Services • Product & Service Opportunities"}
};

function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function getProducts(){try{const x=JSON.parse(localStorage.getItem("rg_products_v23"));if(Array.isArray(x))return x}catch{}return DEFAULT_PRODUCTS}
function saveProducts(x){localStorage.setItem("rg_products_v23",JSON.stringify(x))}
function productCard(p){
const image=p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)}">`:`<div class="placeholder">▧</div>`;
const price=Number(p.price)>0?`₹${Number(p.price).toLocaleString("en-IN")}`:`<span class="enq">Price on enquiry</span>`;
return `<article class="product"><div class="pimg">${image}</div><div class="pbody"><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><div class="price">${price}</div><div class="paction"><a target="_blank" href="https://wa.me/${WA}?text=${encodeURIComponent("Hello RAMESH & GRANDSONS, I am interested in "+p.name+". Please share the current price and availability.")}">WhatsApp Enquiry</a></div></div></article>`;
}
function renderProducts(){
const box=document.getElementById("products");if(!box)return;
const query=(document.getElementById("productSearch")?.value||"").toLowerCase().trim();
const cat=(document.getElementById("productCategory")?.value||"All");
let ps=getProducts().filter(p=>p.active!==false);
if(query) ps=ps.filter(p=>(p.name+" "+p.category+" "+p.description).toLowerCase().includes(query));
if(cat!=="All") ps=ps.filter(p=>p.category===cat);
box.innerHTML=ps.map(productCard).join("")||'<div class="card empty-products"><h3>No matching products</h3><p>Try another category or search term, or contact us for availability.</p></div>';
}
function initProductFilters(){
const cats=document.getElementById("productCategory"); if(!cats)return;
const unique=["All",...new Set(getProducts().filter(p=>p.active!==false).map(p=>p.category).filter(Boolean))];
cats.innerHTML=unique.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join("");
document.getElementById("productSearch")?.addEventListener("input",renderProducts);
cats.addEventListener("change",renderProducts);
}
function openBusiness(key){
const b=businesses[key];if(!b)return;
location.href="business.html?key="+encodeURIComponent(key);
}
function sendEnquiry(e){
e.preventDefault();
const n=document.getElementById("name").value,p=document.getElementById("phone").value,t=document.getElementById("etype").value,m=document.getElementById("message").value;
const txt=`Hello RAMESH & GRANDSONS,%0AName: ${encodeURIComponent(n)}%0APhone: ${encodeURIComponent(p)}%0AEnquiry: ${encodeURIComponent(t)}%0AMessage: ${encodeURIComponent(m)}`;
window.open("https://wa.me/"+WA+"?text="+txt,"_blank");
}
function chatReply(q){
const s=q.toLowerCase();
if(s.includes("price")||s.includes("rate"))return "Product prices depend on model and stock. Please open the Products section or send the product name on WhatsApp for the latest price.";
if(s.includes("amazon"))return "Our Amazon store is available from the Online Store buttons. For product help, you can also contact us on WhatsApp.";
if(s.includes("meesho"))return "Our public Meesho storefront is available from the Online Store buttons.";
if(s.includes("flipkart"))return "Our Flipkart seller link is available from the Online Store buttons.";
if(s.includes("address")||s.includes("location"))return "Ramesh Radio Center is at Opposite Durga Mandir, Bihar Road, Ekangarsarai, Bihar – 801301.";
if(s.includes("phone")||s.includes("contact")||s.includes("call"))return "You can contact us on 8804558777, 6203821250 or 6200120648, or email rameshandgrandsons@gmail.com.";
if(s.includes("brand"))return "Brands currently listed include USHA, Khetan, Pigeon, JUNTO and Roxy, subject to current stock.";
if(s.includes("volt"))return "Volt-Care is an associated company connected with RAMESH & GRANDSONS. Contact us for current details.";
if(/iron|tv|fan|speaker|cooler|dth|electronic|product/.test(s))return "We deal in electronics and appliances including TVs, irons, fans, coolers, speakers, DTH/set-top boxes and electrical accessories.";
return "I can help with products, prices, brands, Amazon, Meesho, Flipkart, address, contact details and Volt-Care. For a specific requirement, please send your question.";
}
function addMsg(text,who){const b=document.getElementById("chatbody");if(!b)return;const d=document.createElement("div");d.className="msg "+who;d.textContent=text;b.appendChild(d);b.scrollTop=b.scrollHeight}
function initChat(){
const i=document.getElementById("chatinput");if(!i)return;
addMsg("Hello! I’m the RAMESH & GRANDSONS assistant. Ask me about products, brands, online stores, address or contact details.","bot");
document.querySelectorAll(".quick").forEach(x=>x.onclick=()=>sendChat(x.textContent));
document.getElementById("chatsend").onclick=()=>{sendChat(i.value);i.value=""};
i.addEventListener("keydown",e=>{if(e.key==="Enter"){sendChat(i.value);i.value=""}});
}
function sendChat(t){if(!t.trim())return;addMsg(t,"user");setTimeout(()=>addMsg(chatReply(t),"bot"),180)}
function openAdmin(){
document.getElementById("adminModal").classList.add("show");renderAdmin();
}
function closeAdmin(){document.getElementById("adminModal").classList.remove("show")}
function renderAdmin(){
const list=document.getElementById("adminList");if(!list)return;
list.innerHTML=getProducts().map(p=>`<div class="admin-row"><div>${p.image?`<img src="${esc(p.image)}">`:"No image"}</div><div><b>${esc(p.name)}</b><br><small>${esc(p.category)} • ₹${Number(p.price||0).toLocaleString("en-IN")}</small></div><div><button class="btn dark" onclick="editProduct('${p.id}')">Edit</button> <button class="btn" style="background:#eee" onclick="deleteProduct('${p.id}')">Delete</button></div></div>`).join("");
}
function addProduct(){
const name=document.getElementById("pn").value.trim(),category=document.getElementById("pc").value.trim(),price=Number(document.getElementById("pp").value||0),desc=document.getElementById("pd").value.trim(),image=document.getElementById("pi").value.trim();
if(!name)return alert("Product name required.");
const ps=getProducts();ps.unshift({id:"p-"+Date.now(),name,category:category||"Other",price,image,description:desc,active:true});saveProducts(ps);
["pn","pc","pp","pd","pi"].forEach(id=>document.getElementById(id).value="");renderProducts();renderAdmin();
}
function editProduct(id){
const ps=getProducts(),p=ps.find(x=>x.id===id);if(!p)return;
const name=prompt("Product name:",p.name);if(name===null)return;
const price=prompt("Price:",p.price);const image=prompt("Image URL (or relative path):",p.image||"");const desc=prompt("Description:",p.description||"");
p.name=name;p.price=Number(price||0);p.image=image||"";p.description=desc||"";saveProducts(ps);renderProducts();renderAdmin();
}
function deleteProduct(id){if(!confirm("Delete this product?"))return;saveProducts(getProducts().filter(x=>x.id!==id));renderProducts();renderAdmin()}
function exportProducts(){
const blob=new Blob([JSON.stringify(getProducts(),null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="products.json";a.click();URL.revokeObjectURL(a.href);
}
function importProducts(ev){
const f=ev.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(!Array.isArray(x))throw 0;saveProducts(x);renderProducts();renderAdmin();alert("Catalogue imported successfully in this browser.")}catch{alert("Invalid products.json file.")}};r.readAsText(f);
}
function resetProducts(){if(!confirm("Reset this browser's catalogue to the original starter products?"))return;localStorage.removeItem("rg_products_v23");renderProducts();renderAdmin()}
document.addEventListener("DOMContentLoaded",()=>{initProductFilters();renderProducts();initChat();});
