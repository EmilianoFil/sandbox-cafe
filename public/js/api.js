// public/js/api.js
export async function obtenerCliente(dni) {
  try {
    const res = await fetch(`https://us-central1-sandbox-cafe-emilianofil.cloudfunctions.net/obtenerCliente?dni=${dni}`);
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const json = await res.json();
    console.log("Respuesta obtenida:", json);
    return json;
  } catch (error) {
    console.error("Error al obtener cliente:", error);
    return { status: "error", error: error.message };
  }
}

export async function registrarClientePublico(data) {
  try {
    const res = await fetch("https://us-central1-sandbox-cafe-emilianofil.cloudfunctions.net/registrarClientePublico", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Error al registrar cliente:", error);
    return { status: "error", error: error.message };
  }
}