const likeButtons = document.querySelectorAll(".btn-like");

likeButtons.forEach((button) => { //recorre cada botón de like,  
  button.addEventListener("click", () => {
    const post = button.closest(".post"); //buscar el post más cercano al botón que se ha hecho clic
    const likeCount = post.querySelector(".likes-count"); //busca el elemento que muestra el número de likes dentro del post

    let count = parseInt(likeCount.textContent); //obtenemos el numero actual de likes y con parseInt se asegura que sea entero
    count++;
    likeCount.textContent = `${count} like(s)`; //actualiza texto
  });
});
