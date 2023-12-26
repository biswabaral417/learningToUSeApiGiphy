const img=document.getElementById("here")


const fetchimage=()=>{
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=lEVVcuKuTUoPWe2wUHrOX2i8e2lNzqsY&s=cats",{mode:"cors"}).then((response)=>{
        return response.json()
    }).then((response)=>{
        setimage(response.data.images.original.url)
    })
}
fetchimage()

const setimage=(url)=>img.src=url
