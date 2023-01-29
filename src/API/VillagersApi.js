import { useEffect, useState } from "react";

export function useGetVillagers(){
    const [request, setRequest] = useState({data: null, error: null, loading: false})
    const url = 'https://acnhapi.com/v1/villagers/'

    useEffect(() => {
        setRequest(req => {return {...req, data: null, error: null, loading: true}})

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const villagers = [];
                Object.keys(data).forEach((key) => {
                    villagers.push({
                        id: data[key].id,
                        name: data[key].name,
                        imageSource: data[key].image_uri,
                        iconSource: data[key].icon_uri,
                        color: data[key]["bubble-color"],
                        textColor: data[key]["text-color"],
                        isOnIsland: false,
                        isDreamie: false
                    })
                })

                setRequest(req => {return {...req, data: villagers, loading: false}})
            })
            .catch(err => { setRequest(req => {return {...req, error: err.message, loading: false}})})
    }, [])

    return request
}