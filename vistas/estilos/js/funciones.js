// Pagina: crear encuesta

function respuestacorta() {
  var Image_Id = document.getElementById('rcorta');
  if (Image_Id.src.match("recursos/no-check.png")) {
    Image_Id.src = "recursos/check.png";
  }
  else {
    Image_Id.src = "recursos/no-check.png";
  }
}

function respuestalarga() {
  var Image_Id = document.getElementById('rlarga');
  if (Image_Id.src.match("recursos/no-check.png")) {
    Image_Id.src = "recursos/check.png";
  }
  else {
    Image_Id.src = "recursos/no-check.png";
  }
} 

const addButton = document.getElementById("add");
const hobbyWrapper = document.getElementById("hobby");
let i = 0
addButton.addEventListener("click", add);

function add (){
  i = i + 1
  const inputWrapper = document.createElement('div');
  inputWrapper.id = `inputWrapper-${i}` ;
  const input = document.createElement('input');
  input.placeholder = "More hobbies";
  inputWrapper.appendChild(input)
  
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'X';
  removeButton.onclick = () => { 
    hobbyWrapper.removeChild(inputWrapper)
  }
  
  inputWrapper.appendChild(removeButton);
  hobbyWrapper.appendChild(inputWrapper);
}

var faqs_row = 0;
function addfaqs() {
  html = '<tr id="faqs-row' + faqs_row + '">';
  html += '<td><form><input type="radio" name="" class=""><input type="text" id="black_color" name="" placeholder="Añadir opción" class="input_seleccion" style="margin-left:5px"></form></td>';
  html += '<td class=""><button class="button_delete" onclick="$(\'#faqs-row' + faqs_row + '\').remove();"><img src="recursos/borrar.png" class="x_button_delete"></button></td>';
  html += '</tr>';

$('#faqs tbody').append(html);

faqs_row++;
}

var faqs_row1 = 0;
function addfaqscheck() {
  html = '<tr id="faqs-row1' + faqs_row1 + '">';
  html += '<td><form><input type="checkbox" name="" class=""><input type="text" id="black_color" name="" placeholder="Añadir opción" class="input_seleccion" style="margin-left:5px"></form></td>';
  html += '<td class=""><button class="button_delete" onclick="$(\'#faqs-row1' + faqs_row1 + '\').remove();"><img src="recursos/borrar.png" class="x_button_delete"></button></td>';
  html += '</tr>';

$('#faqs1 tbody').append(html);

faqs_row1++;
}

var elements_row = 0;
function addelement() {
html =      '<div class="container" style="margin-top:20px; position: relative;" id="elements-row' + elements_row + '">';
html +=        '<div class="row">';
html +=          '<div class="col-xl-8" style="background-color: #40b4e5; border-radius: 20px;">';
html +=            '<div class="col-sm-12">';
html +=              '<textarea placeholder="Introduzca la pregunta" class="estilo_pregunta" rows="1" wrap="soft" id="white_color"></textarea>';
html +=              '<textarea placeholder="Respuesta corta" maxlength="70" class="estilo_respuestacorta" rows="1" wrap="soft" style="" readonly id="white_color"></textarea>';
html +=            '</div>';
html +=          '</div>';
html +=          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">';
html +=            '<div class="quitar_margenlista1" style="min-width: 100px; background-color: #047732; border-radius: 15px; padding-top: 15px; padding-bottom: 15px;">';
html +=              '<div class="row" style="justify-content: center;">';
html +=                '<div class="col" style="max-width: 60px;">';
html +=                  '<img src="recursos/copy.png" title="Duplicar" style="width: 40px; justify-content: center;">';
html +=                '</div>';
html +=                '<div class="col" style="max-width: 60px;">';
html +=                  '<img src="recursos/no-check.png" id="rcorta" onclick="respuestacorta()" value="Change Image" title="Importante" style="width: 40px; justify-content: center;">';
html +=                '</div>';
html +=                '<div class="col" style="max-width: 60px; margin-right: 10px;">';
html +=                  '<button onclick="$(\'#elements-row' + elements_row + '\').remove();"><img src="recursos/eliminar.png" title="Eliminar" style="width: 40px; justify-content: center;"></button>';
html +=                '</div>';
html +=              '</div>';
html +=            '</div>';
html +=          '</div>';
html +=          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">';
html +=            '<div class="quitar_margenlista" style="min-width: 100px; background-color: #047732; border-radius: 20px;">';
html +=              '<ul class="list-group list-group-flush">';
html +=                '<li class="list-group-item listgroup_format"><a href="#" class="quitar_linksdeco"><img src="recursos/garrapata.png" class="iconos_listgroup">Seleccion simple</a></li>';
html +=                '<li class="list-group-item listgroup_format"><a href="#" class="quitar_linksdeco"><img src="recursos/casilla.png" class="iconos_listgroup">Seleccion multiple</a></li>';
html +=                '<li class="list-group-item listgroup_format"><a href="#" class="quitar_linksdeco"><img src="recursos/linea.png" class="iconos_listgroup">Respuestas cortas</a></li>';
html +=                '<li class="list-group-item listgroup_format"><a href="#" class="quitar_linksdeco"><img src="recursos/lista.png" class="iconos_listgroup">Respuestas largas</a></li>';
html +=                '<li class="list-group-item listgroup_format"><a href="#" class="quitar_linksdeco"><img src="recursos/calendario.png" class="iconos_listgroup">Fecha</a></li>';
html +=                '<li class="list-group-item listgroup_format"><a href="#" class="quitar_linksdeco"><img src="recursos/imagen.png" class="iconos_listgroup">Multimedia</a></li>';
html +=              '</ul>';
html +=            '</div>';
html +=          '</div>';
html +=        '</div>';
html +=      '</div>';

$('#faqs2 tbody').append(html);

elements_row++;
}