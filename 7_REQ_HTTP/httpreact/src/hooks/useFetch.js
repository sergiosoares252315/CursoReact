import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - loading
    const [loading, setLoanding] = useState(false);

    // 7 - tratando erros
    const [error, setError] = useState(null);

    // 8 - Desfio 6
    const [itemId, setItemId] = useState(null);


    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
        }
        else if (method === "DELETE")
        {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
            });
        }

        setMethod(method);
        setItemId(data);
    };

    useEffect(() => {
        const fetchData = async () => {
            //  6 - loading
            setLoanding(true);

            try
            {
                const res = await fetch(url);
                const json = await res.json();

                setData(json);
            }
            catch (error)
            {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados!")
            }

            setLoanding(false);
        };

        fetchData();

    }, [url, callFetch] /* dependencia da useEffect*/)

    // 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            let json;

            if (method === "POST") {
                let fetchOption = [url, config];

                const res = await fetch(...fetchOption);
                json = await res.json();

            }
            else if (method === "DELETE" && itemId)
            {
                const deleteUrl = `${url}/${itemId}`;
                const res = await fetch(deleteUrl, config);
                json = await res.json();
            }

            setCallFetch(json);
        };

        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
};