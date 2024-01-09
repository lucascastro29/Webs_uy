import Form from "@/app/ui/Components/Form"
export default function Page(){

//En mi opinion hay que agregar una imagen de fondo a la seccion de contacto 
//Y mejorar el h2 y otras cosas 

    return(
        <div className="mt-8 mb-8" id="Contact">
            <h2 className="grid place-items-center text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-8"> Make your project real!</h2>
            <Form/>
        </div>

    )
}