/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */



$(document).ready(function () {
  let row = 0,
    column = 0;
  $('.hint').focus(function () {

      $(this).css("background-color", "#81F79F")
      row = Math.floor(parseInt($(this).attr('id')) / 9)
      column = parseInt($(this).attr('id')) % 9
    })
    .blur(function () {
      $(this).css("background-color", "white");
    })
    .keydown(function (e) {
      row = Math.floor(parseInt($(this).attr('id')) / 9)
      column = parseInt($(this).attr('id')) % 9
      if (e.keyCode === 8) $(this).val(" ");
      if (e.keyCode === 37 && column > 0) {
        $(this).focusout();
        $('#' + (parseInt($(this).attr('id')) - 1).toString()).focus();

      }
      if (e.keyCode === 38 && row > 0) {
        $(this).focusout();
        $('#' + (parseInt($(this).attr('id')) - 9).toString()).focus();
      }
      if (e.keyCode === 39 && column < 8) {
        $(this).focusout();
        $('#' + (parseInt($(this).attr('id')) + 1).toString()).focus();
      }
      if (e.keyCode === 40 && row < 8) {
        $(this).focusout();
        $('#' + (parseInt($(this).attr('id')) + 9).toString()).focus();
      }
    })
    .keypress(function (e) {
      if (!isNaN(String.fromCharCode(e.which)) && String.fromCharCode(e.which) != 0) {
        e.preventDefault(); //stop character from entering input
        var v = String.fromCharCode(e.which)
        $(this).val(v);
      }
    })

  window.sessionStorage.clear();
})
