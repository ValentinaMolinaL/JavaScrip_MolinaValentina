var json = [
    {
        "informacion_personal": {
            "nombre": "Juan Pérez",
            "edad": 30,
            "direccion": {
            "calle": "Calle Principal",
            "numero": 123,
            "ciudad": "Ciudad Ejemplo"
        },
        "contacto": {
            "correo": "juan.perez@example.com",
            "telefono": "+123456789"
        }
        },
        "historial_educativo": [
            {
                "nivel": "Secundaria",
                "institucion": "Instituto Secundario",
                "anio_inicio": 2000,
                "anio_fin": 2005
            },
            {
                "nivel": "Universidad",
                "institucion": "Universidad Ejemplar",
                "titulo": "Licenciatura en Ciencias",
                "anio_inicio": 2006,
                "anio_fin": 2010
            }
        ],
        
        "experiencia_laboral": [
            {
                "puesto": "Desarrollador de Software",
                "empresa": "Tech Solutions",
                "periodo": "2010-2015",
                "responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "puesto": "Gerente de Proyectos",
                "empresa": "Proyectos Avanzados",
        "periodo": "2016-actualidad",
        "responsabilidades": [
        "Planificación y supervisión de proyectos",
        "Coordinación de equipos"
        ]
        }
        ]
    },
    {
        "informacion_personal": {
            "nombre": "pedro",
            "edad": 30,
            "direccion": {
            "calle": "Calle Principal",
            "numero": 123,
            "ciudad": "Ciudad Ejemplo"
        },
        "contacto": {
            "correo": "juan.perez@example.com",
            "telefono": "+123456789"
        }
        },
        "historial_educativo": [
            {
                "nivel": "Secundaria",
                "institucion": "Instituto Secundario",
                "anio_inicio": 2000,
                "anio_fin": 2005
            },
            {
                "nivel": "Universidad",
                "institucion": "Universidad Ejemplar",
                "titulo": "Licenciatura en Ciencias",
                "anio_inicio": 2006,
                "anio_fin": 2010
            }
        ],
        
        "experiencia_laboral": [
            {
                "puesto": "Desarrollador de Software",
                "empresa": "Tech Solutions",
                "periodo": "2010-2015",
                "responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "puesto": "Gerente de Proyectos",
                "empresa": "Proyectos Avanzados",
        "periodo": "2016-actualidad",
        "responsabilidades": [
        "Planificación y supervisión de proyectos",
        "Coordinación de equipos"
        ]
        }
        ]
    }

]


//==========Menu Principal=============
let Opcion1=prompt("--------------------------------\n1).Registrar Usuario \n2).Ver datos de usuario \n3).Eliminar Usuario \n4).Actualizar datos de usuarios\n--------------------------------")

//Crear "Registrar Usuario"-------------------------------------------------------------------------------
if (Opcion1==1){
    console.log(json)
    console.log("-----------------------------------\nInformacion_personal\n-----------------------------------")
    let nombre=prompt("Nombre")
    let edad=prompt("Edad")

    console.log("---Dirección---")
    let calle=prompt("calle")
    let numero=prompt("numero")
    let ciudad=prompt("ciudad")

    console.log("---Contacto---")
    let correo=prompt("correo")
    let telefono=prompt("telefono")

    console.log("-----------------------------------\nHistorial_educativo\n-----------------------------------")
    let nivel=prompt("nivel")
    let institucion=prompt("institucion")
    let anio_inicio=prompt("año inicio")
    let anio_fin=prompt("año fin")

    let nivel1 = prompt("nivel")
    let institucion1 = prompt("institucion")
    let titulo = prompt("ingresa el titulo que optubiste")
    let anio_inicio1 = prompt("año inicio")
    let anio_fin1 = prompt("año fin")

    console.log("-----------------------------------\nExperiencia_laboral\n-----------------------------------")
    let puesto=prompt("puesto")
    let empresa=prompt("empresa")
    let periodo=prompt("periodo")
    let responsabilidades = prompt("ingresa tus responsabilidades en la empresa")

    let puesto1=prompt("puesto")
    let empresa1=prompt("empresa")
    let periodo1=prompt("periodo")
    let responsabilidades1 = prompt("ingresa tus responsabilidades en la empresa")

    var usuarioNuevo=   {
        "informacion_personal": [
            {
                "nombre": nombre,
                "edad": edad,
                "direccion": {
                    "calle": calle,
                    "numero": numero,
                    "ciudad": ciudad
                },
                "contacto": {
                    "correo": correo,
                    "telefono": telefono
                }
            }
        ],
        "historial_educativo": [
            {
                "nivel": nivel,
                "institucion": institucion,
                "anio_inicio": anio_inicio,
                "anio_fin": anio_fin
            },
            {
                "nivel": nivel1,
                "institucion": institucion1,
                "titulo":titulo,
                "anio_inicio": anio_inicio1,
                "anio_fin": anio_fin1
            }
        ],
        "experiencia_laboral": [
            {
                "puesto":puesto,
                "empresa": empresa,
                "periodo":periodo,
                "responsabilidades": [
                    responsabilidades
                ]
            },
            {
                "puesto": puesto1,
                "empresa": empresa1,
                "periodo": periodo1,
                "responsabilidades": [
                    responsabilidades1
                ]
            }
        ]
    }
    json.push(usuarioNuevo)
    console.log(json);
}
//mostrar
else if (Opcion1==2){
    let verPersona=prompt("ingresa el nombre del usuario para ver sus datos.")
    for(i = 0; i <json.length; i++) {
        if(i == json[i],["informacion_personal"][0],["nombre"]){
            console.log((json[i]))
            //console.log("-----Datos del usuario-----")
            //console.log(json[i])
        }
        else if (i !=json[i]["informacion_personal"][0],["nombre"]){
            console.log("El usuarios no")
        }
    }
}
//Eliminar 
else if (Opcion1 ==3) {
    
    function eliminar (json,elemento){
        var resultado = []
        for (i = 0; i < json.length; i++) {
            if(json[i]!=elemento){
                delete i.json
            }
            
        }
        return elemento
    }
    console.log(json)
}
//Actualizar 