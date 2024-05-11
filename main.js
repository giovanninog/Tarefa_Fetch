document.addEventListener("DOMContentLoaded", function () {
  const listaAnimais = document.querySelector(".listaAnimais");

  fetch("https://663c044c17145c4d8c34f9be.mockapi.io/animal")
      .then((response) => response.json())
      .then((data) => {
          data.forEach((animal) => {
              const item = document.createElement("ol");
              item.textContent = `${animal.id} - ${animal.nome} (${animal.idade} anos) - ${animal.raca}`;
              listaAnimais.appendChild(item);
          });
      })
      .catch((error) => {
          console.error("Erro ao carregar animais:", error);
      });

  const cadastrarBotao = document.querySelector(".button");
  cadastrarBotao.addEventListener("click", async function () {
      const novoAnimal = {
          nome: "xico",
          idade: 5,
          raca: "gato"
      };

      try {
          await fetch("https://663c044c17145c4d8c34f9be.mockapi.io/animal", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(novoAnimal)
          });



// Teste com setTimeout para recarregar a pÃ¡gina

          setTimeout(function() {
            location.reload();
        }, 1500);
    } catch (error) {
        console.error("Erro ao cadastrar animal:", error);
    }
});
});

// Teste, quando clicar o botÃ£o "Cadastrar" ele desaparece e Aparece o "Loading"

document.addEventListener("DOMContentLoaded", function () {
    const botao1 = document.getElementById("botao1");
    const botao2 = document.getElementById("botao2");

    botao1.addEventListener("click", function () {
        
        botao2.style.display = "inline-block";
        botao1.remove();

    });
});
