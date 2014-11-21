(function(){
	var app=angular.module('arbolesPorMunicipio',[]);

	app.controller('ArbolesController',function(){

		this.municipios = [{
	     nombre:'Monterrey',
	     total:3900,
	     arboles:[
				{
					nombreArbol:'Encino Siempre Verde',
					imagen:'alamo_de_rio',
					porcentaje:70
				},
				{
					nombreArbol:'Encino Rojo',
					imagen:'alamo_de_rio',
					porcentaje:10
				},
				{
					nombreArbol:'Encino Roble',
					imagen:'alamo_de_rio',
					porcentaje:10
				},
				{
					nombreArbol:'Alamo del rio',
					imagen:'alamo_de_rio',
					porcentaje:5
				},
				{
					nombreArbol:'Ebano',
					imagen:'alamo_de_rio',
					porcentaje:5
				}
			]
	   },
	   {
	     nombre:'Apodaca',
	     total:4500,
	     arboles:[
				{
					nombreArbol:'Encino Siempre Verde',
					imagen:'alamo_de_rio',
					porcentaje:50
				},
				{
					nombreArbol:'Encino Rojo',
					imagen:'alamo_de_rio',
					porcentaje:20
				},
				{
					nombreArbol:'Encino Roble',
					imagen:'alamo_de_rio',
					porcentaje:10
				},
				{
					nombreArbol:'Alamo del rio',
					imagen:'alamo_de_rio',
					porcentaje:10
				},
				{
					nombreArbol:'Ebano',
					imagen:'alamo_de_rio',
					porcentaje:10
				}
			]
	   },
	   {
	     nombre:'Guadalupe',
	     total:4500,
	     arboles:[
				{
					nombreArbol:'Encino Siempre Verde',
					imagen:'alamo_de_rio',
					porcentaje:50
				},
				{
					nombreArbol:'Encino Rojo',
					imagen:'alamo_de_rio',
					porcentaje:20
				},
				{
					nombreArbol:'Encino Roble',
					imagen:'alamo_de_rio',
					porcentaje:10
				},
				{
					nombreArbol:'Alamo del rio',
					imagen:'alamo_de_rio',
					porcentaje:10
				},
				{
					nombreArbol:'Ebano',
					imagen:'alamo_de_rio',
					porcentaje:10
				}
			]
	   },
	   {
	     nombre:'Garcia',
	     total:4500,
	     arboles:[
				{
					nombreArbol:'Encino Siempre Verde',
					imagen:'alamo_de_rio',
					porcentaje:50
				},
				{
					nombreArbol:'Encino Rojo',
					imagen:'alamo_de_rio',
					porcentaje:20
				},
				{
					nombreArbol:'Encino Roble',
					imagen:'alamo_de_rio',
					porcentaje:10
				},
				{
					nombreArbol:'Alamo del rio',
					imagen:'alamo_de_rio',
					porcentaje:10
				},
				{
					nombreArbol:'Ebano',
					imagen:'alamo_de_rio',
					porcentaje:10
				}
			]
	   }];
	});
	app.filter('imagenArbol',function(){
		return function(input){
			//var urlImage = "imagenes/arboles/" + input.toLowerCase() + ".svg";
			var urlImage = "imagenes/arboles/alamo_de_rio.svg";
      		return urlImage;
		}
	});

	app.filter('porcentajeTotal',function(){
		return function(input){
			var porcentaje = input+"%";
      		return porcentaje;
		}
	});

})();