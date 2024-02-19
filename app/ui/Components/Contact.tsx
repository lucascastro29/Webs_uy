import Form from "@/app/ui/Components/Form";
export default function Page() {
  //En mi opinion hay que agregar una imagen de fondo a la seccion de contacto
  //Y mejorar el h2 y otras cosas

  return (<div className="flex justify-left w-full">
    <div
      className="p-10 m-14 border rounded"
      id="Contact"
      style={{
        boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.25)"
      }}
    >
      <h2 className="grid place-items-center text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-8">
        {" "}
        Make your project real!
      </h2>
      <Form />
    </div>
    <div className="flex justify-center w-full">
      <div
      className="p-10 m-14 border rounded"
      id="Contact"
      style={{
        boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.25)"
      }}
    >
      <h2 className="grid place-items-center text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-8">
        {" "}
        Make your project real!
      </h2>
      <Form />
    </div>
    </div>
    
  </div>
    
  );
}
