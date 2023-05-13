export const getGifs = async ( category ) => {
  //s6v9
  // url giphy api.giphy.com/v1/gifs/search
  //s6v13 se usa el prop category dentro de la url y se adiciona la funcion encodeURI para que reemplace los espacion con %
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&api_key=XcEdxqSsGGGc0FnL2dPWEfvZjNrxz9N1`;
  const resp = await fetch (url);
  const {data} = await resp.json(); // s6v9: data me devuelve el objeto completo (data,meta,pagination) de la pagina giphy, pero 
  // para solo quedarme con el objeto array con los 10 elementos lo desestructuramos {data}
  // console.log(data);
  const gifs = data.map ( img => {
    console.log('objeto completo:',img);
    return {
      id: img.id,
      title: img.user?.display_name, // cambie el title por display.name para tener un titulo mas corto
      url: img.images?.downsized_medium.url // un verificacion extra por si img.images.downsized_medium.url es undefined
      // seria img.images?.downsized_medium.url
    }
  })

  return gifs;
  
}