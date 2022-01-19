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

var shortquestion_row = 0;
function shortquestion() {
html=     '<div class="container container_encuesta"  id="shortquestion-row' + shortquestion_row + '">'+
        '<div class="row">'+
          '<div class="col-xl-8 encuesta_col-xl-8">'+
            '<div class="col-sm-12">'+
              '<textarea placeholder="Introduzca la pregunta" class="estilo_pregunta" rows="1" wrap="soft" id="white_color"></textarea>'+
              '<textarea placeholder="Respuesta corta" maxlength="70" class="estilo_respuestacorta" rows="1" wrap="soft" style="" readonly id="white_color"></textarea>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista1">'+
              '<div class="row justify_content">'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/copy.png" title="Duplicar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/no-check.png" id="rlarga" onclick="respuestalarga()" value="Change Image" title="Importante" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col-eliminar col_encuesta">'+
                  '<button class="Btn_eliminar"  onclick="$(\'#shortquestion-row' + shortquestion_row + '\').remove();">'+
                    '<img src="recursos/eliminar.png" title="Eliminar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista">'+
              '<ul class="list-group list-group-flush">'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/garrapata.png" class="iconos_listgroup">Seleccion simple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/casilla.png" class="iconos_listgroup">Seleccion multiple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/linea.png" class="iconos_listgroup">Respuestas cortas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/lista.png" class="iconos_listgroup">Respuestas largas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/calendario.png" class="iconos_listgroup">Fecha</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/imagen.png" class="iconos_listgroup">Multimedia</button></li>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';

$('#newquestion').append(html);

shortquestion_row++;
}

var longquestion_row = 0;
function longquestion() {
html=     '<div class="container container_encuesta"  id="longquestion-row' + longquestion_row + '">'+
        '<div class="row">'+
          '<div class="col-xl-8 encuesta_col-xl-8">'+
            '<div class="col-sm-12">'+
              '<textarea placeholder="Introduzca la pregunta" class="estilo_pregunta" rows="1" wrap="soft" id="white_color"></textarea>'+
              '<textarea placeholder="Introduzca su respuesta" class="estilo_respuestalarga" rows="2" wrap="soft" id="black_color"></textarea>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista1">'+
              '<div class="row justify_content">'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/copy.png" title="Duplicar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/no-check.png" id="rlarga" onclick="respuestalarga()" value="Change Image" title="Importante" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col-eliminar col_encuesta">'+
                  '<button class="Btn_eliminar"  onclick="$(\'#longquestion-row' + longquestion_row + '\').remove();">'+
                    '<img src="recursos/eliminar.png" title="Eliminar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista">'+
              '<ul class="list-group list-group-flush">'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/garrapata.png" class="iconos_listgroup">Seleccion simple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/casilla.png" class="iconos_listgroup">Seleccion multiple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/linea.png" class="iconos_listgroup">Respuestas cortas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/lista.png" class="iconos_listgroup">Respuestas largas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/calendario.png" class="iconos_listgroup">Fecha</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/imagen.png" class="iconos_listgroup">Multimedia</button></li>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';

$('#newquestion').append(html);

longquestion_row++;
}

var multiplequestion_row = 0;
function multiplequestion() {
html=     '<div class="container container_encuesta"  id="multiplequestion-row' + multiplequestion_row + '">'+
        '<div class="row">'+
          '<div class="col-xl-8 encuesta_col-xl-8">'+
            '<div class="col-sm-12">'+
              '<textarea placeholder="Introduzca la pregunta" class="estilo_pregunta" rows="1" wrap="soft" id="white_color"></textarea>'+
              '<table id="faqs" class="table table-hover">'+
                '<tbody>'+
                  '<tr>'+
                    '<td>'+
                      '<form>'+
                        '<input type="radio" name="">'+
                        '<input type="text" id="black_color" name="" placeholder="Añadir opción" class="input_seleccion" style="margin-left:5px">'+
                      '</form>'+
                    '</td>'+
                    '<td class=""><button class="button_delete"><img src="recursos/borrar.png" class="x_button_delete"></button></td>'+
                  '</tr>'+
                '</tbody>'+
              '</table>'+
              '<div class="text-center">'+
                '<button onclick="addfaqs();" class="button_mas"><img src="recursos/anadir.png" class="plus_button_mas"></button>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista1">'+
              '<div class="row justify_content">'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/copy.png" title="Duplicar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/no-check.png" id="rlarga" onclick="respuestalarga()" value="Change Image" title="Importante" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col-eliminar col_encuesta">'+
                  '<button class="Btn_eliminar"  onclick="$(\'#multiplequestion-row' + multiplequestion_row + '\').remove();">'+
                    '<img src="recursos/eliminar.png" title="Eliminar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista">'+
              '<ul class="list-group list-group-flush">'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/garrapata.png" class="iconos_listgroup">Seleccion simple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/casilla.png" class="iconos_listgroup">Seleccion multiple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/linea.png" class="iconos_listgroup">Respuestas cortas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/lista.png" class="iconos_listgroup">Respuestas largas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/calendario.png" class="iconos_listgroup">Fecha</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/imagen.png" class="iconos_listgroup">Multimedia</button></li>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';

$('#newquestion').append(html);

multiplequestion_row++;
}

