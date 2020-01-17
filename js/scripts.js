function openMenu() {
    document.getElementById('opened-menu').style.display = 'block'
    document.getElementById('hamburger-wrapper').style.display = 'none'
}
function closeMenu() {
    document.getElementById('opened-menu').style.display = "none"
    document.getElementById('hamburger-wrapper').style.display = 'block'
}
function onLoad() {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);
    
    script.addEventListener('load', () => {
        if(window.hbspt) {
          window.hbspt.forms.create({
            portalId: '6995020',
          formId: 'b7532526-71f9-478f-aef3-ff1e444a8736',
          target: '#hubspotForm'
        })
      }
    });
}