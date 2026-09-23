const stage=document.querySelector('.stage'), bikes=[...document.querySelectorAll('.bike')], swatches=[...document.querySelectorAll('[data-select]')], dialog=document.querySelector('#details');
const variants={green:{price:'$5000',number:'01'},silver:{price:'$5079',number:'02'},black:{price:'$5079',number:'03'}};
let selected='green',animations=[],closingTimer;
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
let driving=false,queuedColor=null;
function selectColor(color){
 if(!variants[color])return;
 if(driving){queuedColor=color;return;}
 if(color===selected)return;
 const previous=selected;selected=color;
 animations.forEach(a=>a.cancel());animations=[];
 bikes.forEach(img=>img.classList.toggle('active',img.dataset.bike===color));
 stage.dataset.color=color;
 document.querySelector('.brand img').src='assets/reference-'+color+'.png';
 document.querySelector('#price').textContent=variants[color].price;
 document.querySelector('#number').textContent=variants[color].number;
 swatches.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.select===color)));
 document.querySelector('#status').textContent=color+' selected';
 if(reduced())return;
 driving=true;
 const out=bikes.find(b=>b.dataset.bike===previous),next=bikes.find(b=>b.dataset.bike===color);
 // A short suspension load precedes acceleration. Both bikes travel forward.
 const departure=out.animate([
  {offset:0,transform:'translate(0,0) rotate(0deg)',filter:'blur(0px)',opacity:1,easing:'ease-in-out'},
  {offset:.19,transform:'translate(-0.6%,0.65%) rotate(-0.45deg) scaleY(.993)',filter:'blur(0px)',opacity:1,easing:'cubic-bezier(.55,0,.95,.55)'},
  {offset:.62,transform:'translate(28%,-0.3%) rotate(-1.3deg)',filter:'blur(.5px)',opacity:1,easing:'cubic-bezier(.45,.1,1,.7)'},
  {offset:1,transform:'translate(155%,0) rotate(-.4deg)',filter:'blur(3px)',opacity:1}
 ],{duration:760,fill:'forwards'});
 const arrival=next.animate([
  {offset:0,transform:'translate(-150%,0) rotate(-.5deg)',filter:'blur(3px)',opacity:1,easing:'linear'},
  {offset:.42,transform:'translate(-42%,0) rotate(-.5deg)',filter:'blur(1.3px)',opacity:1,easing:'cubic-bezier(.15,.65,.25,1)'},
  {offset:.76,transform:'translate(1.8%,.6%) rotate(.85deg) scaleY(.993)',filter:'blur(0px)',opacity:1,easing:'ease-in-out'},
  {offset:.9,transform:'translate(-.25%,-.15%) rotate(-.2deg)',filter:'blur(0px)',opacity:1,easing:'ease-out'},
  {offset:1,transform:'translate(0,0) rotate(0deg)',filter:'blur(0px)',opacity:1}
 ],{duration:1100,delay:570,fill:'both'});
 animations.push(departure,arrival);
 arrival.finished.then(()=>{
  departure.cancel();arrival.cancel();animations=[];driving=false;
  const requested=queuedColor;queuedColor=null;
  if(requested&&requested!==selected)selectColor(requested);
 }).catch(()=>{driving=false;});
}
swatches.forEach(b=>b.addEventListener('click',()=>selectColor(b.dataset.select)));
function openDetails(){clearTimeout(closingTimer);dialog.classList.remove('closing');document.querySelector('.detail-color').textContent=selected.toUpperCase();document.querySelector('#detail-bike').src='assets/'+selected+'.png';document.querySelector('#detail-bike').alt=selected+' Kawasaki Ninja 500';document.querySelector('#detail-price').textContent=variants[selected].price;if(!dialog.open)dialog.showModal();document.body.style.overflow='hidden';}
function closeDetails(){if(!dialog.open||dialog.classList.contains('closing'))return;dialog.classList.add('closing');closingTimer=setTimeout(()=>{dialog.close();dialog.classList.remove('closing');document.body.style.overflow='';},reduced()?0:300);}
document.querySelector('#explore').addEventListener('click',openDetails);document.querySelector('#features').addEventListener('click',openDetails);document.querySelector('.close').addEventListener('click',closeDetails);document.querySelector('.back').addEventListener('click',closeDetails);dialog.addEventListener('cancel',e=>{e.preventDefault();closeDetails()});dialog.addEventListener('click',e=>{if(e.target===dialog&&e.clientX<dialog.getBoundingClientRect().left)closeDetails()});document.querySelector('#models').addEventListener('click',()=>{swatches.find(b=>b.dataset.select===selected).focus()});document.querySelector('#gallery').addEventListener('click',()=>{selectColor(['green','silver','black'][(['green','silver','black'].indexOf(selected)+1)%3])});
