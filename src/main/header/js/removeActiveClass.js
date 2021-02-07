function removeActiveFilter(filterRef) {
    const currentActiveFilter = filterRef.querySelector('.active');
    if (currentActiveFilter) {
        currentActiveFilter.classList.remove('active')
    };
};

export default removeActiveFilter;