var checkquestion_row = 0;
function checkquestion() {
html=     '<div class="container container_encuesta"  id="checkquestion-row' + checkquestion_row + '">'+
        '<div class="row">'+
          '<div class="col-xl-8 encuesta_col-xl-8">'+
            '<div class="col-sm-12">'+
              '<textarea placeholder="Introduzca la pregunta" class="estilo_pregunta" rows="1" wrap="soft" id="white_color"></textarea>'+
              '<table id="faqs" class="table table-hover">'+
                '<tbody>'+
                  '<tr>'+
                    '<td>'+
                      '<form>'+
                        '<input type="checkbox" name="" class="">'+
                        '<input type="text" id="black_color" name="" placeholder="Añadir opción" class="input_seleccion" style="margin-left:5px">'+
                      '</form>'+
                    '</td>'+
                    '<td class=""><button class="button_delete"><img src="recursos/borrar.png" class="x_button_delete"></button></td>'+
                  '</tr>'+
                '</tbody>'+
              '</table>'+
              '<div class="text-center">'+
                '<button onclick="addfaqscheck();" class="button_mas"><img src="recursos/anadir.png" class="plus_button_mas"></button>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista1">'+
              '<div class="row justify_content">'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/copy.png" title="Duplicar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/no-check.png" id="rlarga" onclick="respuestalarga()" value="Change Image" title="Importante" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col-eliminar col_encuesta">'+
                  '<button class="Btn_eliminar"  onclick="$(\'#checkquestion-row' + checkquestion_row + '\').remove();">'+
                    '<img src="recursos/eliminar.png" title="Eliminar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista">'+
              '<ul class="list-group list-group-flush">'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/garrapata.png" class="iconos_listgroup">Seleccion simple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/casilla.png" class="iconos_listgroup">Seleccion multiple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/linea.png" class="iconos_listgroup">Respuestas cortas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/lista.png" class="iconos_listgroup">Respuestas largas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/calendario.png" class="iconos_listgroup">Fecha</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/imagen.png" class="iconos_listgroup">Multimedia</button></li>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';

$('#newquestion').append(html);

checkquestion_row++;
}

var datequestion_row = 0;
function datequestion() {
html=     '<div class="container container_encuesta"  id="datequestion-row' + datequestion_row + '">'+
        '<div class="row">'+
          '<div class="col-xl-8 encuesta_col-xl-8">'+
            '<div class="col-sm-12">'+
              '<textarea placeholder="Introduzca la pregunta" class="estilo_pregunta" rows="1" wrap="soft" id="white_color"></textarea>'+
              '<input type="date" placeholder="dd/mm/aaaa" id="black_color" class="date_custom">'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista1">'+
              '<div class="row justify_content">'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/copy.png" title="Duplicar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/no-check.png" id="rlarga" onclick="respuestalarga()" value="Change Image" title="Importante" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col-eliminar col_encuesta">'+
                  '<button class="Btn_eliminar"  onclick="$(\'#datequestion-row' + datequestion_row + '\').remove();">'+
                    '<img src="recursos/eliminar.png" title="Eliminar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista">'+
              '<ul class="list-group list-group-flush">'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/garrapata.png" class="iconos_listgroup">Seleccion simple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/casilla.png" class="iconos_listgroup">Seleccion multiple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/linea.png" class="iconos_listgroup">Respuestas cortas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/lista.png" class="iconos_listgroup">Respuestas largas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/calendario.png" class="iconos_listgroup">Fecha</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/imagen.png" class="iconos_listgroup">Multimedia</button></li>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';

$('#newquestion').append(html);

datequestion_row++;
}

var filequestion_row = 0;
function filequestion() {
html=     '<div class="container container_encuesta"  id="filequestion-row' + filequestion_row + '">'+
        '<div class="row">'+
          '<div class="col-xl-8 encuesta_col-xl-8">'+
            '<div class="col-sm-12">'+
              '<textarea placeholder="Introduzca la pregunta" class="estilo_pregunta" rows="1" wrap="soft" id="white_color"></textarea>'+
              '<input type="file" id="real-file" hidden="hidden">'+
              '<div class="row filequestion_margin">'+
                '<div class="col-10">'+
                  '<span id="custom-text">Adjuntar archivo</span>'+
                '</div>'+
                '<div class="col-2">'+
                  '<button type="button" id="custom-button" class="custom_calendarioBtn"><img src="recursos/archivo.png" class="custom_calendario"></button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista1">'+
              '<div class="row justify_content">'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/copy.png" title="Duplicar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col_encuesta">'+
                  '<button class="Btn_eliminar">'+
                    '<img src="recursos/no-check.png" id="rlarga" onclick="respuestalarga()" value="Change Image" title="Importante" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
                '<div class="col col-eliminar col_encuesta">'+
                  '<button class="Btn_eliminar"  onclick="$(\'#filequestion-row' + filequestion_row + '\').remove();">'+
                    '<img src="recursos/eliminar.png" title="Eliminar" class="Btn_opciones">'+
                  '</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-xs-12 col-sm-6 col-xl-2" style="">'+
            '<div class="quitar_margenlista">'+
              '<ul class="list-group list-group-flush">'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/garrapata.png" class="iconos_listgroup">Seleccion simple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/casilla.png" class="iconos_listgroup">Seleccion multiple</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/linea.png" class="iconos_listgroup">Respuestas cortas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/lista.png" class="iconos_listgroup">Respuestas largas</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/calendario.png" class="iconos_listgroup">Fecha</button></li>'+
                '<li class="list-group-item listgroup_format"><button class="quitar_buttondeco"><img src="recursos/imagen.png" class="iconos_listgroup">Multimedia</button></li>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';

$('#newquestion').append(html);

filequestion_row++;
}