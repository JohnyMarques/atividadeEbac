    $('.livraria').click(function(){
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 0 0000-0000')

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false
            },
            veiculoInteresse:{
                required: true
            }

           
            
        },
        messages: {
                nome: 'Por favor, insira seu nome'
            },

            submitHandler: function(form){
                console.log(form)
            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
    })

    $('.lista-livros button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
