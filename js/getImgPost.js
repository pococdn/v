                var imgPostGetm = [];
        var numPostDivm = document.getElementsByClassName("imgPostGetm").length;
        for (var i = 0; i < numPostDivm; i++) {
            imgPostGetm[i] = document.getElementsByClassName("imgPostGetm")[i].alt;
        }
            cargadorPostm = async() => {
	try {
        const respuestaPostm = [];
        let obtenerDatosPostm = [];
        for (var i = 0; i < numPostDivm; i++) {
		respuestaPostm[i] = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=48f4c29bf50e5960b9218548580118e6&language=es-Es&query=`+imgPostGetm[i]);

		// Si la respuesta es correcta
		if(respuestaPostm[i].status === 200){
			const datos = await respuestaPostm[i].json();
			obtenerDatosPostm[i] = '';
			datos.results.slice(0,1).forEach(datos => {
				obtenerDatosPostm[i] = `https://image.tmdb.org/t/p/w300/${datos.poster_path}`;
			});
            document.getElementsByClassName("imgPostGetm")[i].src = obtenerDatosPostm[i];
		}

	}} catch(error){
		console.log(error);
	}
    }
cargadorPostm();
