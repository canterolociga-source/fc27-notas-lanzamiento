/* FC27 navigation support: loaded before app.js so the SPA renderer always has its nav helper. */
window.renderNav = function(active){
  const nav = document.getElementById('mainNav');
  if(!nav) return;
  const items = [
    ['inicio','Inicio'],
    ['indice','Índice'],
    ['fechas','Fechas clave'],
    ['fut','FUT'],
    ['temporada','Temporada 1'],
    ['grounds','The Grounds'],
    ['carrera','Modo Carrera']
  ];
  nav.innerHTML = items.map(([id,label]) =>
    `<a href="#${id}" class="${active===id?'active':''}">${label}</a>`
  ).join('');
};
