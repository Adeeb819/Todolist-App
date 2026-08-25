document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const list = document.querySelector('.task-list');
    if (!content || !list) return;

    const subtitle = document.querySelector('.hero-sub');
    const progressFill = document.querySelector('.progress-fill');

    const total = parseInt(content.dataset.total, 10) || 0;
    let done = parseInt(content.dataset.done, 10) || 0;

    function updateStats() {
        if (subtitle) subtitle.textContent = done + ' of ' + total + ' tasks completed';
        if (progressFill) progressFill.style.width = Math.floor((done / total) * 100) + '%';
    }

    function showEmptyState() {
        if (document.querySelector('.empty-state')) return;
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>' +
            '<path d="M9 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3" stroke="currentColor" stroke-width="1.5"/>' +
            '<path d="M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
            '</svg><h4>All caught up!</h4><p>Nice work, you’ve completed everything</p>';
        list.replaceWith(empty);
    }

    list.addEventListener('click', (e) => {
        const btn = e.target.closest('.task-check');
        if (!btn) return;
        const card = btn.closest('.task-card');
        if (!card || card.classList.contains('is-complete')) return;

        e.preventDefault();
        fetch(btn.getAttribute('href')).catch(() => {});

        card.classList.add('is-complete');
        done++;
        updateStats();

        setTimeout(() => {
            card.classList.add('task-card-hide');
            card.addEventListener('transitionend', () => {
                card.remove();
                if (!list.querySelector('.task-card')) showEmptyState();
            }, { once: true });
        }, 650);
    });
});
