Preview.onclick = function() {
        var pathObject = document.getElementById("objectData").value;
        var pathAnimation = document.getElementById("animationData").value;
        var pathTexture = document.getElementById("textureImage").value;
        var pathBuffer = document.getElementById("bufferGeometryData").value;
        var pathMaterial = document.getElementById("materialData").value;
        console.log("PREPARING SYSTEM BEFORE LOAD...");
        console.log("DEFINE: animationLoader = new THREE.AnimateLoader();");
        var animationLoader = new THREE.AnimationLoader();
        console.log("DEFINE: objectLoader = new THREE.ObjectLoader();");
        var objectLoader = new THREE.ObjectLoader();
        console.log("DEFINE: textureLoader = new THREE.TextureLoader();");
        var textureLoader = new THREE.TextureLoader();
        console.log("DEFINE: bufferGeometryLoader = new THREE.BufferGeometryLoader();");
        var bufferGeometryLoader = new THREE.BufferGeometryLoader();
        console.log("DEFINE: materialLoader = new THREE.MaterialLoader();");
        var materialLoader = new THREE.MaterialLoader();
        console.log("SYSTEM READY");
        console.log("HIDING FORM...");
        form.style.visibility = 'hidden';
        console.log("SHOWING LOADING SCREEN...");
        loading.style.visibility = 'visible';

        if (pathBufferGeometry) {
            bufferGeometryLoader.load(
                pathBuffer,

                function(geometry) {
                    var bufferGeometryData1 = geometry;
                },

                function(xhr) {
                    console.log("LOADING" + pathBuffer + (xhr.loaded / xhr.total * 100) + "%");
                },

                function(err) {
                    console.error(err);
                }
            );

            if (pathObject) {
                objectLoader.load(
                    pathObject,

                    function(obj) {
                        var objectData1 = obj;
                    },

                    function(xhr) {
                        console.log("LOADING" + pathObject + (xhr.loaded / xhr.total * 100) + "%");
                    },

                    function(err) {
                        console.error(err);
                    }
                );
            };

            if (pathTexture) {
                textureLoader.load(
                    pathTexture,

                    function(texture) {
                        var textureData1 = texture;
                    },

                    undefined,

                    function(err) {
                        console.error(err);
                    }
                );

                if (pathMaterial) {
                    materialLoader.load(
                        pathMaterial,

                        function(material) {
                            var materialData1 = material;
                        },

                        function(xhr) {
                            console.log("LOADING" + pathMaterial + (xhr.loaded / xhr.total * 100) + "%");
                        },

                        function(err) {
                            console.error(err);
                        }
            );
          };
        };
      };
