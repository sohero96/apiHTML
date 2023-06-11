
/* /////////////////////////////////////////////////////////////
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        script para Práctica API HTML  -  vídeo

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 ///////////////////////////////////////////////////////////// */

if(window.File && window.FileReader && window.FileList) {
    alert("API's verificadas");
    function handleFileSelect(evt) {
        let file = evt.target.files[0];
        if (!file.type.match('video.*')) {
            return;
        }

        let reader = new FileReader();
        reader.onload = (function (File) {
            return function (e) {
                let videoDiv = document.getElementsByClassName('video-contenedor');

                if(videoDiv[0] != null) {
                    videoDiv[0].parentNode.removeChild(videoDiv[0]);
                }
                    
                let div = document.createElement('div');
                div.id = "video-div";
                div.className = "video-contenedor";
                div.innerHTML = '<video controls id="video" class="thumb" src="' + e.target.result + '" title="'+ escape(File.name) + '"/>';

                document.getElementById('output').insertBefore(div, null);

                var mensaje=alert('El video esta cargando');
                mensaje;

                let playbtn = document.getElementById('play');
                let pausebtn = document.getElementById('pause');
                let vlmUpbtn = document.getElementById('up');
                let vlmDownbtn = document.getElementById('down');
                
                playbtn.addEventListener('click', () => {
                    document.getElementById('video').play();
                });
                
                pausebtn.addEventListener('click', () => {
                    document.getElementById('video').pause();
                })

                vlmUpbtn.addEventListener('click', () => {
                    document.getElementById('video').volume += 0.1;
                })

                vlmDownbtn.addEventListener('click', () => {
                    document.getElementById('video').volume -= 0.1;
                })

                document.getElementById('video').addEventListener('canplay', () => {

               document.getElementById('video').style.visibility = "visible";

                    playbtn.style.visibility = "visible";
                    pausebtn.style.visibility = "visible";
                    vlmUpbtn.style.visibility = "visible";
                    vlmDownbtn.style.visibility = "visible"; 
                });
            }
        }) (file);

        reader.readAsDataURL(file);
    } 

    document.getElementById('file').addEventListener('change', handleFileSelect, false);
} else {
    alert('File APIs no están soportadas por este navegador.')
}
