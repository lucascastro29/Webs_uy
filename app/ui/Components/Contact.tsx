import Form from "@/app/ui/Components/Form";
export default function Page() {
  //En mi opinion hay que agregar una imagen de fondo a la seccion de contacto
  //Y mejorar el h2 y otras cosas

  return (
    <div
      className="py-10"
      id="Contact"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('contact-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="grid place-items-center text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-8">
        {" "}
        Make your project real!
      </h2>
      <Form />
    </div>
  );
}
