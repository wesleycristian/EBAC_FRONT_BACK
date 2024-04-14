    $(document).ready(function() {
    $('header button').click (function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function (){
$ ('form').slideUp();
    })
    
    $('form').on ('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $ ('#endereco-imagem-nova').val();
        const novoItem =$('<li style= "display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`<div class="over-lay-imagem-link">
            <a href= "${enderecoDaNovaImagem}" target="_blanck" title= "Ver imagem em tamnho real">
                Ver imagem tamanho real
            </a>
        </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000)
        $('#endereco-imagem-nova').val ('')
    }) 
})
