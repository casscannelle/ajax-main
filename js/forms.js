import isCEP from "./valida-cep";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo (campo) {
    if (campo.name =="cep" && campo.value.length >= 8) {
        isCEP(campo);
    }
}