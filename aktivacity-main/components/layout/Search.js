
export default function Search({ isSearch, handleSearch }) {
    return (
        <>
            <div className="search-wrap" style={{ display: `${isSearch ? "block" : "none"}` }}>
                <div className="search-inner">
                    <i className="fas fa-times search-close" id="search-close" onClick={handleSearch} />
                    <div className="search-cell">
                        <form method="get">
                            <div className="search-field-holder">
                                <input type="search" className="main-search-input" placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
