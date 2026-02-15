import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { CustomInput } from "./components/CustomInput";
import { useState } from "react";

export const App = () => {
  const [inputs, setInputs] = useState<Record<string, string>>({
    identificacion: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    habitacion: "",
    rh: "",
    fechaIngreso: "",
    fechaSalida: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // validar que no haya campos vacíos
    e.preventDefault();
    const hasEmptyFields = Object.values(inputs).some((value) => value === "");
    if (hasEmptyFields) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    alert("Formulario enviado con éxito");
  };
  return (
    <div className="min-h-dvh w-full flex items-center justify-center p-4">
      <form
        className="w-full max-w-3xl rounded-2xl p-5 sm:p-6 bg-indigo-400 font-bold shadow-2xl"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full text-2xl justify-center font-bold text-white text-shadow-md">
          Registro Hotel
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <CustomInput
            inputType="text"
            label="Identificación:"
            value={inputs.identificacion}
            name="identificacion"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="text"
            label="Nombre:"
            value={inputs.nombre}
            name="nombre"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="text"
            label="Apellidos:"
            value={inputs.apellidos}
            name="apellidos"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="number"
            label="Teléfono:"
            value={inputs.telefono}
            name="telefono"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="number"
            label="Habitación:"
            value={inputs.habitacion}
            name="habitacion"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="number"
            label="RH:"
            value={inputs.rh}
            name="rh"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="date"
            label="Fecha Ingreso:"
            value={inputs.fechaIngreso}
            name="fechaIngreso"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="date"
            label="Fecha Salida:"
            value={inputs.fechaSalida}
            name="fechaSalida"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center gap-3 flex-wrap mt-4">
          <button
            type="button"
            className="flex items-center justify-center bg-blue-100 rounded-md p-2 h-11 w-11 active:bg-cyan-700 active:text-white hover:outline-2"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            className="flex items-center justify-center bg-blue-100 rounded-md p-2 h-11 w-11 active:bg-cyan-700 active:text-white hover:outline-2"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-3">
          <button
            type="submit"
            className="flex justify-center items-center font-bold rounded-md p-2 bg-green-400 shadow-xs text-white gap-2 w-full sm:w-auto active:bg-green-700 active:text-white hover:outline-2"
          >
            <span>Registrar</span>
            <Check />
          </button>
          <button className="flex justify-center items-center font-bold rounded-md p-2 bg-red-400 text-white gap-2 w-full sm:w-auto active:bg-red-700 active:text-white hover:outline-2">
            <span>cancelar</span>
            <X />
          </button>
        </div>
      </form>
    </div>
  );
};
