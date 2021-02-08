function resetList() {
    const listRef = document.querySelector('#list');
    listRef && listRef.remove();
};

function addActiveFilter(nextActiveFilter) {
    nextActiveFilter.classList.add('active');
}

function removeActiveFilter(filterRef) {
    const currentActiveFilter = filterRef.querySelector('.active');
    if (currentActiveFilter) {
        currentActiveFilter.classList.remove('active')
    };
};
    
export {resetList, addActiveFilter, removeActiveFilter};