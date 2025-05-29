import { useEffect, useState } from "react";

// whenever the state change --> component re-render --> re-run
// primitive, non-primitive

const HomePage = () => {
    const [productsArray, setProductsArray] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    console.log("🟡 : page:", page);

    const getData = () => {
        const skipItems = limit * (page - 1);
        const pr = fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipItems}`);
        pr.then((res) => res.json()).then((data) => {
            console.log(data);
            setProductsArray(data.products); // noted!
            setTotalProducts(data.total);
            setPage(data.skip / limit + 1);
        });
    };

    // useEffect(() => {
    //     getData();
    // }, []); // with [] --> useEffect will call the callback function only once (during initial render)

    useEffect(() => {
        getData();
    }, [page]); // with [] --> useEffect will call the callback function only once (during initial render)

    console.log("🟡 : productsArray:", productsArray);

    return (
        <div>
            <div>
                {productsArray.map(({ id, title, price, thumbnail }, idx) => {
                    return (
                        <div key={id}>
                            <h3>
                                {idx + 1}. {title}
                            </h3>
                            <p>{price}</p>
                            <img src={thumbnail} width="50px" />
                        </div>
                    );
                })}
            </div>
            <div>
                <p>TotalProducts: {totalProducts}</p>
                <p>Limit: {limit}</p>
                {totalProducts > 0 && (
                    <select onChange={(e) => setPage(e.target.value)}>
                        {[...Array(Math.ceil(totalProducts / limit))].map((elem, idx) => {
                            return (
                                <option key={idx} value={idx + 1}>
                                    {idx + 1}
                                </option>
                            );
                        })}
                    </select>
                )}
            </div>
        </div>
    );
};

export { HomePage };
