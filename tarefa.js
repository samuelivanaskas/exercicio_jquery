$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecoTarefa = $('#nome-tarefa').val
        const novaTarefa = $(`<li></li>`);
        $(novaTarefa).html(enderecoTarefa);
        $(novaTarefa).appendTo("ul");

        $(`<div class="tarefa-jquery>${enderecoTarefa} </div`).appendTo(novaTarefa);

        $('#nome-tarefa').val('');
        $('#nome-tarefa').click(function() {

            $(this).css('text-decoration', 'line-through');

        })
});
