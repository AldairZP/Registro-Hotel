import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { CustomInput } from "./components/CustomInput";

export const App = () => {
  return (
    <div className="min-h-dvh w-full flex items-center justify-center p-4">
      <form className="w-full max-w-3xl rounded-2xl p-5 sm:p-6 bg-indigo-400 font-bold shadow-2xl">
        <div className="flex w-full text-2xl justify-center font-bold text-white text-shadow-md">
          Registro Hotel
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <CustomInput inputType="text" label="Identificación:" />
          <CustomInput inputType="text" label="Nombre:" />
          <CustomInput inputType="text" label="Apellidos:" />
          <CustomInput inputType="number" label="Teléfono:" />
          <CustomInput inputType="number" label="Habitación:" />
          <CustomInput inputType="number" label="RH:" />
          <CustomInput inputType="date" label="Fecha Ingreso:" />
          <CustomInput inputType="date" label="Fecha Salida:" />
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
            onClick={(e) => {
              console.log(e);
              e.preventDefault();
              alert("Registrado");
            }}
            className="flex justify-center items-center font-bold rounded-md p-2 bg-green-400 shadow-xs text-white gap-2 w-full sm:w-auto active:bg-green-700 active:text-white hover:outline-2"
          >
            <span>Registrar</span>
            <Check />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("Registrado");
            }}
            className="flex justify-center items-center font-bold rounded-md p-2 bg-red-400 text-white gap-2 w-full sm:w-auto active:bg-red-700 active:text-white hover:outline-2"
          >
            <span>cancelar</span>
            <X />
          </button>
        </div>
      </form>
    </div>
  );
};
