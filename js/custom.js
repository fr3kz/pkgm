var title = document.getElementById('tit');
var desc = document.getElementById('desc');

document.getElementById('opcja1').addEventListener('click', btn);
document.getElementById('opcja2').addEventListener('click', function () {
    title.textContent = 'innz yamek';
    desc.textContent = 'praesentibus e est ex quid cupidatat. Dolore reprehenderit probant quorum tempor, illum hic ut illum pariatur. Qui o magna aute labore.';
});

function btn() {
    title.textContent = 'zamek';
    desc.textContent = 'praesentibus e est ex quid cupidatat. Dolore reprehenderit probant quorum tempor, illum hic ut illum pariatur. Qui o magna aute labore.';
}
